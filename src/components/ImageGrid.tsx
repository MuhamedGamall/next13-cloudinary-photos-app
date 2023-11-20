import React, { ReactNode } from "react";
import { SearchResult } from "../../type";

const MAX_COLS = 4;
export default function ImageGrid({
  images,
  getImage,
}: {
  images: SearchResult[];
  getImage: (imageData: SearchResult) => ReactNode;
}) {
  function getColumns(colIdx: number) {
    return images.filter((_, i) => i % MAX_COLS === colIdx);
  }
  return (
    <div className="grid grid-cols-4 gap-4 w-fit container">
      {[getColumns(0), getColumns(1), getColumns(2), getColumns(3)].map(
        (col, i) => {
          return (
            <div key={i} className="flex flex-col gap-4">
              {col.map(getImage)}
            </div>
          );
        }
      )}
    </div>
  );
}
