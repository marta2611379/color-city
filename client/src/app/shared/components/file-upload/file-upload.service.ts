import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FileUploadService {
  constructor(private http: HttpClient) {}

  uploadImagetoStore(file: any, url: string) {
    return this.http.post<any>(`/img/upload`, file, {
      reportProgress: true,
      observe: 'events',
      headers: {
        url,
      },
    });
  }

  getImages() {
    return this.http.get<Array<any>>(`/img/get/all`);
  }
}
