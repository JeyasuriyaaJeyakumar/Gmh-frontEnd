import { Comment } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Comments } from '../Comments';
import { CommentsService } from '../comments.service';

import { Photo } from '../Photo';
import { PhotoService } from '../photo.service';

@Component({
  selector: 'app-photo-details',
  templateUrl: './photo-details.component.html',
  styleUrls: ['./photo-details.component.css']
})
export class PhotoDetailsComponent implements OnInit {


  photoId: string;
  photo: Photo[];
  allComments: Comments[];
  constructor(private route: ActivatedRoute, private photoService: PhotoService, private commentsService: CommentsService ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( params =>{
      this.photoId = params.get('photoId');
      console.log('Got photoId : ', this.photoId);
      this.loadPhoto(this.photoId);
      this.loadCommentsNew(this.photoId);
    });
  }

  loadPhoto(photoId: string){
    this.photoService.getPhoto(photoId)
    .subscribe(
      photo => {
        this.photo = <Photo[]>photo;
        console.log("Loaded photo details: ", this.photo);
      }
    );
  }

  loadCommentsNew(photoId: string){
    this.commentsService.getcomments(photoId)
    .subscribe(
      comment => {
        this.allComments = (<Comments[]>comment).reverse();
        console.log("Loaded photo comments: ", this.allComments);
      }
    );
  }

  loadCommentsOld(photoId: string){
    this.commentsService.getcomments(photoId)
    .subscribe(
      comment => {
        this.allComments = <Comments[]>comment;
        console.log("Loaded photo comments: ", this.allComments);
      }
    );
  }

  makeAlbumCover(){
    this.photoService.makeCoverPhoto( this.photo[0].albumId , this.photo[0].coverPhotoUrl)
    .subscribe(
      response => {
        console.log("Profile photo updated.", response);
      }
    );
  }
}

