import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LibraryDTO } from '../shared-data/library-dto';

@Injectable({
  providedIn: 'root'
})
export class LibraryService {

  constructor(private http: HttpClient) { }

  // Observable
  getAllLibraries(): Observable<LibraryDTO[]> {
    return this.http.get<LibraryDTO[]>('http://localhost:8080/libraries');
  }
}
