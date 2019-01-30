import { Component, OnInit } from '@angular/core';
import {Tag} from "../Tag";
import { Observable, of} from 'rxjs';
import { TagsService } from '../tags.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss']
})
export class TagsComponent implements OnInit {

  tags: Tag[];

  constructor(private tagService: TagsService, private location: Location) {
    
    tagService.getTags().subscribe(tags =>
      {
        this.tags = tags

        tags.forEach(element => {
          console.log(element.uri);
          console.log(encodeURIComponent(element.uri))
          element.uri = encodeURIComponent(element.uri)
        });
      });
  }

  ngOnInit() {
  }
 
  onClick(){
    location.reload();
  }
}