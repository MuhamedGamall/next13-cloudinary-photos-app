import cloudinary from "cloudinary";
import { SearchResult } from "../../../type";
import ForceRefresh from "@/components/ForceRefresh";
import FavoritesList from "./components/FavoritesList";

export default async function FavoritePage() {
  // fetch all gallerys from a cloudy server
  const results = (await cloudinary.v2.search
    .expression("resource_type:image AND tags:favorite ")
    .sort_by("created_at", "desc")
    .with_field("tags")
    .max_results(20)
    .execute()) as { resources: SearchResult[] };


  return (
    <>
      <section>
        <ForceRefresh />
        <div className="flex flex-col gap-8">
          <div className="flex justify-between">
            <h1 className="text-4xl font-bold">Favorites</h1>
          </div>
          <FavoritesList initialResources={results.resources} />
        </div>
      </section>
    </>
  );
}
