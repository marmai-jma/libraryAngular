import { Component, OnInit } from '@angular/core';
import { LibraryDTO } from 'src/app/shared-data/library-dto';
import { LibraryService } from 'src/app/services/library.service';

@Component({
  selector: 'app-list-libraries',
  templateUrl: './list-libraries.component.html',
  styleUrls: ['./list-libraries.component.scss']
})
export class ListLibrariesComponent implements OnInit {
  libraries : LibraryDTO[] = [];
  messageEventEmitter : string = '';


  constructor(private libraryservice: LibraryService) { }

  ngOnInit() {
    // this.libraries = this.libraries.filter(lib => {return lib.type === 'PUBLIQUE';});
    this.libraryservice.getAllLibraries().subscribe((libraries) =>
            {this.libraries = libraries;}
    );


    this.libraryservice.searchValue.subscribe((searchText) => {
      console.log('Valeur cherchée ' + searchText );
      if (searchText.length > 0 ){
        this.libraries =   this.libraries.filter( lib => lib.label.includes(searchText));
      } else {
       this.libraryservice.getAllLibraries().subscribe((libraries) =>{this.libraries = libraries; });
      }
    });
  }

  onLabelEmitter(label){
    this.messageEventEmitter = 'vous avez cliqué sur la ' + label ;
  }

}
