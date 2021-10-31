import { initializeApp } from "firebase/app";
import firebaseConfig from "./FireBase.config";
const fireBaseAuthentication=()=> initializeApp(firebaseConfig);
export default fireBaseAuthentication;