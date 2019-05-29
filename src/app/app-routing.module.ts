import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from '../app/contact/contact.component';
import { IntroComponent } from '../app/intro/intro.component';
import { RecordViewComponent } from '../app/record-view/record-view.component';
import { LoadingDataService } from '../app/service/loading-data.service';
import { RecordFromDB } from '../app/model/record';
// import { FakeRecordsGenerator } from '../app/model/generator';
import { GalleryComponent } from '../app/gallery/gallery.component';

// const generator: FakeRecordsGenerator = new FakeRecordsGenerator();
// const records: Array<RecordFromDB> = generator.createExampleRecordsArray();

const routes: Routes = [
  { path: '', component: IntroComponent},
  { path: 'option/:id', component: RecordViewComponent},
  { path: 'gallery', component: GalleryComponent},
  { path: 'contact', component: ContactComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})


export class AppRoutingModule {

  private records: Array<RecordFromDB>;

    constructor(dataService: LoadingDataService) {
      this.records = dataService.getFakeRecordsArray();
    }

    getRecords() {
      return this.records;
    }
 }
