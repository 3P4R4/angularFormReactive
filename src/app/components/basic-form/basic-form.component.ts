import { Component } from '@angular/core';
import { FormControl, Validators } from "@angular/forms";

@Component({
  selector: 'app-basic-form',
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.css']
})
export class BasicFormComponent {

  nameField = new FormControl('', Validators.required);
  emailField = new FormControl();
  phoneField = new FormControl();
  dateField = new FormControl();
  passwdField = new FormControl();
  colorField = new FormControl('#000');
  rangeField = new FormControl();
  searchField = new FormControl();

  getBtn(){
    console.log(this.nameField.value)
  }

}
