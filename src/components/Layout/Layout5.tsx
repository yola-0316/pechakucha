import clsx from "clsx";
import { useState } from "react";

interface LayoutProps {
  className?: string;
  children?: React.ReactNode;
  actions?: React.ReactNode;
  onAction: (actionType: string) => void;
}

function Layout5({ className = "", children, onAction }: LayoutProps) {
  console.log("render Layout1");

  return <div className={clsx("", className)}></div>;
}

function Layout5Thumb() {
  return (
    <div className="grid grid-cols-3 gap-0.5 min-w-[2rem] aspect-[16/9]">
      <div className="border border-slate-400 rounded-l bg-gray-100"></div>
      <div className="border border-slate-400 bg-gray-100"></div>
      <div className="border border-slate-400 rounded-r bg-gray-100"></div>
    </div>
  );
}

export { Layout5, Layout5Thumb };
