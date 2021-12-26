import { Component, HostListener, Input, OnInit } from '@angular/core';
import { Photo } from 'src/app/models/photo';

@Component({
  selector: 'primary-photo',
  templateUrl: './primary-photo.component.html',
  styleUrls: ['./primary-photo.component.scss']
})
export class PrimaryPhotoComponent implements OnInit {

  @Input() selectedPhoto: Photo;
  authorVisible = false;

  constructor() { }

  ngOnInit(): void {
  }

  changeVisibility() {
    this.authorVisible = !this.authorVisible;
  }
  

}
