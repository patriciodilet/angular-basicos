import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interface";

@Injectable()
export class DbzService {

  private _personajes: Personaje[] = [
    {
      nombre: 'Goku',
      poder: 8500
    },
    {
      nombre: 'vegeta',
      poder: 700
    }
  ];

  get personajes(): Personaje[] {
    return [...this._personajes];
  }

  constructor() {

  }

  agregarPersonaje( personaje: Personaje ) {
    this._personajes.push( personaje );
  }

}
