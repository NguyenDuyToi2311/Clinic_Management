import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-edit-phieu-kham',
  templateUrl: './edit-phieu-kham.component.html',
  styleUrls: ['./edit-phieu-kham.component.css',
  '../../Content/admin/css/bootstrap.min.css',
  '../../Content/admin/css/style.css',
  '../../Content/admin/css/font-awesome.min.css']
})
export class EditPhieuKhamComponent implements OnInit {

  id:any;
  MaPK:any;
  NgayKham:any;
  TrieuChung:any;
  ChuanDoan:any;
  MaHD:any;
  MaBS:any;
  MaBN:any;
  phieukham:any;
  constructor(private service:SharedService,private activatedRoute:ActivatedRoute) {
    this.loadDS();
  }
  loadDS(){
    this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];
      this.service.GetPhieuKhamByMaPK(this.id).subscribe(data=>{
        this.phieukham=data;
        this.MaPK=this.phieukham.MaPK;
        this.NgayKham=this.phieukham.NgayKham;
        this.TrieuChung=this.phieukham.TrieuChung;
        this.ChuanDoan=this.phieukham.ChuanDoan;
        this.MaHD=this.phieukham.MaHD;
        this.MaBS=this.phieukham.MaBS;
        this.MaBN=this.phieukham.MaBN;
      })
    })

  }
  ngOnInit(): void {
  }
  updatePhieuKham(){
    var val = {
      MaPK:this.MaPK,
      MaBS:this.MaBS,
      MaBN:this.MaBN,
      NgayKham:this.NgayKham,
      TrieuChung:this.TrieuChung,
      ChuanDoan:this.ChuanDoan,
      MaHD:this.MaHD
    };
    this.service.UpdatePhieuKham(val).subscribe(res=>{
      alert(res.toString());
      this.loadDS();
    });

  }


}
