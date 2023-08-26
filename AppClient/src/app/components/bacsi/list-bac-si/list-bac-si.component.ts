import { Component, OnInit } from '@angular/core';
import { BacSi } from 'src/app/Models/BacSi';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-list-bac-si',
  templateUrl: './list-bac-si.component.html',
  styleUrls: ['./list-bac-si.component.css',
  '../../../Content/admin/css/bootstrap.min.css',
  '../../../Content/admin/css/style.css',
  '../../../Content/admin/css/font-awesome.min.css']
})
export class ListBacSiComponent implements OnInit {


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



  deleteClick(item:any){
    if(confirm('Are you sure??')){
      this.service.deleteBacSi(item.MaBS).subscribe(data=>{
        alert(data.toString());
        this.loadData();
      })
    }
  }


}
