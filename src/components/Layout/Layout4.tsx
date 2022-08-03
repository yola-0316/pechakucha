import clsx from "clsx";
import { useState } from "react";

interface LayoutProps {
  className?: string;
  children?: React.ReactNode;
  actions?: React.ReactNode;
  onAction: (actionType: string) => void;
}

function Layout4({ className = "", children, onAction }: LayoutProps) {
  console.log("render Layout1");

  return <div className={clsx("", className)}></div>;
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
