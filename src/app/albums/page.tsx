import cloudinary from "cloudinary";
import { AlbumCard } from "./components/AlbumCard";
import { AlbumsFolder } from "../../../type";

export default async function AlbumsPage() {
  const { folders } = (await cloudinary.v2.api.root_folders()) as {
    folders: AlbumsFolder[];
  };

  return (
    <>
      <section>
        <div className="flex flex-col gap-8 ">
          <div className="flex justify-between">
            <h1 className="text-4xl font-bold">Albums</h1>
          </div>
          <div className="flex flex-col gap-4 md:grid grid-cols-3">
            {folders.map((folder, i) => (
              <AlbumCard key={i} folder={folder} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
