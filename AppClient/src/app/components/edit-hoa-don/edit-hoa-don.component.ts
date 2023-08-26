import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-edit-hoa-don',
  templateUrl: './edit-hoa-don.component.html',
  styleUrls: ['./edit-hoa-don.component.css',
  '../../Content/admin/css/bootstrap.min.css',
  '../../Content/admin/css/style.css',
  '../../Content/admin/css/font-awesome.min.css']
})
export class EditHoaDonComponent implements OnInit {

  id:any;
  MaHD:any;
  NgayLap:any;
  TongTien:any;
  hoadon:any;
  constructor(private service:SharedService,private activatedRoute:ActivatedRoute) {
    this.loadDS();
  }
  loadDS(){
    this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];
      this.service.GetHoaDonByMaHD(this.id).subscribe(data=>{
        this.hoadon=data;
        this.MaHD=this.hoadon.MaHD;
        this.NgayLap=this.hoadon.NgayLap;
        this.TongTien=this.hoadon.TongTien;
        console.log(data)
      })
    })

  }
  ngOnInit(): void {
  }
  updateClick(){
    var val = {
      MaHD:this.MaHD,
      NgayLap:this.NgayLap,
      TongTien:this.TongTien,
    };

    this.service.updateHoaDon(val).subscribe(res=>{
    alert(res.toString());
    });
  }

}
