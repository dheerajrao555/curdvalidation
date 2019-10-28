import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from "@angular/router";
import { FormGroup } from '@angular/forms';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  storeId:any
  update: FormGroup;


  constructor(private ss:ServiceService,private actRoute: ActivatedRoute) { }

  ngOnInit() {
   var id= this.actRoute.snapshot.params['id'];
   this.ss.getById(id).subscribe((data)=>{
     this.storeId=[data];
     console.log("thid is id  "+this.storeId);
   })

  }
  updateDetails(value){
    this.ss.updateUser(value).subscribe((data)=>{
      alert("updated")
    })
  }

}
