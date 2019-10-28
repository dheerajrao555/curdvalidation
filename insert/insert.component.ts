import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-insert',
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.css']
})
export class InsertComponent implements OnInit {
  insert: FormGroup;

  constructor(private fb: FormBuilder,private ss: ServiceService) { }




  ngOnInit() {
    this.insert = this.fb.group({
      name:  ['', [
        Validators.required,
        Validators.minLength(3)
      ]],
      email: ['',[Validators.required,
        Validators.pattern('^[a-z]+[a-z0-9._]+@[a-z]+\.[a-z.]{2,5}$')
    ]],
     ph:['',[Validators.pattern('')]],
     // phone:'',
      addressInfo: this.fb.group({
        address:'',
        city:'',
        pincode:''

      })
    })
  }
  insertion(value){
    alert("calling")
    //console.log(value)
    this.ss.insertRecord(value).subscribe((data)=>{
      console.log(data);
      alert("record inserted")


    })




  }

}
