import { Edit, Menu } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { AddToAlbumDialog } from "./AddToAlbumDialog";
import { SearchResult } from "../../type";
import { useState } from "react";
import Link from "next/link";

export default function ImageMenu({ image }: { image: SearchResult }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="absolute top-2 right-2">
      <DropdownMenu open={open} onOpenChange={setOpen}>
        <DropdownMenuTrigger asChild>
          <Menu />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-fit flex flex-col gap-2">
          <DropdownMenuItem
            asChild
            className="cursor-pointer"
            onClick={() => setOpen(false)}
          >
            <AddToAlbumDialog image={image} onClose={() => setOpen(false)} />
          </DropdownMenuItem>
          <DropdownMenuItem
            asChild
            className="text-left border flex gap-2 p-2 "
            onClick={() => setOpen(false)}
          >
            <Link
              href={`/edit?publicId=${encodeURIComponent(image.public_id)}`}
            >
              <Edit />
              Edit picture
            </Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
