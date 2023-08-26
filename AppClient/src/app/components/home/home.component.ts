import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css',
    '../../Content/user/css/maicons.css',
    '../../Content/user/css/bootstrap.css',
    '../../Content/user/vendor/owl-carousel/css/owl.carousel.css',
    '../../Content/user/vendor/animate/animate.css',
    '../../Content/user/css/theme.css']
})
export class HomeComponent implements OnInit {

  ListBS: any = []
  bs1: any;
  bs2: any;
  bs3: any;
  url: any;
  constructor(private service: SharedService) { }

  ngOnInit(): void {
    this.service.getDoctorList().subscribe(res => {
      this.ListBS = res;
      this.bs1 = this.ListBS[0]
      this.bs2 = this.ListBS[1]
      this.bs3 = this.ListBS[2]
    })
    this.url = this.service.PhotoUrl;
  }

}
