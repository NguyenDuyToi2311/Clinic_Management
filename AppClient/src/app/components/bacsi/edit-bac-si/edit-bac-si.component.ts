import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-edit-bac-si',
  templateUrl: './edit-bac-si.component.html',
  styleUrls: ['./edit-bac-si.component.css',
    '../../../Content/admin/css/bootstrap.min.css',
    '../../../Content/admin/css/style.css',
    '../../../Content/admin/css/font-awesome.min.css']
})
export class EditBacSiComponent implements OnInit {
  MaBS = 0
  TenBS = ""
  MaCK = 0
  Email = ""
  SDT = ""
  Password = ""

  PhotoFileName = ""
  PhotoFilePath = ""

  ListCK: any = []
  bacsi: any;
  id: number = 0;

  constructor(private activatedRoute: ActivatedRoute, private service: SharedService) {
    this.loadBS
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
        this.PhotoFilePath = 'https://localhost:44352/Photos/' + this.bacsi.HinhAnh
        
        this.service.getChuyenKhoa().subscribe(data => {
          this.ListCK = data;
        })
      })
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
    this.loadBS();
  }
  updateDoctor() {
    var val = {
      MaBS: this.MaBS,
      TenBS: this.TenBS,
      MaCK: this.MaCK,
      Email: this.Email,
      SDT: this.SDT,
      Password: this.Password,
      HinhAnh: this.PhotoFileName,
      UserType: "Doctor"
    };

    this.service.updateBacSi(val).subscribe(res => {
      alert(res.toString());
    });
  }
}
