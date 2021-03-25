/*
  Ce fichier contient les variables de configuration
  reliées à Firebase et ses produits.
*/

// Configuration Firebase (mettez-y les vôtres !)
const firebaseConfig = {
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  apiKey: "AIzaSyBozBJDhErsze0IJgygOky2hplt-rhhlB8",
  authDomain: "panier-achat-fsj.firebaseapp.com",
  databaseURL: "https://panier-achat-fsj-default-rtdb.firebaseio.com",
  projectId: "panier-achat-fsj",
  storageBucket: "panier-achat-fsj.appspot.com",
  messagingSenderId: "827452650180",
  appId: "1:827452650180:web:7c8928380ddc7d8a844f91",
  measurementId: "G-7SJNXY6SXX"
};
export default firebaseConfig;

// Nom de la collection principale
export const utilRef = "utilisateurs-ex5";
// Nom de la sous-collection
export const dossRef = "dossiers";