import { Component, OnInit, Input } from '@angular/core';
import { FileToUpload } from '../model/fileToUpload';
import { FirebaseRecord } from '../model/firebase-record';
import { UploadFileService } from '../service/upload-file.service';

@Component({
  selector: 'app-add-img',
  templateUrl: './add-img.component.html',
  styleUrls: ['./add-img.component.css']
})
export class AddImgComponent implements OnInit {

  selectedFiles: FileList;
  currentUpload: FileToUpload;


  @Input() private record: FirebaseRecord;
  @Input() private isMainImage: boolean;

  constructor(private upSvc: UploadFileService) { }

  ngOnInit() {

  }

  detectFiles(event) {
      this.selectedFiles = event.target.files;
  }

  uploadSingle() {
    let file = this.selectedFiles.item(0);
    this.currentUpload = new FileToUpload(file);
    if (this.record) {
      this.upSvc.pushUpload(this.currentUpload, this.record, this.isMainImage);
    } else {
      this.upSvc.pushUpload(this.currentUpload);
    }
  }

}
