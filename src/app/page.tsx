"use client";
import { redirect } from "next/navigation";

export default function Home() {
  function redirectToGallery() {
    return redirect("/gallery");
  }
  redirectToGallery();
  return <main></main>;
}
