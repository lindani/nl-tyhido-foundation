import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import heicConvert from 'heic-convert';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const sourceWindowsPath = 'C:\\Users\\cash\\Documents\\Projects\\Ndibs-pics-20260507T175829Z-3-001';

const sourceDir = process.platform === 'win32'
  ? path.win32.normalize(sourceWindowsPath)
  : sourceWindowsPath.replace(/^([A-Za-z]):\\/, (_, drive) => `/mnt/${drive.toLowerCase()}/`).replace(/\\/g, '/');

const outputDir = path.join(__dirname, 'frontend', 'public', 'images');

const hasImages = async (dir) => {
  if (!fs.existsSync(dir)) return false;
  const entries = await fs.promises.readdir(dir);
  return entries.some((name) => supportedExts.includes(path.extname(name).toLowerCase()));
};

const resolveSourceDirectory = async (dir) => {
  if (await hasImages(dir)) return dir;

  const nestedFolder = path.join(dir, 'Ndibs-pics');
  if (await hasImages(nestedFolder)) return nestedFolder;

  const entries = await fs.promises.readdir(dir, { withFileTypes: true });
  const firstSubdir = entries.find((entry) => entry.isDirectory());
  if (firstSubdir) {
    const nested = path.join(dir, firstSubdir.name);
    if (await hasImages(nested)) return nested;
  }

  return dir;
};

const supportedExts = ['.heic', '.heif', '.jpg', '.jpeg', '.png'];

// Image size presets for different categories
const imageSizePresets = {
  hero: { width: 1200, height: 800, fit: 'cover' },      // Full-width hero images
  gallery: { width: 600, height: 400, fit: 'cover' },    // Gallery grid items
  about: { width: 800, height: 600, fit: 'cover' },      // About section
  misc: { width: 600, height: 400, fit: 'cover' },       // Miscellaneous/fallback
  thumbnail: { width: 300, height: 200, fit: 'cover' },  // Thumbnail size
};

const mapOutputName = (index, group) => `${group}-${index + 1}.png`;

// Optimize and resize image based on its category
const convertImage = async (sourcePath, outputPath, group = 'misc') => {
  const ext = path.extname(sourcePath).toLowerCase();
  const preset = imageSizePresets[group] || imageSizePresets.misc;

  let image = sharp(sourcePath);

  // Convert HEIC/HEIF to PNG buffer first
  if (ext === '.heic' || ext === '.heif') {
    const inputBuffer = await fs.promises.readFile(sourcePath);
    const pngBuffer = await heicConvert({
      buffer: inputBuffer,
      format: 'PNG',
      quality: 0.9,
    });
    image = sharp(pngBuffer);
  }

  // Resize with fit mode, then compress PNG
  await image
    .resize(preset.width, preset.height, { fit: preset.fit, withoutEnlargement: true })
    .png({ quality: 85, progressive: true, compressionLevel: 9 })
    .toFile(outputPath);
};

const copyFile = async (sourcePath, outputPath) => {
  await fs.promises.copyFile(sourcePath, outputPath);
};

const formatBytes = (bytes) => {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + ' ' + sizes[i];
};

const main = async () => {
  try {
    await fs.promises.mkdir(outputDir, { recursive: true });
    const actualSourceDir = await resolveSourceDirectory(sourceDir);
    const entries = await fs.promises.readdir(actualSourceDir);
    const sourceFiles = entries
      .filter((name) => supportedExts.includes(path.extname(name).toLowerCase()))
      .sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }));

    if (!sourceFiles.length) {
      console.warn(`No supported image files found in ${actualSourceDir}`);
      return;
    }

    const mappedFiles = [];
    const categories = [
      { group: 'hero', count: 4 },
      { group: 'gallery', count: 6 },
      { group: 'about', count: 2 },
    ];

    let sourceIndex = 0;
    for (const category of categories) {
      for (let i = 0; i < category.count && sourceIndex < sourceFiles.length; i += 1, sourceIndex += 1) {
        const sourceName = sourceFiles[sourceIndex];
        const sourcePath = path.join(actualSourceDir, sourceName);
        const outputName = mapOutputName(i, category.group);
        const outputPath = path.join(outputDir, outputName);

        await convertImage(sourcePath, outputPath, category.group);
        const fileSize = fs.statSync(outputPath).size;
        mappedFiles.push(outputName);
        console.log(`✓ Imported ${sourceName} -> ${outputName} (${formatBytes(fileSize)})`);
      }
    }

    for (let i = sourceIndex; i < sourceFiles.length; i += 1) {
      const sourceName = sourceFiles[i];
      const sourcePath = path.join(actualSourceDir, sourceName);
      const outputName = `misc-${i - sourceIndex + 1}.png`;
      const outputPath = path.join(outputDir, outputName);
      await convertImage(sourcePath, outputPath, 'misc');
      const fileSize = fs.statSync(outputPath).size;
      mappedFiles.push(outputName);
      console.log(`✓ Imported ${sourceName} -> ${outputName} (${formatBytes(fileSize)})`);
    }

    console.log(`Successfully imported ${mappedFiles.length} images to ${outputDir}`);
  } catch (err) {
    console.error('Image import failed:', err);
  }
};

main();
