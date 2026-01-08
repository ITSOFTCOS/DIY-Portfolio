import React from "react";
import Image from "next/image";
type TestimonilsTypes = {
  message: string;
  image?: string;
  name: string;
  title?: string;
};
export default function TestimonialCard(props: TestimonilsTypes) {
  return (
    <div className="w-full h-80px bg-white shadow-2xl rounded-2xl">
      <p className="text-center text-xl text-gray-700 p-6 mx-auto">
        "{props.message}"
      </p>
      <div className="flex gap-2 p-6">
        <Image
          src={props.image ?? "/placeholder.png"}
          alt={""}
          width={50}
          height={50}
          className="rounded-full"
        />
        <div className="flex flex-col">
          <p className="text-xl font-bold">{props.name}</p>
          <p className="text-sm font-medium text-gray-500">{props.title}</p>
        </div>
      </div>
    </div>
  );
}
