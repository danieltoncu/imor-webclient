import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Tag } from '../Tag';
import { TagsService } from '../tags.service';
import { ImagesService } from '../images.service';
import { Image } from '../Image';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss']
})
export class TagComponent implements OnInit {

  tag: Tag;
  images: Image[];
  
  constructor(private route: ActivatedRoute, private tagService: TagsService, private imagesService: ImagesService) {
  }

  ngOnInit() {
    console.log(this.route.snapshot.paramMap.get('uri'));

    this.tagService.getTag(this.route.snapshot.paramMap.get('uri')).subscribe(tag =>{
      tag.uri = encodeURIComponent(tag.uri);
      this.tag = tag

      this.imagesService.getImagesForTag(tag.uri).subscribe(images => {
        this.images = images
        this.images.forEach(image => image.uri = encodeURIComponent(image.uri))
      })
    });


  }
}
