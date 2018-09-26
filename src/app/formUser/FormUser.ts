import { Component, Input } from '@angular/core';

@Component({
  selector: 'FormUser',
  templateUrl: './index.html',
  styleUrls: ['./index.css']
})
export class FormUser {
  @Input() user : any;
  @Input() name : string;
  viewFirstName = false
  viewLastName = false
  viewSecondName = false
  viewSecondLastName = false
  viewDocument = false
  viewBirthDay = false
  activateSecondName = false
  activateSecondLastName = false
  seeSecondName(){
    this.activateSecondName = true;
    this.viewSecondName = true;
  }
  seeSecondLastName(){
    this.activateSecondLastName = true;
    this.viewSecondLastName = true;
  }
} 