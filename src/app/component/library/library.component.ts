import { Component, OnInit, Input } from '@angular/core';
import { LibraryDTO } from 'src/app/shared-data/library-dto';
import { LibraryService } from 'src/app/services/library.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.scss']
})
export class LibraryComponent implements OnInit {
  @Input()
  library: LibraryDTO;
  link : string;


  constructor(private libraryService: LibraryService,
              private router: Router,
              private route: ActivatedRoute
    ) { }

  ngOnInit() {
    this.link="/modifier/" + this.library.id;
    console.log('url: '+ this.link);
  }

  display() {
    console.log("id ", this.link);
  }

  delete() {
    this.libraryService.deleteLibrary(this.library.id)
    .subscribe(
      () => { console.log('Delete Success');
              this.router.navigate(['/Liste']);
              location.reload();
      },
      (error) => {console.log('une erreur est arrivée en suppression : ' + error);}
    );
  }
}
