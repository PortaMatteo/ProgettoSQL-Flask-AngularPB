import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';  

import { HomeComponent } from './home/home.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AlbumComponent } from './album/album.component';
import { ArtistComponent } from './artist/artist.component';
import { GenreComponent } from './genre/genre.component';
import { TrackComponent } from './track/track.component';
import { UserComponent } from './user/user.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LikeComponent } from './like/like.component';
import {PlaylistComponent} from './playlist/playlist.component';
import { PlaylistDotComponent } from './playlist-dot/playlist-dot.component';

export const routes: Routes = [
  
  { path: 'home', component: HomeComponent },
  { path: '', component: HomepageComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent },
  {path: "album/:id", component: AlbumComponent },
  {path: "artist/:id", component: ArtistComponent },
  {path: "genre/:id", component: GenreComponent },
  {path: "track/:id", component: TrackComponent },
  {path: "user", component: UserComponent },
  {path: "like", component: LikeComponent},
  {path: "playlist/:p", component: PlaylistComponent},
  {path: "playlist/view/:p", component: PlaylistDotComponent},
  {path: 'dashboard/:p', component: DashboardComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }