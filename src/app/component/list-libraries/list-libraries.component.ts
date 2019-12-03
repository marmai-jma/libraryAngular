import { Component, OnInit } from '@angular/core';
import { LibraryDTO } from 'src/app/shared-data/library-dto';
import { AdressDTO } from 'src/app/shared-data/adress-dto';
import { DirectorDTO } from 'src/app/shared-data/director-dto';
import { LibraryService } from 'src/app/services/library.service';

@Component({
  selector: 'app-list-libraries',
  templateUrl: './list-libraries.component.html',
  styleUrls: ['./list-libraries.component.scss']
})
export class ListLibrariesComponent implements OnInit {
  libraries : LibraryDTO[]= [ new LibraryDTO (1,'Bibliothèque Francois Mitterand', 'NATIONALE',
  new AdressDTO('Paris', 11, 75013, 'avenue du Truc'), new DirectorDTO('Emmanuel','Macron')),
  new LibraryDTO (2,'Bibliothèque Jacques Chirac', 'PUBLIQUE',
  new AdressDTO('Paris', 12, 75011, 'avenue du Machin'), new DirectorDTO('Bernadette','Chaudron de Courcelles')),
  new LibraryDTO (3,'Bibliothèque René Coti', 'PUBLIQUE',
  new AdressDTO('Paris', 12, 75011, 'avenue du Grand Bidule'), new DirectorDTO('Marie-Chantal','Pouet')),
  new LibraryDTO (4,'Bibliothèque Nicolas Sarkozy', 'PUBLIQUE',
  new AdressDTO('Paris', 12, 75011, 'avenue de Nulle Part'), new DirectorDTO('Madame','De la Fayette')),
]



  constructor(private libraryservice: LibraryService) { }

  ngOnInit() {
    // this.libraries = this.libraries.filter(lib => {return lib.type === 'PUBLIQUE';});
    this.libraryservice.getAllLibraries().subscribe((libraries) =>
            {this.libraries = libraries;}
    );

  }

}
