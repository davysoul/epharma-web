import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Client} from "../model/Client";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class ClientsService {
  host:String = "http://localhost:3000";
  constructor(private http: HttpClient) {

  }

    saveClient(client: Client):Observable<Client> {

     return this.http.post<Client>(this.host+"/client",client);

  }
  getClient(mail:String,psw:String):Observable<Client>{

    return this.http.get<Client>(this.host+"/client?email="+mail+"&password="+psw);
  }


}
