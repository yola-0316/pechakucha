import { makeAutoObservable, reaction } from "mobx";

import { AppStore } from ".";

export class SlideStore {
  rootStore;

  slides: SlideView[] = [];
  active: SlideView | undefined = undefined;

  constructor(rootStore: AppStore) {
    makeAutoObservable(this, { rootStore: false }, { autoBind: true });
    this.rootStore = rootStore;
  }

  add() {
    const slide = new SlideView(this, this.slides.length);
    this.slides.push(slide);
    this.active = slide;
  }

  select(slideView: SlideView) {
    console.log(slideView, slideView.id);
    this.active = slideView;
  }
}

export class SlideView {
  store: SlideStore;

  id: number;
  thumbnail: string | null = null;
  files: SlideFile[] = [];

  constructor(store: SlideStore, id: number) {
    makeAutoObservable(this, { store: false }, { autoBind: true });
    this.store = store;

    this.id = id;
  }

  addFile(file: Partial<SlideFile>) {
    const newfile = new SlideFile(this.store, file);
    this.files.push(newfile);
  }

  updateThumbnail(thumbnail: string) {
    this.thumbnail = thumbnail ?? this.thumbnail;
  }
}

export class SlideFile {
  store: SlideStore;

  id: number;
  type: "base64" | "url" = "base64";
  raw: string = "";
  meta: Record<string, any> = {};

  constructor(store: SlideStore, file: Partial<SlideFile>) {
    makeAutoObservable(this, { store: false }, { autoBind: true });
    this.store = store;

    this.id = file.id ?? 0;
    this.type = file.type ?? "base64";
    this.raw = file.raw ?? "";
    this.meta = file.meta ?? {};
  }
}
