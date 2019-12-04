import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-library-form',
  templateUrl: './library-form.component.html',
  styleUrls: ['./library-form.component.scss']
})
export class LibraryFormComponent implements OnInit {
  libraryForm = new FormGroup ({
    label : new FormControl('',[Validators.required,
                                Validators.minLength(4)]),
    type: new FormControl(''),
    firstName : new FormControl(''),
    lastName : new FormControl(''),
    city :new FormControl('', [Validators.required]),
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

  get city(){return this.libraryForm.get('city');}
  get label(){return this.libraryForm.get('label');}
}
