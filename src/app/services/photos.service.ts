import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ReplaySubject } from 'rxjs';
import { photosMsg } from '../enum/photos.enum';
import { Photo } from '../models/photo';
import { HorizontalPosition, snackBarClass, SnackMsgBar, VerticalPosition } from '../models/snack-bar';
import { PhotosRepository } from '../repositories/photos.repository';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  photos: Photo[];
  photosChanged: ReplaySubject<Photo[]> = new ReplaySubject<Photo[]>(1);
  snackMsgBar: SnackMsgBar;
  constructor(private photosRepository: PhotosRepository,
    private snackBar: MatSnackBar) {
    this.getRandomPhotos();
    this.snackMsgBar = new SnackMsgBar(this.snackBar);
  }

  getRandomPhotos(callback?: Function) {
    this.photosRepository.getRandomPhotos().subscribe(photos => {
      this.photos = photos;
      this.photosChanged.next(this.photos);
    }, err => {
      if ((err as HttpErrorResponse).status == 404)
        this.snackMsgBar.openSnackBar(
          photosMsg.noPhotosFoundMsg, snackBarClass.error, HorizontalPosition.Center, VerticalPosition.Bottom);
    })
  }
}
