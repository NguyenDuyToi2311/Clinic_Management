import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Models/User';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css',
  '../../Content/admin/css/bootstrap.min.css',
  '../../Content/admin/css/style.css',
  '../../Content/admin/css/font-awesome.min.css']
})
export class AdminDashboardComponent implements OnInit {
  userData = new User();
  constructor() {
    this.userData.UserName="ĐỖ MINH HIỂU";
  }


  ngOnInit(): void {
  }

}
