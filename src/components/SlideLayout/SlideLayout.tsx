import SlideCell from "../SlideCell/SlideCell";

function SlideLayout() {
  return (
    <div className="grow grid grid-cols-2 gap-3 border p-3 aspect-[16/9]">
      <SlideCell className="" />
      <SlideCell className="" />
    </div>
  );
}

export default SlideLayout;
