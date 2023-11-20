"use client";
import { CldUploadButton } from "next-cloudinary";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Upload } from 'lucide-react';

export default function UploadButton() {
  const router = useRouter();
  return (
    <Button asChild>
      <div className="flex gap-2 cursor-pointer">
        <Upload />
        <CldUploadButton
          uploadPreset="naal8wwm"
          onUpload={(): void => {
            setTimeout(() => {
              router.refresh();
            }, 1000);
          }}
        />
      </div>
    </Button>
  );
}
