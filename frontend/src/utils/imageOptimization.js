/**
 * Image optimization utilities for responsive and performant image loading
 */

/**
 * Generate responsive image sizes for different breakpoints
 * @param {string} imagePath - Base image path
 * @returns {object} Object with srcSet and sizes for responsive images
 */
export const getResponsiveImageProps = (imagePath) => {
  return {
    sizes: "(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 80vw",
    // Browsers will choose the best image based on device pixel ratio and viewport
  };
};

/**
 * Get optimized image URL with CDN parameters (if applicable)
 * @param {string} imagePath - Image path
 * @param {number} width - Desired width
 * @param {number} quality - Image quality (1-100)
 * @returns {string} Optimized image URL
 */
export const getOptimizedImageUrl = (imagePath, width = null, quality = 80) => {
  // If you add image optimization service later, implement here
  return imagePath;
};

/**
 * Create a blurhash placeholder or solid color for loading state
 * @returns {string} Data URL for placeholder
 */
export const getImagePlaceholder = () => {
  return "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1200' height='800'%3E%3Crect width='1200' height='800' fill='%23e2e8f0'/%3E%3C/svg%3E";
};

/**
 * Get aspect ratio class based on image dimensions
 * @param {string} type - Image type (gallery, hero, profile, etc)
 * @returns {string} Tailwind aspect ratio class
 */
export const getAspectRatioClass = (type = "gallery") => {
  const ratios = {
    gallery: "aspect-[4/5]",     // Portrait-leaning
    hero: "aspect-video",         // 16:9
    profile: "aspect-square",     // 1:1
    about: "aspect-[3/4]",       // Portrait
  };
  return ratios[type] || ratios.gallery;
};

/**
 * Handle image loading with graceful fallback
 * @param {Event} e - Image error event
 * @param {string} fallbackPath - Fallback image path
 */
export const handleImageError = (e, fallbackPath = "/images/gallery-1.png") => {
  e.target.onerror = null;
  e.target.src = fallbackPath;
  e.target.style.objectFit = "cover";
};

/**
 * Preload critical images for better performance
 * @param {Array<string>} imagePaths - Array of image paths to preload
 */
export const preloadImages = (imagePaths) => {
  imagePaths.forEach((path) => {
    const link = document.createElement("link");
    link.rel = "preload";
    link.as = "image";
    link.href = path;
    link.imagesrcset = path; // For responsive images
    document.head.appendChild(link);
  });
};

/**
 * Get image dimensions for maintaining aspect ratio
 * @param {string} type - Image type
 * @returns {object} Width and height values
 */
export const getImageDimensions = (type = "gallery") => {
  const dimensions = {
    gallery: { width: 450, height: 400 },
    galleryMobile: { width: 280, height: 300 },
    hero: { width: 1200, height: 600 },
    profile: { width: 80, height: 80 },
    about: { width: 500, height: 600 },
  };
  return dimensions[type] || dimensions.gallery;
};

/**
 * Check if image format is supported (for future webp/avif support)
 * @param {string} format - Image format (png, jpg, webp, avif)
 * @returns {boolean} Whether format is supported
 */
export const isFormatSupported = (format) => {
  const supported = ["png", "jpg", "jpeg", "gif"];
  return supported.includes(format.toLowerCase());
};

/**
 * Generate picture element with multiple source formats
 * @param {string} imagePath - Image path without extension
 * @param {string} alt - Alt text
 * @returns {object} Object with sources for picture element
 */
export const getPictureSourcesForFormat = (imagePath) => {
  return {
    webp: `${imagePath}.webp`,
    fallback: `${imagePath}.png`,
  };
};

export default {
  getResponsiveImageProps,
  getOptimizedImageUrl,
  getImagePlaceholder,
  getAspectRatioClass,
  handleImageError,
  preloadImages,
  getImageDimensions,
  isFormatSupported,
  getPictureSourcesForFormat,
};
