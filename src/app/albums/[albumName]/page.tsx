import cloudinary from "cloudinary";
import ImageGrid from "@/components/ImageGrid";
import CloudinaryImgsUi from "@/components/CloudinaryImgsUi";
import { SearchResult } from "../../../../type";
import ForceRefresh from "@/components/ForceRefresh";
type Params = {
  params: { albumName: string };
};
export default async function AlbumFolderDetailsPage({
  params: { albumName },
}: Params) {
  const cleanedName = albumName.replace(/%20/g, " ");

  const results = (await cloudinary.v2.search
    .expression(`resource_type:image AND folder=${cleanedName}`)
    .sort_by("created_at", "desc")
    .with_field("tags")
    .max_results(50)
    .execute()) as { resources: SearchResult[] };

  return (
    <>
      <section>
        <ForceRefresh />
        <div className="flex flex-col gap-8 ">
          <div className="flex justify-between">
            <h1 className="text-4xl font-bold">
              Album <small>- {cleanedName}</small>
            </h1>
          </div>
          <ImageGrid
            images={results.resources}
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
        </div>
      </section>
    </>
  );
}
