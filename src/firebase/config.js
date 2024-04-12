import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDsLYa8EAXj7TZYNLR7NOH0mWIXrgNijvE",
  authDomain: "nestegg-5ab01.firebaseapp.com",
  projectId: "nestegg-5ab01",
  storageBucket: "nestegg-5ab01.appspot.com",
  messagingSenderId: "464766472629",
  appId: "1:464766472629:web:c095ebc6f1925bc53ac9fc"
};

const app = initializeApp(firebaseConfig);

export { app };