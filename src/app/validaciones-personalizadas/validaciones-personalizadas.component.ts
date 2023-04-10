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
        email:['', Validators.required],
        password:['', [Validators.required, Validators.minLength(6), MyValidators.validPassword]],
    });
}
}
