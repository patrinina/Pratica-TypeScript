export class Direccion{
    private _Calle: string;
    private _Numero: number;
    private _Piso: number;
    private _Letra: string;
    private _CodigoPostal: string;
    private _Poblacion: string;
    private _Provincia: string;
    constructor(Calle:string, Numero:number, Piso:number, Letra:string, CodigoPostal:string, Poblacion:string, Provincia:string){
        this._Calle = Calle;
        this._Numero = Numero;
        this._Piso = Piso;
        this._Letra = Letra;
        this._CodigoPostal = CodigoPostal;
        this._Poblacion = Poblacion;
        this._Provincia = Provincia;
    }
 
    public set calle(value: string) {
        this._Calle = value;
    }

    public set numero(value: number) {
        this._Numero = value;
    }

    public set piso(value: number) {
        this._Piso = value;
    }

    public set letra(value: string) {
        this._Letra = value;
    }

    public set codigopostal(value: string) {
        this._CodigoPostal = value;
    }

    public set poblacion(value: string) {
        this._Poblacion = value;
    }

    public set provincia(value: string) {
        this._Provincia = value;
    }

    public get calle(): string {
        return this._Calle;
    }

    public get numero(): number {
        return this._Numero;
    }

    public get piso(): number {
        return this._Piso;
    }

    public get letra(): string {
        return this._Letra;
    }

    public get codigopostal(): string {
        return this._CodigoPostal;
    }

    public get poblacion(): string {
        return this._Poblacion;
    }

    public get provincia(): string {
        return this._Provincia;
    }

    mostrarDirecciones(): void{ 
        console.log("Calle: "+ this._Calle, "\nNúmero: "+ this._Numero, "\nPiso: "+ this._Piso, "\nLetra: "+ this._Letra,
         "\nCódigo Postal: "+ this._CodigoPostal, "\nPoblación: "+ this._Poblacion, "\nProvincia: "+ this._Provincia+"\n")
    }

}






