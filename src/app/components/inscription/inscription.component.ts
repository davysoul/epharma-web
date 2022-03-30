import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Client} from "../../model/Client";
import {ClientsService} from "../../services/clients.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {

  profileForm!: FormGroup;
  newClient!:Client;
  constructor(private fb:FormBuilder,
              private serviceClient:ClientsService,
              private router:Router) { }

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
   const typeObject  = this.profileForm?.value?.type;
    console.log(typeObject);

    if(typeObject =="client".toLowerCase()){

      this.newClient ={
        id:0,
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
          this.router.navigateByUrl("/login");

        })
    }

  }
}
