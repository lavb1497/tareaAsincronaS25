import { Injectable } from '@angular/core';
import { collectionData, Firestore, deleteDoc } from '@angular/fire/firestore';
import { addDoc, collection, doc } from '@firebase/firestore';
import { Observable } from 'rxjs';
import { User } from '../interfaces/interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor( private firestore:Firestore) {}

  addUser(user:User){
    const userRef = collection(this.firestore, 'user');
    return addDoc(userRef, user)
  }

  getUser(): Observable<User[]>{
    const userRef = collection(this.firestore, 'user');
    return collectionData(userRef, {idField:'id'}) as Observable<User[]>
  }

  deletedUser(user:User){
    const userRef = doc(this.firestore, `user/${user.id}`);
    return deleteDoc(userRef)
  }
}
