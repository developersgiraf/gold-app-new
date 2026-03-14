"use client";

import { HardDriveUpload } from "lucide-react";
import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import LayoutWrapper from "@/components/LayoutWrapper";
import Header from "@/components/header";

export default function ImageManager() {
  const [images, setImages] = useState<string[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const openFilePicker = () => {
    fileInputRef.current?.click();
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;

    if (!files) return;

    const newImages = Array.from(files).map((file) =>
      URL.createObjectURL(file)
    );

    setImages((prev) => [...prev, ...newImages]);
  };

  return (
    <LayoutWrapper title="Image Manager">
      {({ toggleSidebar, title }) => (
        <div className="flex justify-center">
          <div className="w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl h-screen flex flex-col">

            <Header
              onMenuClick={toggleSidebar}
              title={title}
              showBackground={false}
              showBackButton={true}
              onBackClick={() => router.back()}
              titleColor="text-popover-foreground"
              iconColor="text-popover-foreground"
            />

            {/* Upload Section */}
            <div className="flex flex-col items-center mt-10 gap-4">

              <div className="text-sm font-bold text-gray-700 shadow-md p-4 bg-white w-full">
                Upload an Image

                <div
                  className="border-2 border-dashed border-gray-400 rounded-lg px-2 py-10 mt-5 flex flex-col items-center gap-4 bg-[#2b595b19]"
                >
                  <HardDriveUpload
                    className="cursor-pointer w-12 h-12 text-gray-600 hover:text-black"
                    onClick={openFilePicker}
                  />

                  <div className="text-sm font-bold text-gray-700">
                    Click to upload Images
                    <p className="text-gray-500"> 
                      Support for multiple images
                    </p>
                  </div>
                </div>
              </div>

              {/* Hidden File Input */}
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                multiple
                className="hidden"
                onChange={handleImageChange}
              />
<h3 className=" text-popover-foreground mt-6 text-left font-semibold">Recently Added</h3>
              {/* Uploaded Images */}
              {images.length > 0 && (
                <div className="grid grid-cols-3 gap-3 mt-6 px-4">
                  {images.map((img, index) => (
                    <img
                      key={index}
                      src={img}
                      alt="uploaded"
                      className="w-full h-24 object-cover rounded-lg shadow"
                    />
                  ))}
                </div>
              )}

            </div>

          </div>
        </div>
      )}
    </LayoutWrapper>
  );
}