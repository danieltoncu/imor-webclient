import { Injectable } from '@angular/core';
import { Tag } from './Tag';
import { Image } from './Image';
import { Observable, of} from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  constructor(private http: HttpClient) { 
  }

  getImages(): Observable<Image[]>{
    return this.http.get<Image[]>("http://imor-sparql-endpoint.westeurope.cloudapp.azure.com/api/images/")
  }

  getImagesForTag(uri: String): Observable<Image[]>{
    const path = "http://imor-sparql-endpoint.westeurope.cloudapp.azure.com/api/images/byTag?tagUri=" + uri;
    
    return this.http.get<Image[]>(path)
  }

  getImageByUri(uri: string){
    const path = "http://imor-sparql-endpoint.westeurope.cloudapp.azure.com/api/images/byUri?imageUri=" + uri;

    return this.http.get<Image>(path)
  }
}
