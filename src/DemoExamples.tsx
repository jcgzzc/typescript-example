import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';



/* BASIC TYPES */
let basicTypesVehicleObj = {
    color: "blue",
    wheels: 4,
    passengers: [{
        name: "Annie",
        shoeSize: 9
    },
    {
        name: "Bob",
        hairColor: "brown"
    }]
}

//Demo auto-complete, implied types, passengerObj implied/optional types
//basicTypesVehicleObj.
//basicTypesVehicleObj.passengers[0].



/* IMPLICIT vs EXPLICIT TYPES */
function implicitReturnType() {
    let implicitVar = "something";

    //return 0; //try changing to this return type
    return implicitVar;
}

function explicitReturnType(): string { //note explicit ": string" return type
    let explicitVar: string = "something"; //note explicit ": string" var type

    //return 0; //try changing to this return type
    return explicitVar;
}



/* INTERFACES */
interface Transport {
    type: "Air" | "Land" | "Sea" //create "enums" by using specific values
    identifier: string //can leave end blank
}

interface Vehicle {
    color: string, //can use comma
    wheels: number; //can use semi-colon
    passengers: Passenger[] //can use interface declared below
    passengers2: [{
        name: string,
        shoeSize?: number,
        hairColor?: string
    }],
    turnOn: (sound: string) => string
}

interface Passenger {
    name: string,
    shoeSize?: 9,
    hairColor: string
}

interface Car extends Vehicle, Transport { //can extend multiple
    decals: boolean
}

let car: Car = {
    type: "Land", //note autocomplete on "enum"
    identifier: "TSR0CK5",
    color: "blue",
    wheels: 4,
    passengers: [], //hover prop to see interface type
    passengers2: [{ name: "Annie" }], //hover prop to see anonymous type
    decals: false,
    turnOn: (sound: string) => { return `Car goes ${sound}`; }
}



/* PROPERTY ? VS undefined */
interface reqVsUndefinedPropExample {
    reqProp: string | undefined,
    optionalProp?: string
}

let reqVsUndef: reqVsUndefinedPropExample = {
    reqProp: ""
}



/* TYPES (AS "VARIABLES") */
type DanceStyle = "Capoeira" | "Salsa"
type FightStyle = "Aikido" | "Capoeira"
type DanceFightStyle = DanceStyle & FightStyle //Use & for intersections
type DanceOrFightStyle = DanceStyle | FightStyle //Use | for concatenation

type Person = {
    movement: DanceOrFightStyle
}



/* TYPES VS INTERFACES */
type EarthlyTransportType = {  };
type EtherealTransportType = "Vortex" | "Black Hole" | "Beam";
type TransportType = EarthlyTransportType | EtherealTransportType;

interface Transporter {
    transport: TransportType
}

interface Holder {
    pods: number
}

type SpaceShipType = Transporter & Holder; //Use & to add interfaces together, similar to extending
interface SpaceShipInterface extends Transporter, Holder {

}

/* */
/* */
/* */
//function getGreeting(name: string, prefix?: "Mr" | "Mrs" | "Ms"): string {
//    let prefixString: string = prefix || "";

//    return `Hello, ${prefixString} ${name}!`;
//}

//getGreeting("test");