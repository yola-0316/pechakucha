import type { FileContent } from "use-file-picker/dist/interfaces";

export type Layout = "one" | "two";

export type SlideContent = {
  raw: FileContent;
};

export type Slide = {
  id: number;
  thumbnail?: string;
  layout?: Layout;
  contents?: SlideContent[];
};

export type SlideShow = {
  activeSlide: Slide;
  slides: Slide[];
};
