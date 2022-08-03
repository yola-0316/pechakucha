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

function Layout4({
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
        className=""
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
      <SlideCell
        className=""
        slideView={slideView}
        cellID={3}
        onCellUpdated={onCellUpdated}
      />
    </div>
  );
}

function Layout4Thumb() {
  return (
    <div className="grid grid-rows-2 grid-cols-2 gap-0.5 min-w-[2rem] aspect-[16/9]">
      <div className="border border-slate-400 rounded-tl bg-gray-100"></div>
      <div className="border border-slate-400 rounded-tr bg-gray-100"></div>
      <div className="border border-slate-400 rounded-bl bg-gray-100"></div>
      <div className="border border-slate-400 rounded-br bg-gray-100"></div>
    </div>
  );
}

export { Layout4, Layout4Thumb };
