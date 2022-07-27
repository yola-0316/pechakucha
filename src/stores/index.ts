import { makeAutoObservable } from "mobx";
import { enableStaticRendering } from "mobx-react-lite";

import { SlideStore } from "./SlideStore";
import { FileStore } from "./FileStore";

enableStaticRendering(typeof window === "undefined");

class AppStore {
  slideStore: SlideStore;
  fileStore: FileStore;

  constructor() {
    makeAutoObservable(this);
    this.slideStore = new SlideStore(this);
    this.fileStore = new FileStore(this);
  }
}

export { AppStore };
