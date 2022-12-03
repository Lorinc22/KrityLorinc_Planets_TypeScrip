import { CelestialBody } from "./CelestialBody";

export class Planet implements CelestialBody{
    name : string;
    age : number;
    size: number;
    waterContent : number;

    constructor(name : string , age : number , size: number , waterContent : number){
        this.name = name;
        this.age = age;
        this.size = size;
        this.waterContent = waterContent;
    }
}