import React, { useCallback, useState, useRef } from "react";
import { toPng } from "html-to-image";
import { INSTAGRAM_DIMS } from "../constants";
import ReactImageUploading from "react-images-uploading";
import FramedPreview from "./FramedPreview";

export default function MultiGallery() {
  const imageRef = useRef(null);
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(0);

  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };
  console.log(images);

  const handleExport = (exportNumber) => {
    if (exportNumber > images.length - 1) {
      return null;
    }
    setSelectedImage(exportNumber);

    toPng(imageRef.current, { cacheBust: true })
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.download = `${Math.random()}.png`;
        link.href = dataUrl;
        link.click();
        return handleExport(exportNumber + 1);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <ReactImageUploading
        multiple
        value={images}
        onChange={onChange}
        dataURLKey="data_url"
        acceptType={["jpg"]}
      >
        {({
          imageList,
          onImageUpload,
          onImageRemoveAll,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps,
        }) => (
          // write your building UI
          <div className="upload__image-wrapper">
            <button
              style={isDragging ? { color: "red" } : null}
              onClick={onImageUpload}
              {...dragProps}
            >
              Click or Drop here
            </button>
            &nbsp;
            <button onClick={onImageRemoveAll}>Remove all images</button>
            <div style={{ display: "flex", flexWrap: "wrap" }}>
              {imageList.map((image, index) => (
                <div key={index} className="image-item">
                  <img
                    src={image.data_url}
                    alt=""
                    width="100"
                    onClick={() => setSelectedImage(index)}
                  />
                  <div className="image-item__btn-wrapper">
                    <button onClick={() => onImageUpdate(index)}>Update</button>
                    <button onClick={() => onImageRemove(index)}>Remove</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </ReactImageUploading>
      <div ref={imageRef} style={{ height: "1080px", width: "1080px" }}>
        {!!images?.[selectedImage]?.data_url && (
          <FramedPreview image={images[selectedImage]} />
        )}
      </div>
      <button onClick={() => handleExport(0)}>Export All</button>
    </div>
  );
}
