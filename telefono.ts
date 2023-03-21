

export class Telefono{
    private _Tipo: string;
    private _Numero: number;
    constructor(Tipo:string, Numero:number){
        this._Tipo = Tipo;
        this._Numero = Numero;
    }

    public set tipo(value: string) {
        this._Tipo = value;
    }

    public set numero(value: number) {
        this._Numero = value;
    }

    public get tipo(): string {
        return this._Tipo;
    }

    public get numero(): number {
        return this._Numero;
    }

    mostrarTelefonos():void{
        console.log("Tipo: "+this._Tipo, "\nNúmero: "+ this._Numero+ "\n")
    }

}