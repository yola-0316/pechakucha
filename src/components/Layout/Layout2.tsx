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

function Layout2({
  className = "",
  children,
  slideView,
  onCellUpdated,
}: LayoutProps) {
  console.log("render Layout1");

  return (
    <div className={clsx("grid grid-cols-3 gap-3 aspect-[16/9]", className)}>
      <SlideCell
        className="col-span-2"
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
    </div>
  );
}

function Layout2Thumb() {
  return (
    <div className="flex gap-0.5 min-w-[2rem] aspect-[16/9]">
      <div className="w-2/3 border border-slate-400 rounded-l bg-gray-100"></div>
      <div className="w-1/3 border border-slate-400 rounded-r bg-gray-100"></div>
    </div>
  );
}

export { Layout2, Layout2Thumb };
