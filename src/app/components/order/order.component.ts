import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {Order} from "../../model/Order";
import {OrderService} from "../../services/order.service";
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
 formOrder!:FormGroup;
 drugs!:FormArray;
 order!:Order;
 orderDrugs:String[]=[];
 idC:number=0;
  constructor(private fb:FormBuilder,
              private router:ActivatedRoute,
              private orderService:OrderService) { }

  ngOnInit(): void {
    this.formOrder = this.fb.group({
      name:["",Validators.required],
      city:["",Validators.required],
      drug:this.fb.array([])
    });
    this.idC = Number(this.router.snapshot.paramMap.get("idClient"));
    console.log(this.idC);
  }

  addMedicament() {
    this.drugs =this.formOrder.get('drug') as FormArray;
    this.drugs.push(this.fb.control(''));


  }

  send() {

   for(let i =0;i<this.drugs.length;i++){
     this.orderDrugs.push(this.drugs.controls[i].value.name);
   }
   this.order = {
    id:0,
     idClient:this.idC,
     drugs:this.orderDrugs,


   };
   this.orderService.saveRequest(this.order)
     .subscribe(data=>{
       alert("order was saving successful!");
       this.formOrder.reset();
     });
  }
}
