import {Client} from "./Client";
import {Drug} from "./Drug";

export interface Order {
 id:number;
 idClient:number;
 drugs:String[];
}
