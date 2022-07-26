interface ToolBarProps {
  className?: string;
  children?: React.ReactNode;
  actions?: React.ReactNode;
  onAction?: (actionType: string) => void;
}

function ToolBar({ onAction }: ToolBarProps) {
  console.log("render ToolBar");

  return (
    <div className="absolute z-10 left-1/2 -translate-x-1/2 top-2 flex gap-2 px-2">
      <button
        className="border rounded-sm px-2 text-slate-50 bg-slate-800/50 hover:bg-slate-800/75"
        onClick={onAction?.bind(null, "crop")}
      >
        Crop
      </button>
      <button
        className="border rounded-sm px-2 text-slate-50 bg-slate-800/50 hover:bg-slate-800/75"
        onClick={onAction?.bind(null, "upload")}
      >
        Replace
      </button>
    </div>
  );
}

export default ToolBar;
