import { Component, HostListener, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Photo } from './models/photo';
import { InactivityService } from './services/inactivity.service';
import { PhotosService } from './services/photos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {



  photos: Photo[] = [];
  primaryPhoto: Photo;
  photosSubscription: Subscription;

  constructor(private photosService: PhotosService,
    private inactivityService: InactivityService) {
  }

  //detect  if user is AFK 
  @HostListener('window:mousemove') refreshUserState() {
    this.inactivityService.clearUserTimeout();
    this.inactivityService.setUserTimeOut();
  }

  ngOnInit(): void {
    this.photosSubscription = this.photosService.photosChanged.subscribe(photos => {
      this.photos = photos;
      this.photos.forEach(image => {
        image.imageSrc = 'data:image/jpeg;base64,' + image.image;
      });
      this.primaryPhoto = this.photos[2];
    })

    this.inactivityService.userInactive.subscribe(() => {
      this.photosService.getRandomPhotos();
    }, () => {
      this.photosSubscription.unsubscribe();
    })

    this.inactivityService.setUserTimeOut();
  }

  changePrimaryPhoto(i) {
    this.primaryPhoto = this.photos[i];
  }



}
