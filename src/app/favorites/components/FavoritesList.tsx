"use client";
import cloudinary from "cloudinary";

import ForceRefresh from "@/components/ForceRefresh";
import CloudinaryImgsUi from "@/components/CloudinaryImgsUi";
import { SearchResult } from "../../../../type";
import { useEffect, useState } from "react";
import ImageGrid from "@/components/ImageGrid";

export default function FavoritesList({
  initialResources,
}: {
  initialResources: SearchResult[];
}) {
  const [resources, setResources] = useState(initialResources);
  useEffect(() => {
    setResources(initialResources);
  }, [initialResources]);

  return (
    <ImageGrid
      images={resources}
      getImage={(imageData: SearchResult) => {
        return (
          <CloudinaryImgsUi
            key={imageData.public_id}
            imgData={imageData}
            width="400"
            height="300"
            alt="an image of something"
            onUnHeart={(unheartedResource) => {
              setResources((currentResources) =>
                currentResources.filter(
                  (resource) =>
                    resource.public_id !== unheartedResource.public_id
                )
              );
            }}
          />
        );
      }}
    />
  );
}
//what onUnHeart event ?
