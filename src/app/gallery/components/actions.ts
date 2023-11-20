"use server";
import cloudinary from "cloudinary";

export async function setAsFavoriteAction(
  publicId: string,
  isFavorited: boolean
) {
  if (isFavorited) {
    await cloudinary.v2.uploader.add_tag("favorite", [publicId]);
  } else {
    await cloudinary.v2.uploader.remove_tag("favorite", [publicId]);
  }
}
 