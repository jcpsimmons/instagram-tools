import React, { useCallback, useState, useRef } from "react";
import { toPng } from "html-to-image";
import { INSTAGRAM_DIMS } from "../constants";
import ReactImageUploading from "react-images-uploading";
import FramedPreview from "./FramedPreview";

export default function MultiGallery() {
  const [images, setImages] = useState([]);
  const [exportIndex, setExportingIndex] = useState(0);

  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };
  console.log(images);

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
            {imageList.map((image, index) => (
              <div key={index} className="image-item">
                <img src={image.data_url} alt="" width="100" />
                <div className="image-item__btn-wrapper">
                  <button onClick={() => onImageUpdate(index)}>Update</button>
                  <button onClick={() => onImageRemove(index)}>Remove</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </ReactImageUploading>
      <button>Continue</button>

      {!!images?.[0]?.data_url && <FramedPreview image={images[0]} />}
    </div>
  );
}
