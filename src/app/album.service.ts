import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  constructor(private http: HttpClient) { }
  getAllAlbums(){
    var headers = this.getHeaders();
    return this.http.get( environment.API_BASE_URL + '/api/albums', {headers}); 
  }

  getPhotos(albumId: string){
    var headers = this.getHeaders();
    return this.http.get( environment.API_BASE_URL + '/api/photos/find/' + albumId, {headers}); 
  }
  

  getHeaders(){
    var headers  ={
      'idToken': localStorage.getItem('userIdToken')
    };
    return headers; 
  }
}
