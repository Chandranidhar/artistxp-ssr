import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  constructor() { }

  
  inputBlur(frm:any,val: any) {
    frm.controls[val].markAsUntouched();
  }
}
