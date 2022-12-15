import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MyAlbumsComponent } from './my-albums/my-albums.component';
import { ProfileComponent } from './profile/profile.component';
import { CreateAlbumComponent } from './create-album/create-album.component';
import { AlbumDetailsComponent } from './album-details/album-details.component';
import { UploadPictureComponent } from './upload-picture/upload-picture.component';
import { PhotoDetailsComponent } from './photo-details/photo-details.component';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from '../environments/environment';
import { UserService } from './user.service';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MyAlbumsComponent,
    ProfileComponent,
    CreateAlbumComponent,
    AlbumDetailsComponent,
    UploadPictureComponent,
    PhotoDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
