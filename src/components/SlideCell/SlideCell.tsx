import { useState, useCallback } from "react";
import { useFilePicker } from "use-file-picker";
import {
  CropperRef,
  FixedCropper,
  ImageRestriction,
} from "react-advanced-cropper";
import "react-advanced-cropper/dist/style.css";
import ToolBar from "../ToolBar/ToolBar";

interface SlideCellProps {
  className?: string;
  children?: React.ReactNode;
}

const SlideCell: React.FC<SlideCellProps> = ({ className, children }) => {
  const [openFileSelector, { filesContent, loading, errors }] = useFilePicker({
    readAs: "DataURL",
    accept: "image/*",
    multiple: false,
  });

  const handleToolBarAction = (actionType: string) => {
    if (actionType === "upload") {
      return openFileSelector();
    }
    if (actionType === "crop") {
      // setEdit(true);
    }
  };

  const onChange = (cropper: CropperRef) => {
    console.log(cropper.getCoordinates(), cropper.getCanvas());
  };

  return (
    <div className={`${className} border flex justify-center`}>
      {!filesContent.length && (
        <div
          className="placeholder flex items-center justify-center cursor-pointer w-full"
          onClick={openFileSelector}
        >
          Click to add an image.
        </div>
      )}
      {filesContent[0] && (
        <div className="img-container w-full h-full relative">
          <ToolBar onAction={handleToolBarAction} />
          <FixedCropper
            className="w-full h-full"
            src={filesContent[0].content}
            onChange={onChange}
            stencilProps={{
              handlers: false,
              lines: false,
              movable: false,
              resizable: false,
              // aspectRatio: 16 / 9,
            }}
            stencilSize={{
              width: 500,
              height: 600,
            }}
            imageRestriction={ImageRestriction.stencil}
          />
        </div>
      )}
    </div>
  );
};

export default SlideCell;
