import React from "react";
import { Button } from "./ui/button";
import { Folder, Heart, Image as Images, Trash } from "lucide-react";
import Link from "next/link";
import { AlbumsFolder } from "../../type";
import cloudinary from "cloudinary";
export default async function Sidebar(): Promise<React.JSX.Element> {
  const { folders } = (await cloudinary.v2.api.root_folders()) as {
    folders: AlbumsFolder[];
  };


  return (
    <div className={" w-1/4 pb-12  border-r border-slate-300 sticky top-0"}>
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            Manage
          </h2>
          <div className="space-y-1">
            <Button
              asChild
              variant="secondary"
              className="w-full justify-start FLEX gap-2"
            >
              <Link href="/gallery">
                <Images />
                Gallery
              </Link>
            </Button>
            <Button
              asChild
              variant="ghost"
              className="w-full justify-start FLEX gap-2"
            >
              <Link href="/albums">
                <Folder />
                Albums
              </Link>
            </Button>
            <div className="flex flex-col ">
              {folders.map((folder) => (
                <Button
                asChild
                className=" justify-start flex gap-2 "
                  variant="ghost"
                  key={folder.name}
                >
                  <Link href={`/albums/${folder.path}`} className="ml-8">{folder.name}</Link>
                </Button>
              ))}
            </div>
            <Button
              asChild
              variant="ghost"
              className="w-full justify-start FLEX gap-2"
            >
              <Link href="/favorites">
                <Heart />
                Favorites
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
