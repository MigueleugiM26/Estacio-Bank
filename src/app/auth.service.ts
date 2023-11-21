// auth.service.ts
import { Injectable } from '@angular/core';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, UserCredential } from 'firebase/auth';
import { doc, setDoc, Firestore } from 'firebase/firestore';
import { collection, addDoc } from "firebase/firestore"; 
import { initializeApp } from "firebase/app";
import { db } from "../main";

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private auth = getAuth();



  private firestore = Firestore; 

  register(nome: string, sobrenome: string, cpf: string, email: string, password: string): Promise<void> {
    return createUserWithEmailAndPassword(this.auth, email, password)
      .then(async (userCredential: UserCredential) => {
        const user = userCredential.user;

        try {
          const docRef = await addDoc(collection(db, "users"), {
            nome,
            sobrenome,
            cpf,
            chaveAleatoria: this.makeid(),
            dinheiro: 100,
          });
          console.log("Document written with ID: ", docRef.id);
        } catch (e) {
          console.error("Error adding document: ", e);
        }
      });
  }

  makeid() {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
  
    for (let i = 0; i < 6; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
  
    result += '-';
  
    for (let i = 0; i < 3; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
  
    return result;
  }
  

  login(email: string, password: string): Promise<void> {
    return signInWithEmailAndPassword(this.auth, email, password)
      .then((userCredential: UserCredential) => {
      });
  }
}
