import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IssueService } from 'src/app/shared/services/issue.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  constructor(private issueService: IssueService, private router: Router) {}
  ngOnInit(): void {
    this.issueService.getIssues().subscribe((v) => {
      console.log(v);
    });
  }
}
