import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-edit-lich-kham',
  templateUrl: './edit-lich-kham.component.html',
  styleUrls: ['./edit-lich-kham.component.css',
    '../../Content/admin/css/bootstrap.min.css',
    '../../Content/admin/css/style.css',
    '../../Content/admin/css/font-awesome.min.css']
})
export class EditLichKhamComponent implements OnInit {

  id: any;
  
  MaLK: any;
  NgayKham: any;
  TrangThai: any;
  GhiChu: any;
  PhongKham: any;
  MaBS: any;
  MaBN: any;
  lichkham: any;

  constructor(private service: SharedService, private activatedRoute: ActivatedRoute) {
    this.loadDS();
  }
  loadDS() {
    this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];
      this.service.getLichKhamByMaLK(this.id).subscribe(data => {
        this.lichkham = data;
        this.MaLK = this.lichkham.MaLK;
        this.NgayKham = this.lichkham.NgayKham;
        this.TrangThai = this.lichkham.TrangThai;
        this.GhiChu = this.lichkham.GhiChu;
        this.PhongKham = this.lichkham.PhongKham;
        this.MaBS = this.lichkham.MaBS;
        this.MaBN = this.lichkham.MaBN;
      })
    })

  }
  ngOnInit(): void {
  }
  updateLichKham() {
    var val = {
      MaLK: this.MaLK,
      NgayKham: this.NgayKham,
      GhiChu: this.GhiChu,
      TrangThai: this.TrangThai,
      PhongKham: this.PhongKham,
      MaBS: this.MaBS,
      MaBN: this.MaBN
    };

    this.service.updateLichKham(val).subscribe(res => {
      alert(res.toString());
    });
  }
}
