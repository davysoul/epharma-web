import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
 formOrder!:FormGroup;
  drugs!: FormArray;
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.formOrder = this.fb.group({
      name:["",Validators.required],
      city:["",Validators.required],
      drugs:this.fb.array([this.addMedicament()])
    })
  }

  addMedicament() {
    this.drugs = this.formOrder.get('drugs') as FormArray;
    this.drugs.push(this.fb.control(''));
  }

  send() {

  }
}
