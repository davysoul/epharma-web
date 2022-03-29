import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Client} from "../../model/Client";
import {ClientsService} from "../../services/clients.service";

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {

  profileForm!: FormGroup;
  newClient!:Client;
  constructor(private fb:FormBuilder,private serviceClient:ClientsService) { }

  ngOnInit(): void {
  this.profileForm =  this.fb.group({
    name:["",Validators.required],
    type:["",Validators.required],
    email:["",Validators.required],
    password:["",Validators.required],
    city:["",Validators.required],
    id:[,Validators.required]
    })
  }



  save() {
    typeObject :String = this.profileForm?.value?.type;
    if(this.profileForm?.value?.type =="client".toLowerCase()){
      this.newClient ={
        id:this.profileForm?.value?.id,
        name:this.profileForm?.value?.name,
        email:this.profileForm?.value?.em,
        latitude:0,
        longitude:0,
        password:this.profileForm?.value?.password,
        type:this.profileForm?.value?.type,
        city:this.profileForm?.value?.city
      };
      this.serviceClient.saveClient(this.newClient)
        .subscribe(data=>{
          alert("record added successfully!");
          this.profileForm.reset();

        })
    }

  }
}
