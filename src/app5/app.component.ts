import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { FriendService } from './friend-service';

@Component({
  selector: 'app5',
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

                <h2>HttpModule</h2>
                <h5>First list of friends</h5>
                <div *ngFor="let friend of friends1">{{friend}}</div>

                <h5>Two list of friends fetched in parallel</h5>
                <div *ngFor="let friend of friends2">{{friend}}</div>

                <h5>Two list of friends feteched sequentially</h5>
                <div *ngFor="let friend of friends3">{{friend}}</div>

                <h2>RouterModule</h2>
                <a [routerLink]="['/color', 'Blue' ]">Blue</a>
                <a [routerLink]="['/color', 'Green']">Green</a>
                <a [routerLink]="['/color', 'Red']">Red</a>
                <router-outlet></router-outlet>
             </div>`
})
export class AppComponent implements OnInit {
  firstName = 'Joe';
  formSubmitted = false;
  extendedFormSubmitted = false;
  friends1: any[] = [];
  friends2: any[] = [];
  friends3: any[] = [];

  extendedPersonForm = new FormGroup({
    name: new FormControl('Joe', Validators.required),
    age: new FormControl(20)
  });

  constructor(private friendService: FriendService) {}

  onSubmitPersonForm() {
    this.formSubmitted = true;
  }

  onSubmitExtendedPersonForm() {
    this.extendedFormSubmitted = true;
  }

  ngOnInit() {
    this.friendService
        .getFriendsSequentially()
        .subscribe(res => {
           this.friends3 = [...res];
        })

    this.friendService
        .getFriendsInParallel()
        .subscribe(res => {
           this.friends2 = [...res[0].friends, ...res[1].friends];
        })

    this.friendService
        .getFriends()
        .subscribe((res)=> {
           this.friends1 = res.friends; 
        }, (error) => console.log(error));
  }
}