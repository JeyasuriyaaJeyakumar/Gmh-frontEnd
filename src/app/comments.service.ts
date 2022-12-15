import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(private http: HttpClient) { }
  
  getcomments(photoId: string){
    var headers = this.getHeaders();
    return this.http.get( environment.API_BASE_URL + '/api/comments/find/' + photoId, {headers}); 
  }

  getHeaders(){
    var headers  ={
      'idToken': localStorage.getItem('userIdToken')
    };
    return headers; 
  }
}
