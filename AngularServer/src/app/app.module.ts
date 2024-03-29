import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { AlbumComponent } from './album/album.component';
import { ArtistComponent } from './artist/artist.component';
import { TrackComponent } from './track/track.component';
import { GenreComponent } from './genre/genre.component';
import { UserComponent } from './user/user.component';
import { FormsModule } from '@angular/forms';
import { AuthComponent } from './auth/auth.component';
import { AuthGuard } from './guards/auth.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IonicModule } from '@ionic/angular';
import { LikeComponent } from './like/like.component';
import { PlaylistComponent } from './playlist/playlist.component';
import { PlaylistDotComponent } from './playlist-dot/playlist-dot.component'; 


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomepageComponent,
    LoginComponent,
    RegisterComponent,
    AlbumComponent,
    ArtistComponent,
    TrackComponent,
    GenreComponent,
    UserComponent,
    AuthComponent,
    DashboardComponent,
    LikeComponent,
    PlaylistComponent,
    PlaylistDotComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    IonicModule.forRoot()
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
