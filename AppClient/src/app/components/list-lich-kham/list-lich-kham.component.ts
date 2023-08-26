import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Models/User';
import { AuthService } from 'src/app/services/auth.service';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-list-lich-kham',
  templateUrl: './list-lich-kham.component.html',
  styleUrls: ['./list-lich-kham.component.css',
    '../../Content/admin/css/bootstrap.min.css',
    '../../Content/admin/css/style.css',
    '../../Content/admin/css/font-awesome.min.css']
})
export class ListLichKhamComponent implements OnInit {

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
    this.service.GetAllLichKham().subscribe(data => {
      this.ListPK = data;
    })
  }




  deleteClick(item: any) {
    if (confirm('Are you sure??')) {
      this.service.deleteLichKham(item.MaLK).subscribe(data => {
        alert(data.toString());
        this.loadBS();
      })
    }
  }

}
