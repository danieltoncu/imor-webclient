import { Injectable } from '@angular/core';
import { Tag } from './Tag';
import { Image } from './Image';
import { Observable, of} from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TagsService {

  constructor(private http: HttpClient) { 

  }

  public getTags(): Observable<Tag[]>{
    return this.http.get<Tag[]>("http://imor-sparql-endpoint.westeurope.cloudapp.azure.com/api/tags/all")
  }

  public getTagsForImage(uri: string): Observable<Tag[]>{
    const path = "http://imor-sparql-endpoint.westeurope.cloudapp.azure.com/api/tags/forImageUri?imageUri=" + uri;

    return this.http.get<Tag[]>(path)
  }

  public getTag(uri: string): Observable<Tag>{
    const path = "http://imor-sparql-endpoint.westeurope.cloudapp.azure.com/api/tags/byUri?tagUri=" + uri;

    return this.http.get<Tag>(path);
  }
}
