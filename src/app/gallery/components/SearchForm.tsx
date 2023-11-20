"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
export default function SearchForm({
  initialSearch,
}: {
  initialSearch: string;
}) {
  const [tagName, setTagName] = useState(initialSearch ?? "");
  const router = useRouter();
  useEffect(() => {
    setTagName(initialSearch);
  }, [initialSearch]);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        router.replace(`gallery?search=${encodeURIComponent(tagName.replace(/^./, c => c.toUpperCase()))}`);
        router.refresh();
      }}
    >
      <Label htmlFor="tag-name" className="text-right">
        Search By Tag
      </Label>
      <div className=" mt-2 flex items-center justify-center gap-2">
        <Input
          id="tag-name"
          value={tagName}
          className="col-span-3 "
          placeholder="Search By Tag Name"
          onChange={(e) => setTagName(e.target.value)}
        />
        <Button type="submit">Serach</Button>
      </div>
    </form>
  );
}
