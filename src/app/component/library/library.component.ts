import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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
  // emission d'un evenement, de type string puisqu'on va passer le label de la library
  @Output() labelEmitter = new EventEmitter <string>();


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

  // envoi du label au père
  sendLabel(label){
    this.labelEmitter.emit(label);
  }
}
