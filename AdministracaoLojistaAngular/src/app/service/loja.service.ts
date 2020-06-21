import {Injectable} from "@angular/core";
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Loja} from '../model/loja';
import {Observable, throwError} from 'rxjs';
import {retry, catchError} from 'rxjs/operators';
import { AuthenticationService } from '../service/authentication.service';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: "root"
})
export class LojaService {
  private url =  environment.apiUrl + '/loja';

  constructor(private http: HttpClient, private authenticationService: AuthenticationService){}

  httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json', 
        'Authorization': `Bearer ${this.authenticationService.currentUserValue.token}`})
  }

  public listAll(): Observable<Loja[]>{
      return this.http.get<Loja[]>(this.url)
        .pipe(
            retry(2),
            catchError(this.handleError)
        )
  }

  public listLojaDisponivel(): Observable<Loja[]>{
    return this.http.get<Loja[]>(this.url + '/listLojaDisponivel').pipe(
      retry(2),
      catchError(this.handleError)
    )
  }

  getById(id: number): Observable<Loja> {
    return this.http.get<Loja>(this.url + '/' + id)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  add(loja: Loja): Observable<Loja> {
    debugger;
    return this.http.post<Loja>(this.url + '/cadastrar_loja', JSON.stringify(loja), this.httpOptions);
  }

  update(loja: Loja): Observable<Loja> {debugger;
    return this.http.put<Loja>(this.url + '/' + loja.id, JSON.stringify(loja), this.httpOptions)
      .pipe(
        retry(0),
        catchError(this.handleError)
      )
  }

  delete(loja: Loja) {
    return this.http.delete<Loja>(this.url + '/' + loja.id, this.httpOptions)
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