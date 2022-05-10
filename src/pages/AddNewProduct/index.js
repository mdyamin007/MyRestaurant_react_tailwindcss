import React, { useState } from "react";
import Progress from "../../components/Progress";

const AddNewProduct = () => {
  const [name, setName] = useState("");
  const [image, setImage] = useState(null);
  const [file, setFile] = useState(null);
  const [description, setDescription] = useState("");
  const [error, setError] = useState(null);
  const [uploading, setUploading] = useState(false);

  const types = ["image/png", "image/jpeg", "image/jpg"];

  const handleFile = () => {
    let selected = file;

    if (selected && types.includes(selected.type)) {
      setImage(selected);
      setError("");
    } else {
      setImage(null);
      setError("Please select an image file (png or jpg)");
    }
  };

  return (
    <div className="main-content flex-1 bg-gray-100 mt-16 md:mt-12 pb-24 md:pb-5">
      <div className="mt-6 md:mt-4 flex items-center justify-center w-full h-full">
        {image && (
          <Progress name={name} file={image} description={description} />
        )}
        <div>
          {error && (
            <div className="bg-red-600 p-4 my-2 text-white">{error}</div>
          )}
          <h2 className="text-2xl font-bold text-gray-800">Add a Product</h2>
          <div className="mt-8 max-w-md">
            <div className="grid grid-cols-1 gap-6">
              <label className="block">
                <span className="text-gray-700">Product name</span>
                <input
                  type="text"
                  onChange={(e) => setName(e.target.value)}
                  className="
                    mt-1
                    block
                    w-full
                    py-1
                    px-3
                    rounded-md
                    border
                    border-gray-300
                    shadow-sm
                    focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                  "
                  placeholder="Pizza"
                />
              </label>
              <label className="block">
                <span className="text-gray-700">Product's Image</span>
                <input
                  type="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  className="
                    mt-1
                    block
                    w-full
                    py-1
                    px-3
                    rounded-md
                    border
                    border-gray-300
                    shadow-sm
                    focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                  "
                  placeholder="john@example.com"
                />
              </label>

              <label className="block">
                <span className="text-gray-700">Description</span>
                <textarea
                  onChange={(e) => setDescription(e.target.value)}
                  className="
                    mt-1
                    py-1
                    px-3
                    block
                    w-full
                    rounded-md
                    border
                    border-gray-300
                    shadow-sm
                    focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                  "
                  rows="3"
                ></textarea>
              </label>
              <button
                onClick={handleFile}
                disabled={uploading}
                className="px-4 py-2 bg-green-400 text-white text-lg font-bold"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNewProduct;
