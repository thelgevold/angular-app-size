import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app3',
  template: `<div class="demo">
                <h2>FormsModule</h2> 
                <form (ngSubmit)="onSubmitPersonForm()" #personForm="ngForm">
                  <div class="form-group">
                    <label for="name">Name</label>
                    <input #name="ngModel" required [(ngModel)]="firstName" name="firstName">
                    <button [disabled]="!personForm.form.valid" type="submit">Submit</button>
                  </div>
                  <div [hidden]="name.valid || name.pristine">
                    Name is required
                  </div>   
                </form>
                <div *ngIf="formSubmitted">Form was submitted</div>
                
                <h2>ReactiveFormsModule</h2>   
                <form (ngSubmit)="onSubmitExtendedPersonForm()" [formGroup]="extendedPersonForm">
                  <label>Name:</label>
                  <input type="text" formControlName="name">
                  <label>Age:</label>
                  <input type="number" formControlName="age">
                  <button [disabled]="!extendedPersonForm.valid" type="submit">Submit</button>
                </form>
                <div *ngIf="extendedFormSubmitted">Form was submitted</div>
             </div>`
})
export class AppComponent {
  firstName = 'Joe';
  formSubmitted = false;
  extendedFormSubmitted = false;

  extendedPersonForm = new FormGroup({
    name: new FormControl('Joe', Validators.required),
    age: new FormControl(20)
  });

  onSubmitPersonForm() {
    this.formSubmitted = true;
  }

  onSubmitExtendedPersonForm() {
    this.extendedFormSubmitted = true;
  }
}