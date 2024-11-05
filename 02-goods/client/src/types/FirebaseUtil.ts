import { FirebaseApp } from "firebase/app";
import { FirebaseStorage } from "firebase/storage";

export type FirebaseUtil = {
  app: FirebaseApp;
  storage: FirebaseStorage;
};
