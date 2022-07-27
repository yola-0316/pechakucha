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
  slide?: ISlideView;
  onSlideUpdated?: SlideStore["update"];
}

const SlideView: FC<SlideViewProps> = ({
  slide,
  onSlideUpdated = () => {},
}) => {
  console.log("rendering SlideView", Date.now(), slide);
  const canvasRef = useRef<HTMLDivElement>(null);

  // const onAllCellUpdated = (content: SlideFile, no: number) => {
  //   toJpeg(canvasRef.current!, {
  //     quality: 0.9,
  //     backgroundColor: "#fff",
  //     canvasWidth: 285,
  //     canvasHeight: 160,
  //     pixelRatio: 1,
  //   }).then((dataUrl) => {
  //     onSlideUpdated({ ...slide, thumbnail: dataUrl });
  //   });
  // };
  // const onAllCellUpdatedDebounced = useDebounce(onAllCellUpdated, 100);

  const onCellUpdated = useCallback((content: SlideFile, no?: number) => {
    console.log("onCellUpdated", content, no);
    // onSlideUpdated({ ...slide, contents: [content] });
    // onAllCellUpdatedDebounced(content, no);
  }, []);

  return (
    <div className="grow border p-3 aspect-[16/9]">
      <div ref={canvasRef} className="grid grid-cols-2 gap-3 aspect-[16/9]">
        <SlideCell className="aspect-[8/9]" slideView={slide} />
        {/* <SlideCell className="aspect-[8/9]" slideView={slide} /> */}
        {/* <SlideCell
          className="aspect-[8/9]"
          content={slide.contents?.[1]}
          // onCellUpdated={(content) => onCellUpdated(content, 2)}
          onContentUpdated={onCellUpdated}
        /> */}
      </div>
    </div>
  );
};

export default observer(SlideView);
