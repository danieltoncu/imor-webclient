import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TagsComponent } from './tags/tags.component';
import { ImageComponent } from './image/image.component';
import { AuthorComponent } from './author/author.component';
import { TagComponent } from './tag/tag.component';
import { ImagesComponent } from './images/images.component';

const routes: Routes = [

  { path: 'tags', component: TagsComponent},
  { path: 'images', component: ImagesComponent},
  { path: 'author', component: AuthorComponent},
  { path: 'image/:uri', component: ImageComponent},
  { path: 'tag/:uri', component: TagComponent},
  { path: '', redirectTo: '/images', pathMatch: 'full' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
