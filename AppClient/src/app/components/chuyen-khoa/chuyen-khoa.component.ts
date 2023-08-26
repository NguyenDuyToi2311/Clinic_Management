import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-chuyen-khoa',
  templateUrl: './chuyen-khoa.component.html',
  styleUrls: ['./chuyen-khoa.component.css',
    '../../Content/admin/css/bootstrap.min.css',
    '../../Content/admin/css/style.css',
    '../../Content/admin/css/font-awesome.min.css']
})
export class ChuyenKhoaComponent implements OnInit {

  chuyenkhoas: any[] = [];

  selectedChuyenKhoa: any = { MaCK: 0, TenCK: "" }

  constructor(private service: SharedService) {
    this.service.getChuyenKhoa().subscribe(data => {
      this.chuyenkhoas = data;
    });
  }

  createOrUpdate(form: any) {
    form.value.MaCK = this.selectedChuyenKhoa.MaCK;
    form.value.TenCK = this.selectedChuyenKhoa.TenCK;

    if (this.selectedChuyenKhoa && this.selectedChuyenKhoa.id) {
      this.service.updateChuyenKhoa(form.value).subscribe(data => {
        this.service.getChuyenKhoa().subscribe(list => {
          this.chuyenkhoas = list;
        })
      });
    }
    else {
      this.service.addChuyenKhoa(form.value).subscribe(d => {
        this.service.getChuyenKhoa().subscribe(data => {
          this.chuyenkhoas = data;
        })
      })
    }
  }
  clear() {
    this.selectedChuyenKhoa.TenCK = "";
  }
  selectChuyenKhoa(product: any) {
    this.selectedChuyenKhoa = product;
  }
  deleteChuyenKhoa(id: any) {
    this.service.deleteChuyenKhoa(id).subscribe(data => {
      console.log("Product deleted ", data);
      this.service.getChuyenKhoa().subscribe(data => {
        this.chuyenkhoas = data;
      })
    })
  }


  ngOnInit(): void {
  }

}
