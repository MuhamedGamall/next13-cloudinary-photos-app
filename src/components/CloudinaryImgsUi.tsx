"use client";
import { CldImage, CldImageProps } from "next-cloudinary";
import { Heart } from "lucide-react";

import { useState, useTransition } from "react";
import { SearchResult } from "../../type";
import { setAsFavoriteAction } from "../app/gallery/components/actions";
import ImageMenu from "./ImageMenu";

export default function CloudinaryImgsUi(
  props: {
    imgData: SearchResult;
    onUnHeart?: (unHeartResources: SearchResult) => void;
  } & Omit<CldImageProps, "src">
) {
  const [transition, startTransition] = useTransition();
  const { imgData, onUnHeart } = props;
  const [isFavorited, setIsFavorited] = useState(
    imgData.tags.includes("favorite")
  );
  return (
    <div className="relative">
      <CldImage {...props} src={imgData.public_id} className="" />
      <div>
        <Heart
          className={`absolute top-2 left-2 hover:text-red-500 cursor-pointer transition ${
            isFavorited ? "text-red-500" : "text-white"
          }`}
          onClick={() => {
            onUnHeart?.(imgData);
            setIsFavorited((prev: boolean) => !prev);
            startTransition(() => {
              setAsFavoriteAction(imgData.public_id, !isFavorited);
            });
          }}
        />
      </div>
      <div>
        <ImageMenu image={imgData} />
      </div>
    </div>
  );
}
