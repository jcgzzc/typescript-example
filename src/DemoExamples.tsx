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
type TransportType = "Vortex" | "Black Hole" | "Beam";

interface Transporter {
    transport: TransportType
}

interface Holder {
    pods: number
}

type SpaceShipAmpersandType = Transporter & Holder; //Use & to add interfaces together, similar to extending
type SpaceShipPipeType = Transporter | Holder; //Use | to make the type be either interface
interface SpaceShipInterface extends Transporter, Holder {

}

//////////////// Differences when being implemented in classes ////////////////

class SpaceShipAmpersandTypeClass implements SpaceShipAmpersandType {
    transport: TransportType = "Vortex"; //can declare interface/type props and instantiate in "body"
    pods: number = 0;
}

//Doesn't work b/c class can't implement types that use |
//class SpaceShipPipeTypeClass implements SpaceShipPipeType { 
//    transport: TransportType = "Vortex";
//    pods: number = 1;
//}

class SpaceShipInterfaceClass implements SpaceShipInterface {
    constructor() {
        this.transport = "Vortex";
        this.pods = 1;
    }

    transport: TransportType; //OR can declare interface/type props and instantiate in constructor
    pods: number;   
}

//////////////// Differences when being extended by other interfaces ////////////////

interface SpaceShipAmpersandInterface extends SpaceShipAmpersandType {

}

//Doesn't work b/c interface can't extend types that use |
//interface PipeInterface extends SpaceShipPipeType {
//}

interface SpaceShipInterfaceInterface extends SpaceShipInterface {

}

//////////////// Differences when defining it multiple times (declaration merging) ////////////////

interface MultiDefInterface {
    prop1: string
}

interface MultiDefInterface { //could be located in a separate definition file -- like extending a library's definitions
    prop2: string
}

let multiDefIntObj: MultiDefInterface = {
    prop1: "",
    prop2: ""
}

type MultiDefType = {
    prop1: string
}

//cannot create a new type "variable" with the same name
//type MultiDefType = {
//    prop2: string
//}



/* GENERICS */

function genericFunc<T>(input: T): T[] {
    return [input];
}



/* CASTING */
function noCastToUpper(input: string | undefined): string | undefined {
    if (input == undefined)
        return undefined;

    return input.toUpperCase();
}

function castToUpper(input: string | undefined): string {
    return (input as string).toUpperCase();
}

function forceCast(): string {
    return undefined as any as string; //use this sparingly! know that it's circumventing TS, and may mess you up downstream
}

interface KnownType {
    name: string
}

function knownTypeCast(): KnownType {
    let json = '{ "name": "Annie" }';

    return JSON.parse(json) as KnownType;

    //let obj: KnownType = JSON.parse(json);
    //return obj;
}



/* PARTIAL and READONLY */

interface Computer {
    name: string
    ip: string
}

let partialComputer: Partial<Computer> = { //Partial makes all properties optional

}

let readOnlyComputer: Readonly<Computer> = {
    name: "Annie's Computer",
    ip: "127.0.0.1"
}

//readOnlyComputer.name = "Bob's Computer"; //Not allowed, due to Readonly