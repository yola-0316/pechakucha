import { makeAutoObservable, runInAction } from "mobx";

import { Layout, Slide, SlideShow } from "@/interfaces";
import { AppStore } from ".";

class FileStore {
  rootStore;

  slides: Slide[] = [];

  constructor(rootStore: AppStore) {
    makeAutoObservable(this, { rootStore: false });
    this.rootStore = rootStore;
  }
}

export { FileStore };
