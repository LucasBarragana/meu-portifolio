import React, { useState } from "react";
import Image from "next/image";

const ProjectModal = ({ project, onClose }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const handleImageClick = (index) => {
    setSelectedImageIndex(index);
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-8 rounded-lg max-w-3xl w-90vw h-auto">
        <div className="flex justify-end">
          <button onClick={onClose} className="bg-gray-800 text-white px-2 py-1 mb-2 rounded-full hovered:bg-gray-900">
            X
          </button>
        </div>
        <div className="mb-8">
          <Image src={project.images[selectedImageIndex]} alt={`Project ${selectedImageIndex}`} width={800} height={600} className="shadow-lg"/>
        </div>
        <div className="grid grid-cols-3 gap-8 max-h-60 overflow-y-auto overflow-x-hidden">
          {project.images.map((image, index) => (
            <div key={index} onClick={() => handleImageClick(index)} style={{ cursor: 'pointer' }}>
              <Image src={image} alt={`Project ${index}`} width={300} height={200} className="shadow-lg transform transition-transform duration-300 hover:scale-105"/>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
