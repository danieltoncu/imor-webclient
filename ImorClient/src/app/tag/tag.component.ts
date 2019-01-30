import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Tag } from '../Tag';
import { TagsService } from '../tags.service';
import { ImagesService } from '../images.service';
import { Image } from '../Image';
import { Location } from '@angular/common';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss']
})
export class TagComponent implements OnInit {

  tag: Tag;
  images: Image[];
  
  constructor(private route: ActivatedRoute, private tagService: TagsService, private imagesService: ImagesService, private location: Location) {
  }

  ngOnInit() {
    this.tagService.getTag(this.route.snapshot.paramMap.get('uri')).subscribe(tag =>{
      tag.uri = encodeURIComponent(tag.uri);
      this.tag = tag

      this.imagesService.getImagesForTag(tag.uri).subscribe(images => {
        images.forEach(image => {
          image.uri = encodeURIComponent(image.uri)
          
          console.log(image.uri)
          
          if(image.tags != null)
          image.tags.forEach(tag => tag.uri = encodeURIComponent(tag.uri))
        })

        this.images = images
      })
    });
  }

  onClick(){
    location.reload();
  }
}
