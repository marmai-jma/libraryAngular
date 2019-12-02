import { Component, OnInit, Input } from '@angular/core';
import { LibraryDTO } from 'src/app/shared-data/library-dto';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.scss']
})
export class LibraryComponent implements OnInit {
  @Input()
  library: LibraryDTO;

  constructor() { }

  ngOnInit() {
  }

}
