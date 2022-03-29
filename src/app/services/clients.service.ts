import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Client} from "../model/Client";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {Request} from "../model/Request";

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  constructor(private http: HttpClient) {

  }

    saveClient(client: Client):Observable<Client> {
     const host= environment.host;
     return this.http.post<Client>(host+"/client",client);

  }
  getClient(email:String,psw:String):Observable<Client>{
    const host = environment.host;
    return this.http.get<Client>(host+"/client/"+email);
  }
  saveRequest(req:Request):Observable<Request>{
    const host = environment.host;
    return this.http.post<Request>(host+"/client",req);
  }
}
