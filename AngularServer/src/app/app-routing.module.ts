import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AlbumComponent } from './album/album.component';
import { ArtistComponent } from './artist/artist.component';
import { GenreComponent } from './genre/genre.component';
import { TrackComponent } from './track/track.component';

export const routes: Routes = [
  
  { path: 'home', component: HomeComponent },
  { path: '', component: HomepageComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent },
  {path: "album/:id", component: AlbumComponent },
  {path: "artist/:id", component: ArtistComponent },
  {path: "genre/:id", component: GenreComponent },
  {path: "track/:id", component: TrackComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }