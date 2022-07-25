import { useState, useCallback, useRef } from "react";
import Image from "next/image";
import Cropper from "react-easy-crop";
import ToolBar from "../ToolBar/ToolBar";

interface SlideCellProps {
  className?: string;
  children?: React.ReactNode;
}

const SlideCell: React.FC<SlideCellProps> = ({ className, children }) => {
  const [img, setImg] = useState("");
  const [edit, setEdit] = useState(false);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const inputRef = useRef<HTMLInputElement>(null);

  const onCropComplete = useCallback(
    (croppedArea: any, croppedAreaPixels: any) => {
      console.log(croppedArea, croppedAreaPixels);
    },
    []
  );

  const handleImageChoose = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImg(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleToolBarAction = (actionType: string) => {
    if (actionType === "upload") {
      inputRef.current?.click();
    }
  };

  return (
    <div className={`${className} border flex justify-center`}>
      {!img && (
        <div className="placeholder inline-flex items-center justify-center">
          <span>Click to add a image.</span>
          <input type="file" onChange={handleImageChoose} ref={inputRef} />
        </div>
      )}
      {img && (
        <div className="img-container w-full h-full relative">
          <ToolBar onAction={handleToolBarAction} />
          <Image
            src={img}
            width="100%"
            height="100%"
            alt="img"
            layout="fill"
            objectFit="cover"
          />
          {edit && (
            <Cropper
              image={img}
              crop={crop}
              zoom={zoom}
              aspect={4 / 3}
              onCropChange={setCrop}
              onCropComplete={onCropComplete}
              onZoomChange={setZoom}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default SlideCell;
