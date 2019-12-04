import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LibraryDTO } from '../shared-data/library-dto';

@Injectable({
  providedIn: 'root'
})
export class LibraryService {
  httpOptions = {
    headers: new HttpHeaders({'Content-type' : 'application/json'})
  };

  constructor(private http: HttpClient) { }

  // Observable
  getAllLibraries(): Observable<LibraryDTO[]> {
    return this.http.get<LibraryDTO[]>('http://localhost:8080/libraries');
  }

  // POST : add a new libraryto the server
  addLibrary(libraryDto : LibraryDTO): Observable<string> {
    return this.http.post<string>('http://localhost:8080/libraries',libraryDto, this.httpOptions);
  }
}
