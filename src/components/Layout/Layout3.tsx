import clsx from "clsx";
import { useState } from "react";
import SlideCell from "@/features/Slide/SlideCell";
import type { SlideView } from "@/stores/SlideStore";

interface LayoutProps {
  className?: string;
  children?: React.ReactNode;
  actions?: React.ReactNode;
  slideView: SlideView;
  onCellUpdated?: () => void;
}

function Layout3({
  className = "",
  children,
  slideView,
  onCellUpdated,
}: LayoutProps) {
  console.log("render Layout1");

  return (
    <div
      className={clsx(
        "grid grid-rows-2 grid-cols-2 gap-3 aspect-[16/9]",
        className
      )}
    >
      <SlideCell
        className="row-span-2"
        slideView={slideView}
        cellID={0}
        onCellUpdated={onCellUpdated}
      />
      <SlideCell
        className=""
        slideView={slideView}
        cellID={1}
        onCellUpdated={onCellUpdated}
      />
      <SlideCell
        className=""
        slideView={slideView}
        cellID={2}
        onCellUpdated={onCellUpdated}
      />
    </div>
  );
}

function Layout3Thumb() {
  return (
    <div className="grid grid-rows-2 grid-cols-2 gap-0.5 min-w-[2rem] aspect-[16/9]">
      <div className="row-span-2 border border-slate-400 rounded-l bg-gray-100"></div>
      <div className="border border-slate-400 rounded-tr bg-gray-100"></div>
      <div className="border border-slate-400 rounded-br bg-gray-100"></div>
    </div>
  );
}

export { Layout3, Layout3Thumb };
