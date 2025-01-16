import { initializeApp } from "firebase/app";
import { signOut } from "firebase/auth";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth/web-extension";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "sonner";
const API_TOKEN = import.meta.env.VITE_FIREBASE_API_TOKEN;


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: `${API_TOKEN}`,
  authDomain: "netflix-clone-ca018.firebaseapp.com",
  projectId: "netflix-clone-ca018",
  storageBucket: "netflix-clone-ca018.firebasestorage.app",
  messagingSenderId: "770824729372",
  appId: "1:770824729372:web:28ddf5cfd47aa89b9d40d9",
  measurementId: "G-YLKYVT39FQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "user"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (error) {
    console.log(error);
    toast.error(error.code.split('/')[1].split('-').join(" "));
  }
};

const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.log(error);
    toast.error(error.code.split('/')[1].split('-').join(" "));
  }
};

const logout = () => {
  signOut(auth);
};

export { auth, db, login, signup, logout };
