import { Item } from './../item/item';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicioService{
  private items:Item[];

  constructor(private http:HttpClient) { 
    this.items=[
      new Item("https://www.vivus.es/blog/wp-content/uploads/2019/04/hacerse-una-casa.jpeg",
      110000,"Casa Grande con Jardín","Casa de 4 dormitorios, 2 baños, 177m2, esta ubicada en el Pozuelo de Alarcón (Madrid)," 
      +" tiene garaje con espacio de 1 vehículo grande o 2 vehículos pequeños (ciclomotores, etc), clasificación energetica tipo A"),
      new Item("https://www.vivus.es/blog/wp-content/uploads/2019/04/hacerse-una-casa.jpeg",
      110000,"Casa Grande con Jardín","Casa de 4 dormitorios, 2 baños, 177m2, esta ubicada en el Pozuelo de Alarcón (Madrid)," 
      +" tiene garaje con espacio de 1 vehículo grande o 2 vehículos pequeños (ciclomotores, etc), clasificación energetica tipo A"),
      new Item("https://www.vivus.es/blog/wp-content/uploads/2019/04/hacerse-una-casa.jpeg",
      110000,"Casa Grande con Jardín","Casa de 4 dormitorios, 2 baños, 177m2, esta ubicada en el Pozuelo de Alarcón (Madrid)," 
      +" tiene garaje con espacio de 1 vehículo grande o 2 vehículos pequeños (ciclomotores, etc), clasificación energetica tipo A"),
      new Item("https://www.vivus.es/blog/wp-content/uploads/2019/04/hacerse-una-casa.jpeg",
      110000,"Casa Grande con Jardín","Casa de 4 dormitorios, 2 baños, 177m2, esta ubicada en el Pozuelo de Alarcón (Madrid)," 
      +" tiene garaje con espacio de 1 vehículo grande o 2 vehículos pequeños (ciclomotores, etc), clasificación energetica tipo A"),
    ]
  }
}
