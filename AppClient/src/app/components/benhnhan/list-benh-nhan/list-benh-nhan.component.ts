import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-list-benh-nhan',
  templateUrl: './list-benh-nhan.component.html',
  styleUrls: ['./list-benh-nhan.component.css',
  '../../../Content/user/css/maicons.css',
  '../../../Content/user/css/bootstrap.css',
  '../../../Content/user/vendor/owl-carousel/css/owl.carousel.css',
  '../../../Content/user/vendor/animate/animate.css',
  '../../../Content/user/css/theme.css']
})
export class ListBenhNhanComponent implements OnInit {

  PhotoFilePath=""
  ListBN:any=[];

  constructor(private service:SharedService) { }



  ngOnInit(): void {
    this.loadData();
  }
  loadData(){
    this.service.getListBenhNhan().subscribe(data=>{
      this.ListBN=data;
      console.log(this.ListBN)
    })
    this.PhotoFilePath=this.service.PhotoUrl;
  }



  deleteClick(item:any){
    if(confirm('Are you sure??')){
      this.service.deleteBenhNhan(item.MaBN).subscribe(data=>{
        alert(data.toString());
        this.loadData();
      })
    }
  }

}
