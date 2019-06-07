import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from '../app/contact/contact.component';
import { IntroComponent } from '../app/intro/intro.component';
import { RecordViewComponent } from '../app/record-view/record-view.component';
import { GalleryComponent } from '../app/gallery/gallery.component';
import { CmsComponent } from './cms/cms.component';
import { AddRecordComponent } from './add-record/add-record.component';
import { EditGalleryComponent } from './edit-gallery/edit-gallery.component';
import { AddGalleryImgComponent } from '../app/helper-mini-components/add-gallery-img/add-gallery-img.component';


const routes: Routes = [
  { path: '', component: IntroComponent},
  { path: 'option/:id', component: RecordViewComponent, data: {animation: 'animation'}},
  { path: 'gallery', component: GalleryComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'cms', component: CmsComponent},
  { path: 'cms/add', component: AddRecordComponent},
  { path: 'cms/gallerycms', component: EditGalleryComponent},
  { path: 'cms/gallerycms/img_add', component: AddGalleryImgComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'}) ],
  exports: [ RouterModule ]
})


export class AppRoutingModule {
    constructor() {}
 }
