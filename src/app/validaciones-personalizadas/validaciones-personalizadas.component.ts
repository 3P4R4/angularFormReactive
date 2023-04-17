import { Component } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from "@angular/forms";
import { MyValidators } from "../utils/validators";

@Component({
  selector: 'app-validaciones-personalizadas',
  templateUrl: './validaciones-personalizadas.component.html',
  styleUrls: ['./validaciones-personalizadas.component.css']
})
export class ValidacionesPersonalizadasComponent {
    hide = true;

    form!: FormGroup;

    constructor(
      private formBuilder: FormBuilder
    ){
      this.builderForm();
    }
    private builderForm() {
      this.form = this.formBuilder.group({
        name:['', Validators.required],
        password:['', [Validators.required, Validators.minLength(6), MyValidators.validPassword]],
        confirmPassword: ['', [Validators.required]],
        type: ['company', [Validators.required]],
        companyName: ['company', [Validators.required]]
    },{
      validators: MyValidators.confirmarPassword
    }
    );
    this.typeField?.valueChanges.subscribe(value => {
      if (value === 'company') {
        this.companyNameField?.setValidators([Validators.required]);
        //this.showCompany = true;
      } else {
        this.companyNameField?.setValidators(null);
        //this.showCompany = false;
      }
      this.companyNameField?.updateValueAndValidity();
    });
}

get passwdField(){
  return this.form.get('password') as FormControl;
}
get ispasswordFieldError(){
  return this.passwdField.hasError('invalid_passwd')
}
get ispasswordFieldinValid(){
  return this.passwdField.touched && this.passwdField.invalid
}
/**Confirmar**/
get campoConfirmarPasswd(){
  return this.form.get('confirmPassword') as FormControl;
}
get erroConfirmPasswd(){
  return this.campoConfirmarPasswd.hasError('concidenciaPassword')
}
get touchedConfirmPasswd(){
  return this.campoConfirmarPasswd.touched && this.campoConfirmarPasswd.errors 
}
/*************/

get typeField(){
  return this.form.get('type');
}
get companyNameField(){
  return this.form.get('companyName'); 
}

}
