import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'readBufferImg',
})
export class ReadBufferImgPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}
  transform(img: { contentType: string; image: any }) {
    if (img?.contentType)
      return this.sanitizer.bypassSecurityTrustResourceUrl(
        `data:${img.contentType};base64,
      ${this.toBase64(img.image.data)}`
      );
    else return;
  }

  toBase64(arr: any) {
    return btoa(
      arr.reduce((data: any, byte: any) => data + String.fromCharCode(byte), '')
    );
  }
}
