const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;

type ImageTransformOptions = {
  width?: number;
  height?: number;
  quality?: "auto" | number;
  format?: "auto" | "webp" | "avif" | "jpg" | "png";
  crop?: "fill" | "fit" | "scale" | "thumb";
};

export function getCloudinaryUrl(
  publicId: string,
  options: ImageTransformOptions = {}
): string {
  if (!cloudName) {
    console.warn("NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME is not set");
    return "";
  }

  const { width, height, quality = "auto", format = "auto", crop = "fill" } = options;

  const transformations: string[] = [];

  if (width) transformations.push(`w_${width}`);
  if (height) transformations.push(`h_${height}`);
  if (crop) transformations.push(`c_${crop}`);
  if (quality) transformations.push(`q_${quality}`);
  if (format) transformations.push(`f_${format}`);

  const transformString = transformations.length > 0 ? transformations.join(",") + "/" : "";

  return `https://res.cloudinary.com/${cloudName}/image/upload/${transformString}${publicId}`;
}

export function getThumbnailUrl(publicId: string): string {
  return getCloudinaryUrl(publicId, {
    width: 800,
    height: 450,
    crop: "fill",
    quality: "auto",
    format: "auto",
  });
}

export function getArticleImageUrl(publicId: string): string {
  return getCloudinaryUrl(publicId, {
    width: 1200,
    quality: "auto",
    format: "auto",
    crop: "scale",
  });
}
