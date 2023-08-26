import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Models/User';
import { AuthService } from 'src/app/services/auth.service';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-cho-kham-benh-nhan',
  templateUrl: './cho-kham-benh-nhan.component.html',
  styleUrls: ['./cho-kham-benh-nhan.component.css',
    '../../Content/user/css/maicons.css',
    '../../Content/user/css/bootstrap.css',
    '../../Content/user/vendor/owl-carousel/css/owl.carousel.css',
    '../../Content/user/vendor/animate/animate.css',
    '../../Content/user/css/theme.css']
})
export class ChoKhamBenhNhanComponent implements OnInit {

  choduyet: any;

  NgayKham: any;
  GhiChu: any;
  MaBN = 0
  TenBN = ""
  GioiTinh = ""
  NgaySinh = ""
  SDT = ""
  DiaChi = ""
  HinhAnh = ""
  PhotoFileName = ""
  PhotoFilePath = ""
  userDataSubscription: any;
  userData = new User();

  benhnhan: any;
  id: number = 0;
  constructor(private service: SharedService, private authService: AuthService) {

    this.loadBS();

  }
  loadBS() {
    this.userDataSubscription = this.authService.userData.asObservable().subscribe(data => {
      this.userData = data;
    });
    this.id = this.userData.UserId;
    this.service.getByMaBN(this.id).subscribe(data => {
      this.benhnhan = data

      this.MaBN = this.benhnhan.MaBn;
      this.TenBN = this.benhnhan.TenBN;
      this.SDT = this.benhnhan.SDT;
      this.DiaChi = this.benhnhan.DiaChi;
      this.GioiTinh = this.benhnhan.GioiTinh;
      this.NgaySinh = this.benhnhan.NgaySinh
      this.PhotoFileName = this.benhnhan.HinhAnh

      this.PhotoFilePath = this.service.PhotoUrl + this.benhnhan.HinhAnh
    })
    this.service.getLichKhamChoKhamMaBN(this.userData.UserId).subscribe(data => {
      this.choduyet = data;
      console.log(this.choduyet)
    })

  }

  Huy(val: any) {
    if (confirm('Bạn muốn hủy lịch khám??')) {
      this.service.deleteLichKham(val).subscribe(data => {
        alert(data.toString());
        this.loadBS();
      })
    }
  }
  ngOnInit(): void {
  }

}
