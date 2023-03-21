import {Direccion} from './direccion';
import {Telefono} from './telefono';
import {Mail} from './mail';

export class Persona{
    private _Nombre: string;
    private _Apellidos: string;
    private _Edad: number;
    private _DNI: string;
    private _Cumpleanos: string;
    private _ColorFavorito: string;
    private _Sexo: string;
    private _Direcciones: Direccion;
    private _Mails: Mail;
    private _Telefonos: Telefono;
    private _Notas: string;
    constructor(Nombre:string, Apellidos:string, Edad:number, DNI:string, Cumpleanos:string, ColorFavorito:string, 
        Sexo:string, Direcciones:Direccion, Mails:Mail, Telefonos:Telefono, Notas:string){
        this._Nombre = Nombre;
        this._Apellidos = Apellidos;
        this._Edad = Edad;
        this._DNI = DNI;
        this._Cumpleanos = Cumpleanos;
        this._ColorFavorito = ColorFavorito;
        this._Sexo = Sexo;
        this._Direcciones = Direcciones;
        this._Mails = Mails;
        this._Telefonos = Telefonos;
        this._Notas = Notas;
    }
  
    public set nombre(value: string) {
        this._Nombre = value;
    }

    public set apellidos(value: string) {
        this._Apellidos = value;
    }

    public set edad(value: number) {
        this._Edad = value;
    }

    public set dni(value: string) {
        this._DNI = value;
    }

    public set cumpleanos(value: string) {
        this._Cumpleanos = value;
    }

    public set colorfavorito(value: string) {
        this._ColorFavorito = value;
    }

    public set sexo(value: string) {
        this._Sexo = value;
    }

    public set direcciones(value: Direccion) {
        this._Direcciones = value;
    }

    public set mails(value: Mail) {
        this._Mails = value;
    }

    public set telefonos(value: Telefono) {
        this._Telefonos = value;
    }

    public set notas(value: string) {
        this._Notas = value;
    }
   
    public get nombre(): string {
        return this._Nombre;
    }

    public get apellidos(): string {
        return this._Apellidos;
    }

    public get edad(): number {
        return this._Edad;
    }

    public get dni(): string {
        return this._DNI;
    }

    public get cumpleanos(): string {
        return this._Cumpleanos;
    }

    public get colorfavorito(): string {
        return this._ColorFavorito;
    }

    public get sexo(): string {
        return this._Sexo;
    }

    public get direcciones(): Direccion {
        return this._Direcciones;
    }
 
    public get mails(): Mail {
        return this._Mails;
    }

   
    public get telefonos(): Telefono {
        return this._Telefonos;
    }

    public get notas(): string {
        return this._Notas;
    }

    mostrarPersona(): void{ 
        console.log("\nNombre: "+ this._Nombre, "\nApellidos: "+ this._Apellidos, "\nEdad: "+ this._Edad, "\nDNI: "+ this._DNI,
         "\nCumpleaños: "+ this._Cumpleanos, "\nColor favorito: "+ this._ColorFavorito, "\nSexo: "+ this._Sexo, "\n\nDirecciones:\n");
             this._Direcciones.mostrarDirecciones();
            console.log("Mails:\n"  );
             this._Mails.mostrarMails();
             console.log("Telefonos:\n"  );
            this._Telefonos.mostrarTelefonos();
        console.log("Notas: "+ this._Notas+"\n\n")
    }  
    //Funcion Comprobar DNI
    comprobarDni(dni:string):boolean{

        return dni === this._DNI;
    }  


}