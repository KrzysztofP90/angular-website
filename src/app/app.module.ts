import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NewOneComponent } from './new-one/new-one.component';
import { IntroDescribe1Component } from './intro-describe1/intro-describe1.component';
import { IntroComponent } from './intro/intro.component';
import { GalleryComponent } from './gallery/gallery.component';
import { MainMenuComponent } from './main-menu/main-menu.component';


@NgModule({
  declarations: [
    AppComponent,
    NewOneComponent,
    IntroDescribe1Component,
    IntroComponent,
    GalleryComponent,
    MainMenuComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
