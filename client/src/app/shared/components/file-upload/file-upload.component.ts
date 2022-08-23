import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss'],
})
export class FileUploadComponent implements OnInit {
  @Input() url: string = '';
  @Input() index: any;
  @Output() onChange = new EventEmitter();

  fileStaffName: string = '';
  uploadSuccess = false;
  percentDone: any = 0;

  file: File | null = null;
  imageSource: any;

  url1: any;
  msg = '';

  constructor() {}

  ngOnInit() {}

  upload(file: any, index: number) {
    if (file.target.files) {
      this.percentDone = 0;
      this.uploadSuccess = false;

      let mimeType = file.target.files[0].type;
      let fileTemp = file.target.files[0];
      if (mimeType.match(/image\/*/) == null) {
        this.msg = 'Only images are supported';
        return;
      }
      let reader = new FileReader();
      reader.readAsDataURL(fileTemp);
      reader.onload = (_event) => {
        this.msg = '';
        this.url1 = reader.result;
      };

      this.fileStaffName = fileTemp.name;
      if (!this.msg) this.onChange.emit([fileTemp, fileTemp.name]);
    }
  }
}
