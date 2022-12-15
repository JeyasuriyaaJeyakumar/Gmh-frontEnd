import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FileService } from '../file.service';

@Component({
  selector: 'app-upload-picture',
  templateUrl: './upload-picture.component.html',
  styleUrls: ['./upload-picture.component.css']
})
export class UploadPictureComponent implements OnInit {

  albumId: string;
  createdBy: string;
  constructor(private route: ActivatedRoute, private fileService: FileService) { }

  ngOnInit(): any {
    this.route.paramMap.subscribe( params =>{
      this.albumId = params.get('albumId');
      console.log('Got album Id: ', this.albumId);
    });
  }

  uploadPhoto(file: File){
    console.log("File: ", file); 
    this.fileService.uploadFile(file)
    .subscribe(
      fileRespone =>{
        console.log("File data from service:" , fileRespone);
      }
    ); 
  }


  

}
