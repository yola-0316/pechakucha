import clsx from "clsx";
import { useState } from "react";
import {
  Layout1Thumb,
  Layout2Thumb,
  Layout3Thumb,
  Layout4Thumb,
  Layout5Thumb,
  Layout6Thumb,
} from "@/components/Layout";

interface OverlayProps {
  className?: string;
  children?: React.ReactNode;
  actions?: React.ReactNode;
  onAction: (actionType: string) => void;
}

const layoutList = {
  layout1: Layout1Thumb,
  layout2: Layout2Thumb,
  layout3: Layout3Thumb,
  layout4: Layout4Thumb,
  layout5: Layout5Thumb,
  layout6: Layout6Thumb,
};

function Overlay({ className = "", children, onAction }: OverlayProps) {
  console.log("render Overlay");
  const [isOptionsOpen, setIsOptionsOpen] = useState(false);

  const toggleOptions = () => {
    setIsOptionsOpen(!isOptionsOpen);
  };

  return (
    <div className={clsx("relative", className)}>
      <div className="text-[0]" onClick={toggleOptions}>{children}</div>

      <div
        className={clsx("absolute w-max", { hidden: !isOptionsOpen })}
        tabIndex={-1}
      >
        <ul className="grid grid-cols-3 grid-rows-2 gap-1 bg-white p-1 border">
          {Object.entries(layoutList).map(([layout, Layout]) => (
            <li
              className="cursor-pointer hover:bg-yellow-200 p-0.5"
              key={layout}
              onClick={() => {
                onAction(layout);
                setIsOptionsOpen(false);
              }}
            >
              <Layout />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export { Overlay };
