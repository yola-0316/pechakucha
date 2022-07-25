import SlideCell from "../SlideCell/SlideCell";

function SlideLayout() {
  return (
    <div className="flex gap-3 border p-3 w-full aspect-[16/12]">
      <SlideCell className="basis-1/2" />
      <SlideCell className="basis-1/2" />
    </div>
  );
}

export default SlideLayout;
