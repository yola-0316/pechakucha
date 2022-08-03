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
  files: Record<number, SlideFile> = {};

  constructor(store: SlideStore, id: number) {
    makeAutoObservable(this, { store: false }, { autoBind: true });
    this.store = store;

    this.id = id;
  }

  addFile(file: Omit<SlideFile, "objectUrl">) {
    const newfile = new SlideFile(this.store, file);
    this.files[newfile.id] = newfile;
  }

  updateThumbnail(thumbnail: string) {
    this.thumbnail = thumbnail ?? this.thumbnail;
  }
}

export class SlideFile {
  store?: SlideStore;

  id: number;
  type: "base64" | "url" = "base64";
  raw: ArrayBuffer;
  // objectUrl?: string | null = null;
  cdnUrl?: string | null = null;
  meta: Record<string, any> = {};

  constructor(store: SlideStore, file: Omit<SlideFile, "objectUrl">) {
    makeAutoObservable(this, { store: false }, { autoBind: true });
    this.store = store;

    this.id = file.id ?? 0;
    this.type = file.type ?? "base64";
    this.raw = file.raw;
    this.meta = file.meta ?? {};

    reaction(
      () => this.raw,
      () => {
        // this.objectUrl = URL.createObjectURL(this.raw);
        console.log("------1234", this.raw, this.objectUrl);
      }
    );
  }

  get objectUrl() {
    console.log("------1", this.raw);
    return window.URL.createObjectURL(new Blob([this.raw]));
  }
}
