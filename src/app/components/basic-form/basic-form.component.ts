import { Component } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from "@angular/forms";


@Component({
  selector: 'app-basic-form',
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.css']
})
export class BasicFormComponent {

  form!: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ){
    this.builderForm();
  }
  private builderForm() {
      this.form = this.formBuilder.group({
      fullName:this.formBuilder.group({
        name: ['', Validators.required],
        last: ['', Validators.required],
      }),
      email: ['', [Validators.required, Validators.email]],
      phone: [''],
      date: [''],
      passwd: [''],
      color: ['#000'],
      range: [''],
      search: ['']
    });
  }

  /* nameField = new FormControl('', Validators.required);
  emailField = new FormControl();
  phoneField = new FormControl();
  dateField = new FormControl();
  passwdField = new FormControl();
  colorField = new FormControl('#000');
  rangeField = new FormControl();
  searchField = new FormControl();
 */
/**Creando Getter para FormControl**/

get nameField(){
  return this.form.get('fullName.name') as FormControl;
}
get lastField(){
  return this.form.get('fullName.last') as FormControl;
}
get emailField(){
  return this.form.get('email') as FormControl;
}
get phoneField(){
  return this.form.get('phone') as FormControl;
}
get dateField(){
  return this.form.get('date') as FormControl;
}
get passwdField(){
  return this.form.get('passwd') as FormControl;
}
get colorField(){
  return this.form.get('color') as FormControl;
}
get rangeField(){
  return this.form.get('range') as FormControl;
}
get searchField(){
  return this.form.get('search') as FormControl;
}
save(event:Event){
  console.log(this.form.value);
  
}
/**********/

  getBtn(){
    console.log(this.nameField.value)
  }
  get isnameFieldValid(){
    return this.nameField.touched && this.nameField.valid
  }
  get isnameFieldinValid(){
    return this.nameField.touched && this.nameField.invalid
  }

  get isemailFieldValid(){
    return this.emailField.touched && this.emailField.valid
  }
  get isemailFieldinValid(){
    return this.emailField.touched && this.emailField.hasError('required')
  }


}
