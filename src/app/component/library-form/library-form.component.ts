import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-library-form',
  templateUrl: './library-form.component.html',
  styleUrls: ['./library-form.component.scss']
})
export class LibraryFormComponent implements OnInit {
  libraryForm = new FormGroup ({
    label : new FormControl(''),
    type: new FormControl(''),
    firstName : new FormControl(''),
    lastName : new FormControl(''),
    city :new FormControl(''),
    numberStreet : new FormControl(''),
    postalCode : new FormControl(''),
    street: new FormControl(''),
  });

  constructor() { }

  ngOnInit() {
  }

  onSubmit(){
    console.warn(this.libraryForm.value);
  }

}
