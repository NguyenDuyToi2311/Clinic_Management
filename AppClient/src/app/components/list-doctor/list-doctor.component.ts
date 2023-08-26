import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-list-doctor',
  templateUrl: './list-doctor.component.html',
  styleUrls: ['./list-doctor.component.css','../../Content/user/css/maicons.css',
  '../../Content/user/css/bootstrap.css','../../Content/user/vendor/owl-carousel/css/owl.carousel.css',
  '../../Content/user/vendor/animate/animate.css','../../Content/user/css/theme.css']
})
export class ListDoctorComponent implements OnInit {
  PhotoFilePath=""
  ListBS:any=[];
  constructor(private service:SharedService) { }

  ngOnInit(): void {
    this.loadData();
  }
  loadData(){
    this.service.getDoctorList().subscribe(data=>{
      this.ListBS=data;
      console.log(this.ListBS)
    })
    this.PhotoFilePath=this.service.PhotoUrl;
  }


}
