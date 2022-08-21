import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Subscription } from 'rxjs';
import { FileUploadService } from './file-upload.service';

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
  
  constructor(
    public fileService: FileUploadService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    this.fileService.getImages().subscribe((v) => {
      console.log(v);
      this.imageSource = this.sanitizer.bypassSecurityTrustResourceUrl(
        `data:${v[1].contentType};base64, ${this.toBase64(v[1].image.data)}`
      );
    });
  }

  toBase64(arr: any) {
    return btoa(
      arr.reduce((data: any, byte: any) => data + String.fromCharCode(byte), '')
    );
  }

  upload(file: any, index: number) {
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
    let uploadFile = new FormData();
    uploadFile.append('file', fileTemp, fileTemp.name);

    this.fileService
      .uploadImagetoStore(uploadFile, this.url)
      .subscribe((event: any) => {
        if (event.type === HttpEventType.UploadProgress) {
          this.percentDone = `${Math.round(
            (100 * event.loaded) / event.total
          )}%`;
        } else if (event instanceof HttpResponse) {
          this.onChange.emit(index);
          this.uploadSuccess = true;
        }
      });
  }
}
