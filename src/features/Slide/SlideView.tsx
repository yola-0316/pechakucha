import { FC, useRef, useCallback } from "react";
import { observer } from "mobx-react-lite";
import { useDebounce } from "rooks";
import { toJpeg } from "html-to-image";

import type { SlideView as ISlideView } from "@/stores/SlideStore";
import SlideCell from "./SlideCell";
import {
  Layout1,
  Layout2,
  Layout3,
  Layout4,
  Layout5,
  Layout6,
} from "@/components/Layout";

export type Layout =
  | "layout1"
  | "layout2"
  | "layout3"
  | "layout4"
  | "layout5"
  | "layout6";

const layouts = {
  layout1: Layout1,
  layout2: Layout2,
  layout3: Layout3,
  layout4: Layout4,
  layout5: Layout5,
  layout6: Layout6,
};

interface SlideViewProps {
  slide: ISlideView;
  layout: Layout;
}

const SlideView: FC<SlideViewProps> = ({ slide, layout }) => {
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
  const onAllCellUpdatedDebounced = useDebounce(onAllCellUpdated, 1000);

  const onCellUpdated = useCallback(() => {
    console.log("onCellUpdated");
    onAllCellUpdatedDebounced();
  }, [onAllCellUpdatedDebounced]);

  const Layout = layouts[layout];

  return (
    <div className="grow border p-3 aspect-[16/9]">
      <div ref={canvasRef}>
        <Layout slideView={slide} onCellUpdated={onCellUpdated} />
      </div>
    </div>
  );
};

export default observer(SlideView);
