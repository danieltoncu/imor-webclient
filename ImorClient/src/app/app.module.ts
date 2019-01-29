import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TagsComponent } from './tags/tags.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';
import { ImageComponent } from './image/image.component';
import { AuthorComponent } from './author/author.component';
import { TagComponent } from './tag/tag.component';
import { ImagesComponent } from './images/images.component';

@NgModule({
  declarations: [
    AppComponent,
    TagsComponent,
    ImageComponent,
    AuthorComponent,
    TagComponent,
    ImagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
