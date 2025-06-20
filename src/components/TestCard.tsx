import Image from "next/image";
import React from "react";

interface TestCardProps {
  title: string;
  imageSrc: string;
  alt?: string;
}

const TestCard: React.FC<TestCardProps> = ({ title, imageSrc, alt = "" }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-sm bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="relative h-48 w-full">
          <Image
            src={imageSrc}
            alt={alt}
            fill
            style={{ objectFit: "cover" }}
            placeholder="empty"
          />
        </div>
        <div className="p-4">
          <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
        </div>
      </div>
    </div>
  );
};

export default TestCard;
