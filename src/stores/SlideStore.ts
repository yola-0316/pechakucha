import { makeAutoObservable, runInAction } from "mobx";

import { AppStore } from ".";

export class SlideStore {
  rootStore;

  slides: SlideView[] = [];
  active: SlideView | undefined = undefined;

  constructor(rootStore: AppStore) {
    makeAutoObservable(this, { rootStore: false });
    this.rootStore = rootStore;
  }

  add = () => {
    const slide = new SlideView(this, this.slides.length);
    this.slides.push(slide);
    this.active = slide;
  };

  select = (slideView: SlideView) => {
    console.log(slideView, slideView.id);
    this.active = slideView;
  };

  update = (slideView: SlideView) => {
    this.slides.find((slide) => slide.id === slideView.id)?.update(slideView);
  };
}

export class SlideView {
  store: SlideStore;

  id: number;
  thumbnail: string | null = null;
  files: SlideFile[] = [];

  constructor(store: SlideStore, id: number) {
    makeAutoObservable(this, { store: false });
    this.store = store;

    this.id = id;
  }

  update = ({ files }: Partial<SlideView>) => {
    this.files = files ?? this.files;
  };

  addFile = (file: Partial<SlideFile>) => {
    const newfile = new SlideFile(this.store, file);
    this.files.push(newfile);
  };
}

export class SlideFile {
  store: SlideStore;

  type: "base64" | "url" = "base64";
  raw: string = "";
  meta: Record<string, any> = {};

  constructor(store: SlideStore, file: Partial<SlideFile>) {
    makeAutoObservable(this, { store: false });
    this.store = store;

    this.type = file.type ?? "base64";
    this.raw = file.raw ?? "";
    this.meta = file.meta ?? {};
  }
}
