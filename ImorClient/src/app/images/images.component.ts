import { Component, OnInit } from '@angular/core';
import { ImagesService } from '../images.service';
import { Image } from '../Image';
import { TagsService } from '../tags.service';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.scss']
})
export class ImagesComponent implements OnInit {

  images: Image[];

  constructor(private imagesService: ImagesService, private tagsService: TagsService) { }

  ngOnInit() {
    this.imagesService.getImages().subscribe(images => {
      images.forEach(image => {
        image.uri = encodeURIComponent(image.uri);
      })
      this.images = images;
    })
  }
}
