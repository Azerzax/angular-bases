import { Injectable } from '@angular/core';
import { v4 as uuid } from "uuid";
import { Character } from '../interfaces/character.interface';

@Injectable({providedIn: 'root'})
export class DbzService {

  public characterList2: Character [] = [{
    id: uuid(),
    name: 'Trunk',
    power: 10
  },
  {
    id: uuid(),
    name: 'goku',
    power:22000
  },
  {
    id: uuid(),
    name: 'piccolo',
    power: 30000
  },
  {
    id: uuid(),
    name: 'vegetta',
    power: 40000
  },
  {
    id: uuid(),
    name: 'bulma',
    power: 0
  },
  {
    id: uuid(),
    name: 'chichi',
    power: 300
  }
]

  onNewCharacter(character: Character): void {
    const newCharacter: Character = {...character, id: uuid()};
    this.characterList2.push(newCharacter);
  }

  deleteCharacterById(id: string): void {
    this.characterList2 = this.characterList2.filter(character => character.id !== id);
  }

}
