import { Component, OnInit } from '@angular/core';

import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-get',
  templateUrl: './get.component.html',
  styleUrls: ['./get.component.css']
})
export class GetComponent implements OnInit {
  storeElements;
  userClicked:boolean=false;

  constructor(private ss:ServiceService) {
    // this.ss.userDetails().subscribe((data)=>{
    //   this.storeElements=data;
    //   console.log(this.storeElements)
    // })
  }

  ngOnInit() {
    this.ss.userDetails().subscribe((data)=>{
      this.storeElements=data;
      console.log(this.storeElements)
    })

  }
  deleteDetails(id){
    this.ss.deleteUserDetails(id).subscribe((data)=>{
      alert("deleted");
      this.ngOnInit();

    })



  }
  updateUser(id){
    this.userClicked=true;

  }

}
