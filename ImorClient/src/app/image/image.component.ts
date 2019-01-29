import { Component, OnInit } from '@angular/core';
import {Image} from "../Image";
import {Tag} from "../Tag";
import { ImagesService } from '../images.service';
import { ActivatedRoute } from '@angular/router';
import { Observable, of} from 'rxjs';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit {

  image: Image;

  constructor(private imageService: ImagesService, private route: ActivatedRoute,) {    
  }

  ngOnInit() {
    this.imageService.getImageByUri(this.route.snapshot.paramMap.get('uri')).subscribe(image => this.image = image);
  }
}
