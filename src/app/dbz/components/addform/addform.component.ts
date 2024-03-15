import { Character } from './../../interfaces/character.interface';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-dbz-addform',
  templateUrl: './addform.component.html'
})

export class AddFormComponent{

  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    name: 'goku',
    power: 0
  }

  emitCharacter():void{
    console.log(this.character);
    if(this.character.name.length===0){
      return;
    }
    this.onNewCharacter.emit(this.character);
    this.character = {name:"", power:0}
  }

}
