import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Client} from "../../model/Client";
import {ClientsService} from "../../services/clients.service";

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  formLogin!:FormGroup;
  client!:Client;
  email!:String;
  password!:String;
  constructor(private fb:FormBuilder,private serviceClient:ClientsService) { }

  ngOnInit(): void {
    this.formLogin = this.fb.group({
      email:["",Validators.required],
      password:["",Validators.required]
    });
  }

  signIn() {
    this.email =this.formLogin?.value?.email;
    this.password = this.formLogin?.value.password;
     this.serviceClient.getClient(this.email,this.password)
         .subscribe(data=>{
            alert("Login successful!");
            this.formLogin.reset();
         })
  }
}
