export class Noticia {
    public titulo:string;
    public contenido:string;
    public fechaCreacion:Date;
    constructor(titulo:string,contenido:string,fechaCreacion:Date){
        this.titulo=this.tituloMayus(titulo);
        this.contenido=contenido;
        this.fechaCreacion=fechaCreacion;
    }
    tituloMayus(titulo:string){
        return titulo.toUpperCase();
    }
}
