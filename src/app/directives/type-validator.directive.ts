
import {ValidatorFn,AbstractControl } from '@angular/forms';

export function typesValidator() : ValidatorFn {

  let types = ['PUBLIC', 'NATIONAL'];

  return (control: AbstractControl) : {[key: string] : any} | null => {
    const valid = types.includes(control.value);
    return !valid ? {'availabletype': {value: control.value}} : null;
  };
}
