import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from '../app/app.component';
import { ContactComponent } from '../app/contact/contact.component';
import { FakeRecordsGenerator } from './model/generator';
import { IntroComponent } from '../app/intro/intro.component';

// const generator = new FakeRecordsGenerator();
// const dataArray = generator.createExampleRecordsArray();
// const dataArrayString = JSON.stringify(dataArray);
const routes: Routes = [
  { path: '', component: IntroComponent},
  { path: 'contact', component: ContactComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})


export class AppRoutingModule {

 }
