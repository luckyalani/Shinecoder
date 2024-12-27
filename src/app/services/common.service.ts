import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { BaseUrl } from '../shared/apiUrls';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  userData: any;
  requestOptions:any;

  constructor(private http: HttpClient,private auth:AuthService) {

    this.auth.userData$.subscribe((data) => {
      this.userData = data
    })

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.userData.token}`
    });

    this.requestOptions = { headers: headers };
   }

  // PostData(formData: any, apiUrl: string): Observable<any> {
  //   return this.http.post(`${BaseUrl + apiUrl}`, formData).pipe(
  //     catchError((error: HttpErrorResponse) => {
  //       console.error('API Error:', error);
  //       return throwError(error.error);
  //     })
  //   );
  // }

  UpdateData(formData: any, apiUrl: string): Observable<any> {
    return this.http.patch(`${BaseUrl + apiUrl}`, formData, this.requestOptions).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error('API Error:', error);
        return throwError(error.error);
      })
    );
  }

  PostData(formData: any, apiUrl: string): Observable<any> {
    return this.http.post(`${BaseUrl + apiUrl}`, formData, this.requestOptions).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error('API Error:', error);
        return throwError(error.error);
      })
    );
  }

  GetData(apiUrl: string): Observable<any> {
    return this.http.get(`${BaseUrl + apiUrl}`, this.requestOptions).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error('API Error:', error);
        return throwError(error.error);
      })
    );
  }

  DeleteData(apiUrl: string,id:number): Observable<any> {
    return this.http.delete(`${BaseUrl + apiUrl}/${id}`, { ...this.requestOptions}).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error('API Error:', error);
        return throwError(error.error);
      })
    );
  }

  GetDataById(apiUrl: any,id:number) {
    return this.http.get(`${BaseUrl + apiUrl}/${id}`,{ ...this.requestOptions}).pipe(
      catchError((error: HttpErrorResponse) => {
        // Handle the error here
        console.error('API Error:', error);
        return throwError(error.error);
      })
    );
  }

  // DeleteData(apiUrl: any) {
  //   return this.http.delete(`${BaseUrl + apiUrl}`).pipe(
  //     catchError((error: HttpErrorResponse) => {
  //       console.error('API Error:', error);
  //       return throwError(error.error);
  //     })
  //   );
  // }
}
