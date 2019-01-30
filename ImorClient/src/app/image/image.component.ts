import { Component, OnInit } from '@angular/core';
import {Image} from "../Image";
import {Tag} from "../Tag";
import { ImagesService } from '../images.service';
import { ActivatedRoute } from '@angular/router';
import { Observable, of} from 'rxjs';
import { Location } from '@angular/common';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit {

  image: Image;
  similarImages: Image[];

  constructor(private imageService: ImagesService, private route: ActivatedRoute, private location: Location) {    
  }

  ngOnInit() {
    this.imageService.getImageByUri(this.route.snapshot.paramMap.get('uri')).subscribe(image => {
      image.tags.forEach(tag => tag.uri = encodeURIComponent(tag.uri))

      this.imageService.getRecommendedPictures(this.route.snapshot.paramMap.get('uri')).subscribe(images => {
        images.forEach(image => {
          image.uri = encodeURIComponent(image.uri)
          console.log(image.uri)
          if(image.tags != null) {
            image.tags.forEach(tag => tag.uri = encodeURIComponent(tag.uri))
          }
        })

        this.similarImages = images
        this.image = image
      })

    });
  }
  onClick(){
    location.reload();
  }
}
