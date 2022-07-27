import Image from "next/image";
import { FC } from "react";
import { observer } from "mobx-react-lite";
import { clsx } from "clsx";

import { useStore } from "@/components/StoreProvider";
import SlideView from "./SlideView";

interface SlideShowProps {}

const SlideWorkspace: FC<SlideShowProps> = () => {
  console.log("rendering SlideWorkspace", Date.now());
  const { slideStore } = useStore();

  return (
    <div className="w-full h-full">
      <div className="flex items-center h-8 border-b">
        <div className="filmstrip-actions">
          <button onClick={slideStore.add}>+</button>
        </div>
      </div>

      <div
        className="w-full h-full flex gap-2"
        style={{ height: "calc(100% - 2rem)" }}
      >
        <div className="filmstrip w-60 shrink-0">
          <ul className="h-full pr-4 py-2 overflow-scroll">
            {slideStore.slides.map((slide) => (
              <li
                key={slide.id}
                className={clsx("group flex gap-2 mb-1 p-1", {
                  "bg-yellow-50": slide.id === slideStore.active?.id,
                })}
                onClick={() => {
                  slideStore.select(slide);
                }}
              >
                <div className="w-[2em] text-xs text-right">{slide.id}</div>
                <div
                  className="p-2 border group-hover:border-slate-400 rounded-sm bg-white"
                  style={{ width: "calc(100% - 2em)" }}
                >
                  <div className="bg-slate-200 aspect-[16/9]">
                    {slide.thumbnail && <img src={slide.thumbnail} />}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <main
          className="slideview grow flex items-center relative"
          style={{ width: "calc(100% - 15.5rem)" }}
        >
          <div className="absolute top-5 left-1/2 -translate-x-1/2 border p-2 bg-slate-100">
            Debug Info:
            <ul>
              <li>slide id: {slideStore.active?.id}</li>
              <li>files: {slideStore.active?.files.length}</li>
            </ul>
          </div>

          {slideStore.active && (
            <SlideView
              slide={slideStore.active}
              onSlideUpdated={slideStore.update}
            />
          )}
        </main>
      </div>
    </div>
  );
};

export default observer(SlideWorkspace);
