import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Models/User';
import { AuthService } from 'src/app/services/auth.service';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-list-phieu-kham-bn',
  templateUrl: './list-phieu-kham-bn.component.html',
  styleUrls: ['./list-phieu-kham-bn.component.css', '../../Content/user/css/maicons.css',
    '../../Content/user/css/bootstrap.css', '../../Content/user/vendor/owl-carousel/css/owl.carousel.css',
    '../../Content/user/vendor/animate/animate.css', '../../Content/user/css/theme.css']
})
export class ListPhieuKhamBNComponent implements OnInit {

  PhotoFilePath = ""
  ListPK: any = [];
  userDataSubscription: any;
  userData = new User();
  benhnhan: any;
  id: any;
  constructor(private service: SharedService, private authService: AuthService) { }



  ngOnInit(): void {
    this.loadBS();
  }
  loadBS() {
    this.userDataSubscription = this.authService.userData.asObservable().subscribe(data => {
      this.userData = data;
    });
    this.id = this.userData.UserId;
    this.service.GetPhieuKhamBN(this.id).subscribe(data => {
      this.ListPK = data
    })
    this.service.getByMaBN(this.id).subscribe(data => {
      this.benhnhan = data;
      this.PhotoFilePath = this.service.PhotoUrl + this.benhnhan.HinhAnh
    })


  }




  deleteClick(item: any) {
    if (confirm('Are you sure??')) {
      this.service.deletePhieuKham(item.MaPK).subscribe(data => {
        alert(data.toString());
        this.loadBS();
      })
    }
  }

}
