import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { getAuth, onAuthStateChanged, signInWithRedirect, GoogleAuthProvider} from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

const firebaseConfig = {
  apiKey: "AIzaSyByiyI1KTRwtPdIEUn5WPBbh3GThOeizOI",
  projectId: "estacio-bank",
  messagingSenderId: "project-440509754854",
  appId: "1:440509754854:web:0ee79bb0f43a640086fa27"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));

const auth = getAuth();
const button = document.querySelector('button');

onAuthStateChanged (auth, user => {
  if (user == null) { return };
  console.log (user);
})

button?.addEventListener('click', clickEvent => {
  signInWithRedirect(auth, new GoogleAuthProvider);
})
