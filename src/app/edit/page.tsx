"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { CldImage } from "next-cloudinary";
import { useState } from "react";

export default function EditPage({
  searchParams: { publicId },
}: {
  searchParams: { publicId: string };
}) {
  const [transformation, setTransformation] = useState<
    | undefined
    | "generative-fill"
    | "blur"
    | `removeBackground`
    | "pixelate"
    | "gray"
  >();

  const [prompt, setPrompt] = useState("");
  const [pendingPrompt, setPendingPrompt] = useState("");
  return (
    <section>
      <div className="flex flex-col gap-8 ">
        <div className="flex justify-between">
          <h1 className="text-4xl font-bold">Edit {publicId}</h1>
        </div>
        <div className="flex gap-4">
          <div className="flex flex-col gap-3">
            <Button
              onClick={() => {
                setTransformation("generative-fill");
                setPrompt(pendingPrompt);
              }}
            >
              Generative Fill
            </Button>
            <Label>Prompt</Label>
            <Input
              value={pendingPrompt}
              onChange={(e) => setPendingPrompt(e.target.value)}
            />
          </div>
          <Button onClick={() => setTransformation("removeBackground")}>
            Remove Background
          </Button>
          <Button onClick={() => setTransformation("gray")}>Gray Scale</Button>
          <Button onClick={() => setTransformation("pixelate")}>
            Pixelate
          </Button>
          <Button onClick={() => setTransformation("blur")}>Blur</Button>
          <Button variant="ghost" onClick={() => setTransformation(undefined)}>
            Clear All
          </Button>
        </div>
        <div className="grid grid-cols-2 gap-12">
          <div>
            <CldImage src={publicId} alt={publicId} width="400" height="300" />
          </div>
          {transformation === "generative-fill" && (
            <div>
              <CldImage
                src={publicId}
                alt={publicId}
                width={400}
                height={300}
                crop="pad"
                fillBackground={{ prompt }}
              />
            </div>
          )}
          {transformation === "blur" && (
            <div>
              <CldImage
                src={publicId}
                alt={publicId}
                width={400}
                height={300}
                crop="pad"
                blur={"300"}
              />
            </div>
          )}
          {transformation === "removeBackground" && (
            <div>
              <CldImage
                src={publicId}
                alt={publicId}
                width={400}
                height={300}
                removeBackground
              />
            </div>
          )}
          {transformation === "gray" && (
            <div>
              <CldImage
                src={publicId}
                alt={publicId}
                width={400}
                height={300}
                grayscale
              />
            </div>
          )}
          {transformation === "pixelate" && (
            <div>
              <CldImage
                src={publicId}
                alt={publicId}
                width={400}
                height={300}
                pixelate
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
