export class Item {
    public imagen:string;
    public precio:number;
    public caracteristicas:string;
    public descripcion:string;
    constructor(imagen:string,precio:number,caracteristicas:string,descripcion:string){
        this.imagen=imagen;
        this.precio=precio;
        this.caracteristicas=caracteristicas;
        this.descripcion=descripcion;
    }
}
