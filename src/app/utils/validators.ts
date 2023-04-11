import { AbstractControl } from "@angular/forms";

export class MyValidators{
    static isPriceValid(control:AbstractControl){
        const value = control.value;
        console.log(value);
        if (value>10000) {
            return {price_invalid: true};
        }
        return null;
    };

    static validPassword(control:AbstractControl){
        const value = control.value;
        if (!containNumber) {
            return{invalid_passwd: true}
        }
        return null;
    };

}
function containNumber(value:string) {
    return value.split('').find(v=>isNumber(v)) !==undefined
};

function isNumber(value:string){
    return !isNaN(parseInt(value, 10));
}