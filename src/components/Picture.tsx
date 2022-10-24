import React, { useState } from "react";

export const Picture = () => {
  const [picURL, setPicURL] = useState(
    "https://thypix.com/wp-content/uploads/2021/11/jojos-bizarre-dimension-profile-pics-thypix-107-698x700.jpg"
  );

  const [previewURL, setPreviewURL] = useState(
    "https://thypix.com/wp-content/uploads/2021/11/jojos-bizarre-dimension-profile-pics-thypix-107-698x700.jpg"
  );

  const [isOpen, setIsOpen] = useState(false);

  const handleUpload = (input: HTMLInputElement) => {
    const file = input.files![0];

    if (!file) return;

    const imageUrl = URL.createObjectURL(file);

    setPreviewURL(imageUrl);
  };

  return (
    <div>
      {isOpen && (
        <div>
          <div
            className="background"
            onClick={() => {
              setIsOpen(false);
            }}
          />

          <div className="modal">
            <div className="header">Upload a new profile picture</div>
            <div className="body">
              <div
                style={{
                  backgroundImage: `url(${previewURL})`,
                  height: "200px",
                  width: "200px",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  borderRadius: "50%",
                }}
              />
              <input
                type="file"
                onChange={(e) => {
                  handleUpload(e.currentTarget);
                }}
              />
            </div>
            <div className="footer">
              <button
                onClick={() => {
                  setPreviewURL(picURL);
                  setIsOpen(false);
                }}
              >
                CANCEL
              </button>
              <button
                onClick={() => {
                  setPicURL(previewURL);
                  setIsOpen(false);
                }}
              >
                SAVE
              </button>
            </div>
          </div>
        </div>
      )}

      <div
        onClick={() => setIsOpen(true)}
        style={{
          backgroundImage: `url(${picURL})`,
          height: "200px",
          width: "200px",
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: "50%",
          cursor: "pointer",
        }}
      />
    </div>
  );
};
