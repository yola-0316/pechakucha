import { FC, useRef, useEffect } from "react";
import { toJS } from "mobx";
import { observer } from "mobx-react-lite";
import { useFilePicker } from "use-file-picker";
import {
  type FixedCropperRef,
  FixedCropper,
  ImageRestriction,
} from "react-advanced-cropper";
import "react-advanced-cropper/dist/style.css";

import type { SlideView } from "@/stores/SlideStore";
import ToolBar from "@/components/ToolBar/ToolBar";

interface SlideCellProps {
  className?: string;
  slideView: SlideView;
  cellID?: number;
  onCellUpdated?: () => void;
}

const SlideCell: FC<SlideCellProps> = ({
  className,
  slideView,
  cellID = 0,
  onCellUpdated,
}) => {
  console.log("rendering SlideCell", Date.now());

  const [openFileSelector, { clear, filesContent, loading, errors }] =
    useFilePicker({
      readAs: "ArrayBuffer",
      accept: "image/*",
      multiple: false,
    });

  useEffect(() => {
    if (!filesContent[0]) return;
    for (let [id, slide] of Object.entries(slideView.files)) {
      if (slide.meta.name === filesContent[0].name) {
        return;
      }
    }
    console.log("---", filesContent[0], slideView);
    slideView?.addFile({
      id: cellID,
      type: "base64",
      raw: filesContent[0].content as unknown as ArrayBuffer,
      meta: {
        name: filesContent[0].name,
      },
    });
    clear();
    return () => clear();
  }, [slideView, cellID, clear, filesContent]);

  const cropperRef = useRef<FixedCropperRef>(null);

  const handleToolBarAction = (actionType: string) => {
    if (actionType === "upload") {
      return openFileSelector();
    }
    if (actionType === "capture") {
    }
  };

  const onChange = (cropper: FixedCropperRef) => {
    // console.log(cropper.getCoordinates(), cropper.getCanvas());
    onCellUpdated?.();
  };

  const hasFile = slideView.files[cellID]?.raw !== undefined;
  console.log(toJS(slideView.files));

  return (
    <div className={`${className} border flex justify-center`}>
      {!hasFile && (
        <div
          className="placeholder flex items-center justify-center cursor-pointer w-full"
          onClick={openFileSelector}
        >
          Click to add an image.
        </div>
      )}

      {hasFile && slideView.files[cellID] && (
        <div className="img-container w-full h-full relative">
          <ToolBar
            className="transition-opacity opacity-0 hover:opacity-100"
            onAction={handleToolBarAction}
          />

          <FixedCropper
            className="w-full h-full"
            ref={cropperRef}
            src={slideView?.files?.[cellID].objectUrl}
            onChange={onChange}
            stencilProps={{
              handlers: false,
              lines: false,
              movable: false,
              resizable: false,
              aspectRatio: 8 / 9,
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

export default observer(SlideCell);
