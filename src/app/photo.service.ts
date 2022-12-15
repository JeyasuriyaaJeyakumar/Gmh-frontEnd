import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Album } from './Album';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor(private http: HttpClient ) {   }

  getAllPhotos(){
    var headers = this.getHeaders();
    return this.http.get(environment.API_BASE_URL + '/api/photos', {headers}); 
  }

  getPhoto(photoId: string){
    var headers = this.getHeaders();
    return this.http.get( environment.API_BASE_URL + '/api/photos/find/' + photoId + '/photo' , {headers}); 
  }

 makeCoverPhoto(albumId: string, coverPhotoUrl: string){
  var headers = this.getHeaders();
  var params = new HttpParams();
  params.set('id', albumId)
  params.set('coverPhotoUrl', coverPhotoUrl);
  return this.http.put( environment.API_BASE_URL + '/api/albums/albumCover',params, {headers}); 
 }

  getHeaders(){
    var headers  ={
      'idToken': localStorage.getItem('userIdToken')
    };
    return headers; 
  }
}
