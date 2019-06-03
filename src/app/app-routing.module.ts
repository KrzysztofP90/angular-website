import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from '../app/contact/contact.component';
import { IntroComponent } from '../app/intro/intro.component';
import { RecordViewComponent } from '../app/record-view/record-view.component';
import { GalleryComponent } from '../app/gallery/gallery.component';
import { CmsComponent } from './cms/cms.component';


const routes: Routes = [
  { path: '', component: IntroComponent},
  { path: 'option/:id', component: RecordViewComponent, data: {animation: 'animation'}},
  { path: 'gallery', component: GalleryComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'cms', component: CmsComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'}) ],
  exports: [ RouterModule ]
})


export class AppRoutingModule {
    constructor() {}
 }
