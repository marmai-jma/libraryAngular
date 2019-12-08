import { Component, OnInit } from '@angular/core';
import { LibraryDTO } from 'src/app/shared-data/library-dto';
import { LibraryService } from 'src/app/services/library.service';

@Component({
  selector: 'app-library-prime',
  templateUrl: './library-prime.component.html',
  styleUrls: ['./library-prime.component.scss']
})
export class LibraryPrimeComponent implements OnInit {
  libraries : LibraryDTO[] = [];

  constructor(private libraryservice: LibraryService) { }

  ngOnInit() {
    this.libraryservice.getAllLibraries().subscribe((libraries) =>
            {this.libraries = libraries;}
    );
  }

}
