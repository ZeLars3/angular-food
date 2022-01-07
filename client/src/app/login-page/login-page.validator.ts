import { FormControl } from "@angular/forms";

export class LoginPageValidator {
  static email(control: FormControl): { [key: string]: boolean } | null {
    if (!control.value) {
      return null;
    }
    const emailRegexp = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
    if (emailRegexp.test(control.value)) {
      return null;
    }
    return {
      email: true
    };
  }

  static password(control: FormControl): { [key: string]: boolean } | null {
    if (!control.value) {
      return null;
    }
    const passwordRegexp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
    if (passwordRegexp.test(control.value)) {
      return null;
    }
    return {
      password: true
    };
  }
}
