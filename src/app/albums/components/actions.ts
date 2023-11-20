"use server";
import cloudinary from "cloudinary";
import { SearchResult } from "../../../../type";

export async function addImageToAlbum(image: SearchResult, albumName: string) {
  await cloudinary.v2.api.create_folder(albumName);
  let parts = image.public_id.split("/");
  if (parts.length > 1) {
    parts = parts.slice(1);
  }
  const publicId = parts.join("/");

  await cloudinary.v2.uploader.rename(
    image.public_id,
    `${albumName}/${publicId}`
  );
}
