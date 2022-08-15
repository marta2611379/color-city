import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class IssueService {
  uri = 'http://localhost:4000';

  constructor(private http: HttpClient) {}

  getIssues() {
    return this.http.get(`${this.uri}/products`);
  }

  getIssueById(id: string) {
    return this.http.get(`${this.uri}/issues/${id}`);
  }

  addIssue(title: any, responsible: any, description: any, severity: any) {
    const issue = {
      title: title,
      responsible: responsible,
      description: description,
      severity: severity,
    };
    return this.http.post(`${this.uri}/issues/add`, issue);
  }
}
