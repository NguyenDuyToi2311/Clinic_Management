import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/Models/User';
import { AuthService } from 'src/app/services/auth.service';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-add-phieu-kham-benh',
  templateUrl: './add-phieu-kham-benh.component.html',
  styleUrls: ['./add-phieu-kham-benh.component.css', '../../Content/user/css/maicons.css',
    '../../Content/user/css/bootstrap.css', '../../Content/user/vendor/owl-carousel/css/owl.carousel.css',
    '../../Content/user/vendor/animate/animate.css', '../../Content/user/css/theme.css']
})
export class AddPhieuKhamBenhComponent implements OnInit {

  userDataSubscription: any;
  userData = new User();
  MaLK: any;
  MaBN: any;
  MaBS: any;

  TongTien: any;
  ChuanDoan: any;
  TrieuChung: any;
  NgayKham: any;
  lichkham: any;
  id: number = 0;
  constructor(private activatedRoute: ActivatedRoute,
    private router: Router,
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
      this.service.getLichKhamByMaLK(this.id).subscribe(data => {
        this.lichkham = data;
        this.MaBS = this.lichkham.MaBS;
        this.MaBN = this.lichkham.MaBN;
      })

    })

  }

  LapPhieuKham() {
    var val = {
      MaBS: this.MaBS,
      MaBN: this.MaBN,
      TrieuChung: this.TrieuChung,
      ChuanDoan: this.ChuanDoan,
      TongTien: this.TongTien
    };
    this.service.addPhieuKham(val).subscribe(res => {
      alert(res.toString());
    });
    this.loadBS();
  }


  ngOnInit(): void {
  }

}
