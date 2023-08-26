import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Models/User';
import { AuthService } from 'src/app/services/auth.service';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-da-kham-bs',
  templateUrl: './da-kham-bs.component.html',
  styleUrls: ['./da-kham-bs.component.css', '../../Content/user/css/maicons.css',
    '../../Content/user/css/bootstrap.css', '../../Content/user/vendor/owl-carousel/css/owl.carousel.css',
    '../../Content/user/vendor/animate/animate.css', '../../Content/user/css/theme.css']
})
export class DaKhamBSComponent implements OnInit {

  choduyet: any;
  NgayKham: any;
  GhiChu: any;
  MaBS = 0
  TenBS = ""
  MaCK = 0
  Email = ""
  SDT = ""
  Password = ""
  PhongKham = ""
  PhotoFileName = ""
  PhotoFilePath = ""
  userDataSubscription: any;
  userData = new User();
  bacsi: any;
  id: number = 0;
  constructor(private service: SharedService, private authService: AuthService) {
    this.userDataSubscription = this.authService.userData.asObservable().subscribe(data => {
      this.userData = data;
    });
    this.loadBS();

  }
  loadBS() {
    this.id = this.userData.UserId;
    this.service.getByMaBS(this.id).subscribe(data => {
      this.bacsi = data
      this.MaBS = this.bacsi.MaBS;
      this.TenBS = this.bacsi.TenBS;
      this.MaCK = this.bacsi.MaCK;
      this.Email = this.bacsi.Email;
      this.SDT = this.bacsi.SDT;
      this.Password = this.bacsi.Password
      this.PhotoFileName = this.bacsi.HinhAnh
      this.PhotoFilePath = this.service.PhotoUrl + this.bacsi.HinhAnh
    })
    this.service.getLichKhamComplete(this.userData.UserId).subscribe(data => {
      this.choduyet = data;
      console.log(this.choduyet)
    })

  }
  Huy(val: any) {
    if (confirm('Are you sure??')) {
      this.service.deleteLichKham(val).subscribe(data => {
        alert(data.toString());
        this.loadBS();
      })
    }
  }
  ngOnInit(): void {
  }

}
