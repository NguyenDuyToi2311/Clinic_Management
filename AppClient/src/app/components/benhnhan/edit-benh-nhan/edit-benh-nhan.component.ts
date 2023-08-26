import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-edit-benh-nhan',
  templateUrl: './edit-benh-nhan.component.html',
  styleUrls: ['./edit-benh-nhan.component.css',
    '../../../Content/user/css/maicons.css',
    '../../../Content/user/css/bootstrap.css',
    '../../../Content/user/vendor/owl-carousel/css/owl.carousel.css',
    '../../../Content/user/vendor/animate/animate.css',
    '../../../Content/user/css/theme.css']
})
export class EditBenhNhanComponent implements OnInit {
    id: any;

    MaBN = 0
    TenBN = ""
    GioiTinh = 0
    NgaySinh = ""
    SDT = ""
    DiaChi = ""
    Password = ""
    UserType = "Patient"
    PhotoFileName = "user.png"
    PhotoFilePath = ""

    benhnhan: any;

    constructor(private service: SharedService, private activatedRoute: ActivatedRoute, private router: Router) {
      this.loadBS();
    }

  uploadPhoto(event: any) {
    var file = event.target.files[0];
    const formData: FormData = new FormData();
    formData.append('uploadedFile', file, file.name);

    this.service.UploadPhoto(formData).subscribe((data: any) => {
      this.PhotoFileName = data.toString();
      this.PhotoFilePath = this.service.PhotoUrl + this.PhotoFileName;
    })
  }
  ngOnInit(): void {
  }

  loadBS() {
    this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];
      this.service.getByMaBN(this.id).subscribe(data => {
        this.benhnhan = data;
        
        this.MaBN = this.benhnhan.MaBN;
        this.TenBN = this.benhnhan.TenBN;
        this.DiaChi = this.benhnhan.DiaChi;
        this.GioiTinh = this.benhnhan.GioiTinh;
        this.SDT = this.benhnhan.SDT;
        this.NgaySinh = this.benhnhan.NgaySinh;
        this.UserType = "Patient";
        this.Password = this.benhnhan.Password
        
        this.PhotoFileName = this.benhnhan.HinhAnh
        this.PhotoFilePath = 'https://localhost:44352/Photos/' + this.benhnhan.HinhAnh

      })
    })

  }
  addBenhNhan() {

    var val = {
      MaBN: this.MaBN,
      TenBN: this.TenBN,
      GioiTinh: this.GioiTinh,
      NgaySinh: this.NgaySinh,
      DiaChi: this.DiaChi,
      SDT: this.SDT,
      Password: this.Password,
      HinhAnh: this.PhotoFileName,
      UserType: "Patient"
    };

    this.service.updateBenhNhan(val).subscribe(res => {
      alert(res.toString());
      this.router.navigate(['/Admin/Benhnhan']);
    });

  }

}
