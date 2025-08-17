import { initializeApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword } from 'firebase/auth';

// Firebase config
export const firebaseConfig = {
  apiKey: "AIzaSyDcSJDdk_wnTMTjjy-SYJkfJPpSejlKbzA",
  authDomain: "kwarcs.firebaseapp.com",
  projectId: "kwarcs",
  storageBucket: "kwarcs.firebasestorage.app",
  messagingSenderId: "624286599351",
  appId: "1:624286599351:web:17fe4368a9b31ea2e02532",
  measurementId: "G-YGKSW76C1W"
};

// Initialize Firebase only once
const app = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0];

const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

// ---------- Auth Helpers ----------

// Create new user
export async function registerUser(email: string, password: string, firstName: string, lastName: string) {
  const userCred = await createUserWithEmailAndPassword(auth, email, password);
  await updateProfile(userCred.user, { displayName: `${firstName} ${lastName}` });
  return userCred.user;
}

// Login existing user
export async function loginUser(email: string, password: string) {
  const userCred = await signInWithEmailAndPassword(auth, email, password);
  return userCred.user;
}

// Logout
export function logoutUser() {
  return signOut(auth);
}

export { auth, provider, db };
export const logout = () => signOut(auth);