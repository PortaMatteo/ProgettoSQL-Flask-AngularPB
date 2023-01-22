import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-playlist-dot',
  templateUrl: './playlist-dot.component.html',
  styleUrls: ['./playlist-dot.component.css']
})
export class PlaylistDotComponent {
  id!:any;
  plylst!:any;
  username = sessionStorage.getItem('username');
  constructor(private activatedRoute: ActivatedRoute,public http: HttpClient) {
  }
  ngOnInit() {
    this.activatedRoute.params.subscribe(paramsId => {
        this.id = paramsId['p'];
    });
    this.http.get("https://3245-portamatteo-progettosql-ath3c3g4ev5.ws-eu83.gitpod.io/playlistview" + "?id=" + this.id).subscribe(res=>{
      this.plylst = res
    })
  }
  deletetrack(value){
    this.http.get("https://3245-portamatteo-progettosql-ath3c3g4ev5.ws-eu83.gitpod.io/deletetrack" + "?id=" + value).subscribe(res=>{
    })
    window.location.reload()
  }
}