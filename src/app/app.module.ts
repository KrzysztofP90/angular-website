import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { NewOneComponent } from './new-one/new-one.component';
import { IntroDescribe1Component } from './intro-describe1/intro-describe1.component';
import { IntroComponent } from './intro/intro.component';
import { GalleryComponent } from './gallery/gallery.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { ContactComponent } from './contact/contact.component';
import { AppRoutingModule } from './app-routing.module';
import { RecordViewComponent } from './record-view/record-view.component';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { FormsModule } from '@angular/forms';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { CmsComponent } from './cms/cms.component';
import { CmsRecordComponent } from './cms-record/cms-record.component';
import { AddRecordComponent } from './add-record/add-record.component';



@NgModule({
  declarations: [
    AppComponent,
    NewOneComponent,
    IntroDescribe1Component,
    IntroComponent,
    GalleryComponent,
    MainMenuComponent,
    ContactComponent,
    RecordViewComponent,
    CmsComponent,
    CmsRecordComponent,
    AddRecordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
