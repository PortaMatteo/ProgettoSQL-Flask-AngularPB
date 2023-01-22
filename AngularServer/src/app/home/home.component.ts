import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  @Input() yo! : string;
  username = sessionStorage.getItem('username');
  id_u = sessionStorage.getItem('id');
  albums!: any;
  artists!: any;
  genres!: any;
  tracks!: any;
  loading!: Boolean;
  loading2!: Boolean;
  id_t!:any;
  url: string = "https://3245-portamatteo-progettosql-73seh3shd5e.ws-eu83.gitpod.io/search";
  url2: string = "https://3245-portamatteo-progettosql-73seh3shd5e.ws-eu83.gitpod.io/like";
  timeout: any;
  dropdown : any = [{'val':'all','text_val':'Generale'},{'val':'artists','text_val':'Artisti'},{'val':'albums','text_val':'Album'},{'val':'genres','text_val':'Generi'},{'val':'tracks','text_val':'Tracce'}]
  selected: string = 'all'
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

  onKeySearch(event: any) {
    clearTimeout(this.timeout);
    var $this = this;
    this.timeout = setTimeout(function () {
      if (event.keyCode != 13) {
        $this.executeListing(event.target.value);
      }
    }, 700);
  }

  private executeListing(value: string) {
    console.log(value)
    this.get(this.url + "?search=" + value)
  }
  onOptionsSelected(value:string){
    this.selected = value;
  }
  like(data){
    console.log(data)
    this.http.post(this.url2,{id_t:data.id_t,id_u:this.id_u}).subscribe(res => {});
  }
}
