import { getImageUrl } from "@/lib/utils";
import Image from "next/image";
import React from "react";

export default function UserAvatar({ image }: { image?: string }) {
  return (
    <div>
      {image ? (
        <Image src={getImageUrl(image)} height={40} width={40} alt="avatar" />
      ) : (
        <Image src="/avatar.png" height={40} width={40} alt="avatar" />
      )}
    </div>
  );
}
