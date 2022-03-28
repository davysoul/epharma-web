import {StockInfoDrug} from "./StockInfoDrug";

export interface Pharmcist{
  name:String;
  email:String;
  ville:String;
  address:String;
  latitude:number;
  longitude:number;
  stock:StockInfoDrug;
}
