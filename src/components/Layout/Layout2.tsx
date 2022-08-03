import clsx from "clsx";
import { useState } from "react";

interface LayoutProps {
  className?: string;
  children?: React.ReactNode;
  actions?: React.ReactNode;
  onAction: (actionType: string) => void;
}

function Layout2({ className = "", children, onAction }: LayoutProps) {
  console.log("render Layout1");

  return <div className={clsx("", className)}></div>;
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
