import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// import { HandleResponseService } from '../../services/handle-response.service';

@Injectable({
  providedIn: 'root',
})
export class FileUploadService {
  constructor(
    private http: HttpClient // private handleService: HandleResponseService
  ) {}

  uploadImagetoStore(file: any, url: string) {
    return this.http.post<any>(`/img/upload`, file, {
      reportProgress: true,
      observe: 'events',
      headers: {
        url,
      },
    });
  }

  uploadImage(file: any) {
    return this.http.post<any>(`/img/upload`, file, {
      reportProgress: true,
      observe: 'events',
      // headers: {
      //   url,
      // },
    });
  }

  upload(file: File) {
    const data = new FormData();
    data.append('file', file);
    return this.http.post('/img/upload', data);
  }

  getImages() {
    return this.http.get<Array<any>>(`/img/get/all`);
  }
}
