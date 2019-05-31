import { FirebaseRecord } from '../model/firebase-record';
import { Observable } from 'rxjs';
import { RecordFromDB } from '../model/record';


export class FireBaseServiceHelper {

    // temporary data for image
    arrayOfMiniImagePath: Array<string> = [
        'assets/builder.jpg','assets/builder3.jpg', 'assets/builder7.jpg',
        'assets/cat-4151445_960_720.jpg'
    ];
    // temporary data for image
    arrayOfImagePath: Array<string> = [
        'assets/builder2.jpg', 'assets/builder4.jpg',
        'assets/builder5.jpg', 'assets/roof.jpeg'
    ];

    constructor() {}


    convertFirebaseRecordsArrayToUsefulRecordsArray(fbRecords: Observable<FirebaseRecord[]>) {
        const arrayOfRecords = new Array<RecordFromDB>();

    }

}