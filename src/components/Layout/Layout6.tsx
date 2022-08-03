import clsx from "clsx";
import { useState } from "react";

interface LayoutProps {
  className?: string;
  children?: React.ReactNode;
  actions?: React.ReactNode;
  onAction: (actionType: string) => void;
}

function Layout6({ className = "", children, onAction }: LayoutProps) {
  console.log("render Layout1");

  return <div className={clsx("", className)}></div>;
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
