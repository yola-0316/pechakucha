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

function Layout6({
  className = "",
  children,
  slideView,
  onCellUpdated,
}: LayoutProps) {
  console.log("render Layout1");

  return (
    <div className={clsx("grid grid-cols-4 gap-3 aspect-[16/9]", className)}>
      <SlideCell
        className=""
        slideView={slideView}
        cellID={0}
        onCellUpdated={onCellUpdated}
      />
      <SlideCell
        className="col-span-2"
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

function Layout6Thumb() {
  return (
    <div className="grid grid-cols-4 gap-0.5 min-w-[3rem] aspect-[16/9]">
      <div className="border border-slate-400 rounded-l bg-gray-100"></div>
      <div className="col-span-2 border border-slate-400 bg-gray-100"></div>
      <div className="border border-slate-400 rounded-r bg-gray-100"></div>
    </div>
  );
}

export { Layout6, Layout6Thumb };
