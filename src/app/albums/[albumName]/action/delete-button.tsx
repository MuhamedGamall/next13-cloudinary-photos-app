"use client";

import { redirect } from "next/navigation";
import { deleteAlbum } from "../../components/actions";
import { Button } from "@/components/ui/button";

export default function DeleteButton({ albumName }: any) {
  async function onDelete() {
    if (!albumName) {
      return redirect("/");
    }
    await deleteAlbum(albumName);
  }

  return <Button onClick={onDelete}>DeleteButton</Button>;
}
