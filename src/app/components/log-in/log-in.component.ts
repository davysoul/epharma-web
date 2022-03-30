import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Client} from "../../model/Client";
import {ClientsService} from "../../services/clients.service";
import {Router} from "@angular/router";

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
  constructor(private fb:FormBuilder,
              private serviceClient:ClientsService,
              private router:Router) { }

  ngOnInit(): void {
    this.formLogin = this.fb.group({
      email:["",Validators.required],
      password:["",Validators.required]
    });
  }

  signIn() {

     this.serviceClient.getClient(this.formLogin?.value.email,this.formLogin.value.password)
         .subscribe(data=>{
            alert("Login successful!");

            console.log(data.id);
            //console.log(typeof(data));

            this.router.navigate(['/order',{idClient:data.id}]);
            this.formLogin.reset();

         })
  }
}
