import { Injectable } from '@angular/core';
import { collection, Firestore } from 'firebase/firestore';
import { collectionData } from 'rxfire/firestore';
import { Observable } from 'rxjs';
import { CocheInterface } from '../listarcoche/interfaces/coche.interface';

@Injectable({
  providedIn: 'root'
})
export class CochemodalService {

  constructor(private firestore: Firestore) { }

  getCoches(): Observable<CocheInterface[]> {
    const notesRef = collection(this.firestore, 'coches');
    return collectionData(notesRef, { idField: 'id'}) as Observable<CocheInterface[]>;
  }
}
