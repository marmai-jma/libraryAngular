import { Component, OnInit } from '@angular/core';
import { LibraryService } from 'src/app/services/library.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searchText = '';

  constructor(private libraryService: LibraryService) { }

  ngOnInit() {
  }

  searchLibrary() {
    console.log(this.searchText);
    this.libraryService.searchValue.next(this.searchText);
  }
}
