import { FC, useRef, useCallback } from "react";
import { observer } from "mobx-react-lite";
import { useDebounce } from "rooks";
import { toJpeg } from "html-to-image";

import type {
  SlideStore,
  SlideView as ISlideView,
  SlideFile,
} from "@/stores/SlideStore";
import SlideCell from "./SlideCell";

interface SlideViewProps {
  slide: ISlideView;
}

const SlideView: FC<SlideViewProps> = ({ slide }) => {
  console.log("rendering SlideView", Date.now(), slide);
  const canvasRef = useRef<HTMLDivElement>(null);

  const onAllCellUpdated = useCallback(() => {
    toJpeg(canvasRef.current!, {
      quality: 0.9,
      backgroundColor: "#fff",
      canvasWidth: 285,
      canvasHeight: 160,
      pixelRatio: 1,
    }).then((dataUrl) => {
      console.log(slide.id);
      slide?.updateThumbnail(dataUrl);
    });
  }, [slide]);
  const onAllCellUpdatedDebounced = useDebounce(onAllCellUpdated, 100);

  const onCellUpdated = useCallback(() => {
    console.log("onCellUpdated");
    onAllCellUpdatedDebounced();
  }, [onAllCellUpdatedDebounced]);

  return (
    <div className="grow border p-3 aspect-[16/9]">
      <div ref={canvasRef} className="grid grid-cols-2 gap-3 aspect-[16/9]">
        <SlideCell
          className="aspect-[8/9]"
          slideView={slide}
          cellID={0}
          onCellUpdated={onCellUpdated}
        />
        <SlideCell
          className="aspect-[8/9]"
          slideView={slide}
          cellID={1}
          onCellUpdated={onCellUpdated}
        />
      </div>
    </div>
  );
};

export default observer(SlideView);
