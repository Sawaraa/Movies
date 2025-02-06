import { initializeApp } from "firebase/app";
import { getAuth, 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    signOut } from "firebase/auth";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { EmailAuthProvider } from "firebase/auth/web-extension";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyDM2h_DA9uWWgBVczRAroA7vl6RSLMnbyU",
  authDomain: "movie-8f206.firebaseapp.com",
  projectId: "movie-8f206",
  storageBucket: "movie-8f206.firebasestorage.app",
  messagingSenderId: "1098658874228",
  appId: "1:1098658874228:web:0124687bdfd21d4f386221"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password)=>{
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;
        await addDoc(collection(db, "user"), {
            uid: user.uid,
            name,
            EmailAuthProvider: "local",
            email,
        });
    } catch (error) {
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(" "));
    }
}

const login = async (email,password)=>{
    try {
        await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(" "));
    }
}

const logout = ()=>{
    signOut(auth);
}

export {auth, db, login, signup, logout};