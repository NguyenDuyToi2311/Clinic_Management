import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-add-benh-nhan',
  templateUrl: './add-benh-nhan.component.html',
  styleUrls: ['./add-benh-nhan.component.css', '../../../Content/user/css/maicons.css',
    '../../../Content/user/css/bootstrap.css', '../../../Content/user/vendor/owl-carousel/css/owl.carousel.css',
    '../../../Content/user/vendor/animate/animate.css', '../../../Content/user/css/theme.css']
})
export class AddBenhNhanComponent implements OnInit {

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

  constructor(private service: SharedService) { }

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

  addBenhNhan() {

    var val = {
      TenBN: this.TenBN,
      GioiTinh: this.GioiTinh,
      NgaySinh: this.NgaySinh,
      DiaChi: this.DiaChi,
      SDT: this.SDT,
      Password: this.Password,
      HinhAnh: this.PhotoFileName,
      UserType: "Patient"
    };

    this.service.addBenhNhan(val).subscribe(res => {
      alert(res.toString());
    });
  }


}
