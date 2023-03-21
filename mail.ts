

export class Mail{
    private _Tipo: string;
    private _Direccion: string;
    constructor(Tipo:string, Direccion:string){
       this._Tipo = Tipo;
       this._Direccion = Direccion;
    }

    public set tipo(value: string) {
        this._Tipo = value;
    }

    public set direccion(value: string) {
        this._Direccion = value;
    }

    public get tipo(): string {
         return this._Tipo;
    }

    public get direccion(): string {
        return this._Direccion;
    }

    mostrarMails():void{
        console.log("Tipo: "+this._Tipo, "\nDirección e-mail: "+ this._Direccion+ "\n")
    }
}