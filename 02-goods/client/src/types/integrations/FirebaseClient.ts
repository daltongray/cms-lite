// firebase client
import * as Storage from "firebase/storage";
import { FirebaseApp } from "firebase/app";

export type FirebaseClientAppIntegration = { app: FirebaseApp };

export type FirebaseClientStorageIntegration = {
  storage: typeof Storage;
  rocketStorage: Storage.FirebaseStorage;
};
