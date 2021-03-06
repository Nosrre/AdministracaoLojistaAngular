import {Injectable} from "@angular/core";
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Locatario} from '../model/locatario';
import {Observable, throwError} from 'rxjs';
import {retry, catchError} from 'rxjs/operators';
import { AuthenticationService } from '../service/authentication.service';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: "root"
})
export class LocatarioService {
  private url =  environment.apiUrl + '/locatario';

  constructor(private http: HttpClient, private authenticationService: AuthenticationService){}

  httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json', 
        'Authorization': `Bearer ${this.authenticationService.currentUserValue.token}`})
  }

  public listAll(): Observable<Locatario[]>{
      return this.http.get<Locatario[]>(this.url)
        .pipe(
            retry(2),
            catchError(this.handleError)
        )
  }

  getById(id: number): Observable<Locatario> {
    return this.http.get<Locatario>(this.url + '/' + id)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  add(locatario: Locatario): Observable<Locatario> {
    let currentUser = this.authenticationService.currentUserValue;
    debugger;
    return this.http.post<Locatario>(this.url + '/cadastrar_locatario', JSON.stringify(locatario), this.httpOptions);
  }

  update(locatario: Locatario): Observable<Locatario> {debugger;
    return this.http.put<Locatario>(this.url + '/' + locatario.id, JSON.stringify(locatario), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  delete(locatario: Locatario) {
    return this.http.delete<Locatario>(this.url + '/' + locatario.id, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  handleError(error: HttpErrorResponse) {
      let errorMessage = '';
      if (error.error instanceof ErrorEvent) {
        errorMessage = error.error.message;
      } else {
        errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
      }
      console.log(errorMessage);
      return throwError(errorMessage);
  };
}