import { Component } from '@angular/core';
import { RecordFromDB } from '../app/model/record';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private records: Array<RecordFromDB>;

  constructor() {
    this.records = this.createExampleRecordsArray();
  }

  getRecords() {
    return this.records;
  }
  
  // fake example records not from db
  createExampleRecordsArray() {
    const rec1 = new RecordFromDB('First title', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lorem sem, interdum sit amet auctor eget, malesuada ut risus. Cras nec dolor eu enim dignissim blandit. Fusce nec tempus diam. Nunc leo justo, interdum vitae venenatis vitae, tempus in lectus. Curabitur vehicula dolor a viverra mattis. Sed at erat eu ipsum porttitor volutpat. Aliquam vehicula ligula non placerat semper. Fusce eu vestibulum nisi, sit amet efficitur odio. Nullam mi ipsum, blandit at velit id, suscipit porta metus. Quisque ultricies non turpis a rutrum. Donec vestibulum ex interdum erat aliquam finibus. Nam congue gravida leo at fringilla. Aliquam pharetra imperdiet est vel consequat. Sed vestibulum sem sit amet pulvinar pellentesque. Ut nec libero eget elit aliquet venenatis. Ut varius risus in leo laoreet sagittis.',
    'path1');
    const rec2 = new RecordFromDB('Second title', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lorem sem, interdum sit amet auctor eget, malesuada ut risus. Cras nec dolor eu enim dignissim blandit. Fusce nec tempus diam. Nunc leo justo, interdum vitae venenatis vitae, tempus in lectus. Curabitur vehicula dolor a viverra mattis. Sed at erat eu ipsum porttitor volutpat. Aliquam vehicula ligula non placerat semper. Fusce eu vestibulum nisi, sit amet efficitur odio. Nullam mi ipsum, blandit at velit id, suscipit porta metus. Quisque ultricies non turpis a rutrum. Donec vestibulum ex interdum erat aliquam finibus. Nam congue gravida leo at fringilla. Aliquam pharetra imperdiet est vel consequat. Sed vestibulum sem sit amet pulvinar pellentesque. Ut nec libero eget elit aliquet venenatis. Ut varius risus in leo laoreet sagittis.',
    'path1');
    const rec3 = new RecordFromDB('Third title', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lorem sem, interdum sit amet auctor eget, malesuada ut risus. Cras nec dolor eu enim dignissim blandit. Fusce nec tempus diam. Nunc leo justo, interdum vitae venenatis vitae, tempus in lectus. Curabitur vehicula dolor a viverra mattis. Sed at erat eu ipsum porttitor volutpat. Aliquam vehicula ligula non placerat semper. Fusce eu vestibulum nisi, sit amet efficitur odio. Nullam mi ipsum, blandit at velit id, suscipit porta metus. Quisque ultricies non turpis a rutrum. Donec vestibulum ex interdum erat aliquam finibus. Nam congue gravida leo at fringilla. Aliquam pharetra imperdiet est vel consequat. Sed vestibulum sem sit amet pulvinar pellentesque. Ut nec libero eget elit aliquet venenatis. Ut varius risus in leo laoreet sagittis.',
    'path1');
    const rec4 = new RecordFromDB('About us', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lorem sem, interdum sit amet auctor eget, malesuada ut risus. Cras nec dolor eu enim dignissim blandit. Fusce nec tempus diam. Nunc leo justo, interdum vitae venenatis vitae, tempus in lectus. Curabitur vehicula dolor a viverra mattis. Sed at erat eu ipsum porttitor volutpat. Aliquam vehicula ligula non placerat semper. Fusce eu vestibulum nisi, sit amet efficitur odio. Nullam mi ipsum, blandit at velit id, suscipit porta metus. Quisque ultricies non turpis a rutrum. Donec vestibulum ex interdum erat aliquam finibus. Nam congue gravida leo at fringilla. Aliquam pharetra imperdiet est vel consequat. Sed vestibulum sem sit amet pulvinar pellentesque. Ut nec libero eget elit aliquet venenatis. Ut varius risus in leo laoreet sagittis.',
    'path1');
    const rec5 = new RecordFromDB('Gallery', 'Our realizations:',
    'path1');
    const rec6 = new RecordFromDB('Contact', "Let's contact with us!",
    'path1');
    const records: Array<RecordFromDB> = [rec1, rec2, rec3, rec4, rec5, rec6];
    return records;
  }
}


