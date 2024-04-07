import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export const matchpassword: ValidatorFn = (
  control: AbstractControl
): ValidationErrors | null => {
  let password = control.get('password');
  let confirmedPassword = control.get('confirmedPassword');

  if (
    password &&
    confirmedPassword &&
    password?.value != confirmedPassword?.value
  ) {
    return {
      passwordmatcherror: true,
    };
  }
  return null;
};
