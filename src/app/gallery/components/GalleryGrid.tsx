"use client";

import ImageGrid from "@/components/ImageGrid";
import { SearchResult } from "../../../../type";
import CloudinaryImgsUi from "../../../components/CloudinaryImgsUi";

export default function GalleryGrid({ images }: { images: SearchResult[] }) {
  return (
    <ImageGrid
      images={images}
      getImage={(imageData: SearchResult) => {
        return (
          <CloudinaryImgsUi
            key={imageData.public_id}
            alt={imageData.public_id}
            imgData={imageData}
            width="400"
            height="300"
            sizes="100vw"
          />
        );
      }}
    />
  );
}
