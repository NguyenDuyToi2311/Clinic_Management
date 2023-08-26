import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/Models/User';
import { AuthService } from 'src/app/services/auth.service';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-chitiet-bac-si',
  templateUrl: './chitiet-bac-si.component.html',
  styleUrls: ['./chitiet-bac-si.component.css', '../../Content/user/css/maicons.css',
    '../../Content/user/css/bootstrap.css', '../../Content/user/vendor/owl-carousel/css/owl.carousel.css',
    '../../Content/user/vendor/animate/animate.css', '../../Content/user/css/theme.css']
})
export class ChitietBacSiComponent implements OnInit {

  NgayKham = "";
  GhiChu: any;
  MaBS = 0
  TenBS = ""
  MaCK = 0
  Email = ""
  SDT = ""
  Password = ""
  PhotoFileName = ""
  PhotoFilePath = ""
  userDataSubscription: any;
  userData = new User();
  bacsi: any;
  id: number = 0;

  constructor(
    private activatedRoute: ActivatedRoute,
    private service: SharedService,
    private authService: AuthService) {
    this.userDataSubscription = this.authService.userData.asObservable().subscribe(data => {
      this.userData = data;
    });
    this.loadBS();
  }
  loadBS() {
    this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];
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
    })

  }
  TaoLichKham() {
    var val = {

      NgayKham: this.NgayKham,
      GhiChu: this.GhiChu,
      TrangThai: "Chờ Duyệt",
      MaBS: this.MaBS,
      MaBN: this.userData.UserId
    };

    this.service.addLichKham(val).subscribe(res => {
      alert(res.toString());
    });
  }

  ngOnInit(): void {
  }

}
