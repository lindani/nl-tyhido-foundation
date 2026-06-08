import { execSync } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';
import ffmpeg from 'ffmpeg-static';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const imagesDir = path.join(__dirname, 'frontend', 'public', 'images');
const outputVideo = path.join(__dirname, 'frontend', 'public', 'hero-video.mp4');

// Use available hero images, fallback to misc if needed
const availableHeroImages = fs.readdirSync(imagesDir)
  .filter(f => f.match(/^hero-\d+\.png$/))
  .sort((a, b) => {
    const numA = parseInt(a.match(/\d+/)[0]);
    const numB = parseInt(b.match(/\d+/)[0]);
    return numA - numB;
  });

const heroImages = availableHeroImages.length >= 4 
  ? availableHeroImages.slice(0, 4)
  : availableHeroImages.length > 0
    ? [...availableHeroImages, ...fs.readdirSync(imagesDir)
        .filter(f => f.match(/^misc-\d+\.png$/))
        .sort()
        .slice(0, 4 - availableHeroImages.length)]
    : ['misc-1.png', 'misc-2.png', 'misc-3.png', 'misc-4.png'];

try {
  // Verify all images exist
  for (const img of heroImages) {
    const imgPath = path.join(imagesDir, img);
    if (!fs.existsSync(imgPath)) {
      throw new Error(`Missing image: ${img}`);
    }
  }

  console.log(`Creating hero video with images: ${heroImages.join(', ')}`);

  // Create a temporary image sequence for FFmpeg
  const tempDir = path.join(__dirname, '.temp-video');
  if (!fs.existsSync(tempDir)) fs.mkdirSync(tempDir, { recursive: true });

  // Copy images to temp directory as sequence: img-1.png, img-2.png, etc.
  for (let i = 0; i < heroImages.length; i++) {
    const src = path.join(imagesDir, heroImages[i]);
    const dest = path.join(tempDir, `img-${i + 1}.png`);
    fs.copyFileSync(src, dest);
  }

  // FFmpeg command: each image displayed for 2.5 seconds (10 seconds total for 4 images)
  // Output video: 1080p, 30fps, h.264 codec
  const ffmpegCmd = `"${ffmpeg}" -y -framerate 1/2.5 -i "${path.join(tempDir, 'img-%d.png')}" -c:v libx264 -pix_fmt yuv420p -vf "scale=1920:1080:force_original_aspect_ratio=decrease,pad=1920:1080:(ow-iw)/2:(oh-ih)/2" "${outputVideo}"`;

  execSync(ffmpegCmd, { stdio: 'inherit', shell: true });

  // Clean up temp directory
  fs.rmSync(tempDir, { recursive: true, force: true });
  
  console.log(`✓ Hero video created: ${outputVideo}`);
} catch (err) {
  console.error('Video creation failed:', err.message);
  process.exit(1);
}
