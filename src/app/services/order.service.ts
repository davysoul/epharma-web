import { Injectable } from '@angular/core';

import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Order} from "../model/Order";


@Injectable({
  providedIn: 'root'
})
export class OrderService {
  host:String = "http://localhost:3000";
  constructor(private http:HttpClient) { }
  saveRequest(req:Order):Observable<Order>{

    return this.http.post<Order>(this.host+"/order",req);
  }
}
