import {Client} from "./Client";
import {Pharmcist} from "./Pharmcist";

export interface Response{
  id:number;
  requestDate:String;
  pharmacist:Pharmcist;
  message:String;
}
