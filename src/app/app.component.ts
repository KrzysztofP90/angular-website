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
    'path1', 'Read more');
    const rec2 = new RecordFromDB('Second title', 'Maecenas interdum nunc eu ligula posuere, ac condimentum libero dapibus. Nulla placerat nunc a dignissim ornare. Vivamus efficitur auctor pretium. Aenean eu lacus sit amet augue sodales tincidunt. Nunc commodo dui arcu, sed porta nisi semper at. In hac habitasse platea dictumst. Praesent pulvinar, arcu a venenatis efficitur, urna diam scelerisque enim, et posuere quam dui at dui. In scelerisque justo et rhoncus facilisis. In tempor quam at ligula iaculis ultrices. Nam eget aliquet diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Maecenas nec eros mauris. Vivamus eget pretium ante, et congue tellus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis nunc felis, feugiat non tristique accumsan, fermentum vel tellus.',
    'path2', 'Read more');
    const rec3 = new RecordFromDB('Third title', 'Phasellus finibus cursus est, sit amet accumsan arcu aliquet nec. Morbi et dapibus ipsum. Pellentesque porttitor condimentum justo eget scelerisque. Suspendisse egestas vel tortor at eleifend. Integer orci neque, fermentum eu vulputate non, semper facilisis elit. Donec luctus molestie ipsum a facilisis. Etiam metus turpis, malesuada vel odio ac, mattis molestie est. Cras aliquam bibendum ex, eget tempor augue eleifend eu. In sed hendrerit risus. Ut elementum nec ante at ornare. Morbi dapibus pretium sollicitudin. In molestie ante lorem, ac tempus est pellentesque non. Aenean eget urna non augue gravida finibus. Phasellus tristique consequat orci, a semper ipsum pharetra eu.',
    'path3', 'Read more');
    const rec4 = new RecordFromDB('About us', 'Mauris ac tristique metus. Sed semper sapien elit, ut accumsan lectus auctor sed. Fusce nulla neque, iaculis vitae urna ut, lobortis luctus turpis. Nunc venenatis volutpat fermentum. Sed cursus mi ut turpis vehicula, bibendum elementum felis venenatis. Suspendisse odio purus, mollis nec nulla faucibus, maximus ultricies lectus. Nam auctor pharetra leo ut venenatis. Nam velit nibh, eleifend et suscipit et, ullamcorper aliquam ligula. Vestibulum massa justo, malesuada id pharetra vel, ornare vestibulum nibh. Ut gravida in metus sit amet pretium. Praesent dapibus porta metus eu porta. Fusce imperdiet ac enim nec facilisis. Ut finibus tempus metus, nec posuere enim pretium sit amet. Duis vel dui id quam varius rutrum. Nam id mattis orci, a pulvinar velit.',
    'path4',  'Read more');
    const rec5 = new RecordFromDB('Gallery', 'Our realizations:',
    'path5', 'Show Gallery');
    const rec6 = new RecordFromDB('Contact', "Let's contact with us!",
    'path6', "Quick contact!");
    const records: Array<RecordFromDB> = [rec1, rec2, rec3, rec4, rec5, rec6];
    return records;
  }
}


