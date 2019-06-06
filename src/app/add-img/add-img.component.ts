import { Component, OnInit } from '@angular/core';
import { FileToUpload } from '../model/fileToUpload';
import { UploadFileService } from '../service/upload-file.service';

@Component({
  selector: 'app-add-img',
  templateUrl: './add-img.component.html',
  styleUrls: ['./add-img.component.css']
})
export class AddImgComponent implements OnInit {

  selectedFiles: FileList;
  currentUpload: FileToUpload;

  constructor(private upSvc: UploadFileService) { }

  ngOnInit() {

  }

  detectFiles(event) {
      this.selectedFiles = event.target.files;
  }

  uploadSingle() {
    let file = this.selectedFiles.item(0);
    this.currentUpload = new FileToUpload(file);
    this.upSvc.pushUpload(this.currentUpload);
  }
  

}
