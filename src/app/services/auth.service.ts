import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, Observable, of, throwError } from 'rxjs';
import { AuthUrl } from '../shared/apiUrls';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userDataSubject = new BehaviorSubject<any>([]);
  userData$ = this.userDataSubject.asObservable();

  constructor(private http: HttpClient) {
    this.initData()
  }

  PostData(formData: any, apiUrl: string): Observable<any> {
    return this.http.post(`${AuthUrl + apiUrl}`, formData).pipe(
      catchError((error: HttpErrorResponse) => {
        return throwError(error.error);
      })
    );
  }

  initData(): void {
    this.retriveUserData().subscribe((UserData: any) => {
      this.userDataSubject.next(UserData);
    });
  }

  setData(UserData: any) {
    this.userDataSubject.next(UserData);
  }

  private retriveUserData() {
    const UserData = localStorage.getItem('UserData');
    return of(UserData ? JSON.parse(UserData) : undefined);
  }
}
