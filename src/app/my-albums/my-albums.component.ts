import { Component, OnInit } from '@angular/core';
import { Album } from '../Album';
import { AlbumService } from '../album.service';

@Component({
  selector: 'app-my-albums',
  templateUrl: './my-albums.component.html',
  styleUrls: ['./my-albums.component.css']
})
export class MyAlbumsComponent implements OnInit {

  albums: Album[];

  constructor(private albumService: AlbumService) { }

  ngOnInit(): void {
    this.albumService.getAllAlbums().subscribe(
      response => {
        this.albums = <Album[]>response;
        console.log("Got all Albums response!", this.albums );
      }
    );
   }

}
