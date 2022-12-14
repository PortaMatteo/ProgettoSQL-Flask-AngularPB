import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  @Input() yo! : string
  albums!: any;
  artists!: any;
  genres!: any;
  tracks!: any;
  loading!: Boolean;
  url: string = "https://3245-portamatteo-progettosql-y7h8bct4aqu.ws-eu81.gitpod.io/search";

  constructor(public http: HttpClient) {
    this.get(this.url);
  }

  get(url: string): void {
    this.loading = true;
    this.http.get(url).subscribe(res => {
      this.albums = res[0];
      this.artists = res[1];
      this.genres = res[2];
      this.tracks = res[3];
      this.loading = false;
    });
  }

  onKey = (value: string) => {
    this.yo = value
    this.get(this.url + "?search=" + value);
  }
}
