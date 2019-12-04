import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { typesValidator } from 'src/app/directives/type-validator.directive';
import { LibraryDTO } from 'src/app/shared-data/library-dto';
import { DirectorDTO } from 'src/app/shared-data/director-dto';
import { AdressDTO } from 'src/app/shared-data/adress-dto';
import { LibraryService } from 'src/app/services/library.service';


@Component({
  selector: 'app-library-form',
  templateUrl: './library-form.component.html',
  styleUrls: ['./library-form.component.scss']
})
export class LibraryFormComponent implements OnInit {
  libraryForm = new FormGroup ({
    label : new FormControl('',[Validators.required,
                                Validators.minLength(4)]),
    type: new FormControl('', [typesValidator()]),
    firstName : new FormControl(''),
    lastName : new FormControl(''),
    city :new FormControl('', [Validators.required]),
    numberStreet : new FormControl(''),
    postalCode : new FormControl(''),
    street: new FormControl(''),
  });

  // Pour injecter un service, il est impératif de mettre dans le constructor en private le service qu'on veut injecter
  constructor(private libraryService: LibraryService) { }

  ngOnInit() {
  }

  onSubmit(){
    console.warn(this.libraryForm.value);
    const libraryDTO = new LibraryDTO(null, this.libraryForm.value.label, this.libraryForm.value.type,
      new AdressDTO (this.libraryForm.value.city, this.libraryForm.value.numberStreet,
        this.libraryForm.value.postalCode, this.libraryForm.value.street),
      new DirectorDTO(this.libraryForm.value.firstName, this.libraryForm.value.lastName));

    console.log(libraryDTO);

    this.libraryService.addLibrary(libraryDTO).subscribe(() => {
        console.log('Success');
      });
  }

  get city(){return this.libraryForm.get('city');}
  get label(){return this.libraryForm.get('label');}
  get type(){return this.libraryForm.get('type');}
}
