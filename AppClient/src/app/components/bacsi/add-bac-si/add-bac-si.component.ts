import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-add-bac-si',
  templateUrl: './add-bac-si.component.html',
  styleUrls: ['./add-bac-si.component.css',
    '../../../Content/admin/css/bootstrap.min.css',
    '../../../Content/admin/css/style.css',
    '../../../Content/admin/css/font-awesome.min.css']
})
export class AddBacSiComponent implements OnInit {
  
  MaBS = 0
  TenBS = ""
  MaCK = 0
  Email = ""
  SDT = ""
  Password = ""
  PhotoFileName = "user.png"
  PhotoFilePath = ""

  ListCK: any = []

  constructor(private service: SharedService) {
    service.getChuyenKhoa().subscribe(data => {
      this.ListCK = data;
    })
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

  addDoctor() {

    var val = {
      TenBS: this.TenBS,
      MaCK: this.MaCK,
      Email: this.Email,
      SDT: this.SDT,
      Password: this.Password,
      HinhAnh: this.PhotoFileName,
      UserType: "Doctor"
    };

    this.service.addBacSi(val).subscribe(res => {
      alert(res.toString());
    });
  }

}
