import { Component } from '@angular/core';

@Component({
  selector: 'app2',
  template: `<div class="demo">
                <h2>FormsModule</h2> 
                <h4>Add Person</h4>
                <form (ngSubmit)="onSubmit()" #personForm="ngForm">
                  <div class="form-group">
                    <label for="name">Name</label>
                    <input #name="ngModel" required [(ngModel)]="firstName" name="firstName">
                    <button [disabled]="!personForm.form.valid" type="submit" class="btn btn-default">Submit</button>
                  </div>
                  <div [hidden]="name.valid || name.pristine">
                    Name is required
                  </div>   
                </form>
                <div *ngIf="formSubmitted">Form was submitted</div>
             </div>`
})
export class AppComponent {
  firstName = 'Joe';
  formSubmitted = false;

  onSubmit() {
    this.formSubmitted = true;
  }
}