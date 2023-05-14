import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap.model";

@Injectable({
 providedIn: 'root'
})

export class FaceSnapsService {

  faceSnaps: FaceSnap[] = [

    {
    id: 1,
    title: 'Blanche Neige',
    description: 'En attendant Charmant....',
    imageUrl: 'https://images.unsplash.com/photo-1541554685626-8016b713c293?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHByaW5jZXNzZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    createdDate: new Date(),
    snaps: 2500,
    location: 'Paris'
  },

  {
    id: 2,
    title: 'La bête',
    description: 'Ou est belle ?',
    imageUrl: 'https://images.unsplash.com/photo-1612628899093-92248c6f6c39?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGNvbnRlJTIwZGUlMjBmZWUlMjBiZWFzdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    createdDate: new Date(),
    snaps: 6,
    location: 'La montagne'
  },

  {

  id: 3,
  title: 'Maléfique',
  description: 'Ensorcelée !',
  imageUrl: 'https://images.unsplash.com/photo-1575918739118-f6587bd0aaff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHNvcmNpZXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
  createdDate: new Date(),
  snaps: 0
  }

];


getAllFaceSnaps(): FaceSnap[] {
return this.faceSnaps;

}

  getFaceSnapById(faceSnapId: number): FaceSnap {
    const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
    if (!faceSnap) {
      throw new Error("FaceSnap not found !");
    } else {
      return faceSnap;
    }

  }

 snapFaceSnapById(faceSnapId: number, snapType: 'snap' | 'unsnap' ): void {
  const faceSnap = this.getFaceSnapById(faceSnapId);
  snapType === 'snap' ? faceSnap.snaps++ : faceSnap.snaps--;
 }


}
