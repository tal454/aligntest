import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { icons } from 'src/app/constants/icons';
import { carouselState } from 'src/app/enum/carousel-state.enum';
import { Photo } from 'src/app/models/photo';


@Component({
  selector: 'photos-bar',
  templateUrl: './photos-bar.component.html',
  styleUrls: ['./photos-bar.component.scss']
})
export class PhotosBarComponent implements OnInit {

  @Input() photos: Photo[] = [];
  nextIcon = icons.outlineNavigateNext;
  previousIcon = icons.outlineNavigateBefore;
  @Output() photoSelectedEvent = new EventEmitter<any>();
  carouselState = carouselState.middle;

  constructor() {

  }

  ngOnInit(): void {
    
  }

  choosePhoto(index: any) {
    this.photoSelectedEvent.emit(index);
  }
  
  moveCarousel(direction) {
    if (direction == carouselState.right) {
      if (this.carouselState == carouselState.right)
        return;
      this.carouselState == carouselState.middle ? this.carouselState = carouselState.right : this.carouselState = carouselState.middle;
    } else {
      if (this.carouselState == carouselState.left)
        return;
      this.carouselState == carouselState.middle ? this.carouselState = carouselState.left : this.carouselState = carouselState.middle;
    }
  }

}
