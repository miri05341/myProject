import { Ichild } from "./child";
import { HMO } from "./hmo";

export interface Iperson{
    firstName:string,
    lastName: string,
    ID: string,
    birthdate:string,
    kind: string,
    helth: string,
    child: Ichild[]
}