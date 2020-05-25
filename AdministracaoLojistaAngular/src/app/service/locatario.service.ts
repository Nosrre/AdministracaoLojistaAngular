import {Injectable} from "@angular/core";
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Locatario} from '../model/locatario';
import {Observable, throwError} from 'rxjs';
import {retry, catchError} from 'rxjs/operators';

@Injectable({
    providedIn: "root"
})
export class LocatarioService {
    private url: 'http://localhost:3000/locatarios';

    constructor(private http: HttpClient){}

    httpOptions = {
        headers: new HttpHeaders({'Contente-Type': 'application/json'})
    }

    public getAll(): Observable<Locatario[]>{
        return this.http.get<Locatario[]>(this.url).pipe(
                retry(2),
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