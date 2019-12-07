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

  // Observable - recupération de la liste de toutes les libraries
  getAllLibraries(): Observable<LibraryDTO[]> {
    return this.http.get<LibraryDTO[]>('http://localhost:8080/libraries');
  }

  // POST : add a new library to the server
  addLibrary(libraryDto : LibraryDTO): Observable<string> {
    return this.http.post<string>('http://localhost:8080/libraries',libraryDto, this.httpOptions);
  }

  // Observable - recupération d'une library par id
  getLibrary(id : string): Observable<LibraryDTO> {
    return this.http.get<LibraryDTO>('http://localhost:8080/libraries/'+ id);
  }

  // PUT : update of an existing library to the server
  updateLibrary(libraryDto : LibraryDTO): Observable<any> {
    return this.http.put<any>('http://localhost:8080/libraries/'+ libraryDto.id, libraryDto, this.httpOptions);
  }

  // Observable - recupération d'une library par id
  deleteLibrary(id : string): Observable<string> {
    return this.http.delete<string>('http://localhost:8080/libraries/'+ id);
  }
}
