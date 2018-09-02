import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from "rxjs";
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export abstract class BaseService {
  /**
   * @type {string}
   */
  public resourceUrl: string;
  /**
   * @type {any}
   */
  protected model: any;

  /**
   *
   * @param {HttpClient} http
  */
  constructor(private http: HttpClient) { }

  public get httpClient(): HttpClient {
    return this.http;
  }

  /**
   * Saves resource
   * @param {any} data
   */
  public save(data: any) {
    if (data.id) {
      return this.update(data);
    } else {
      return this.create(data);
    }
  }

  /**
   * Creates a resource
   * @param {any} data
   * @return {Observable<any>}
   */
  public create(data: any): Observable<any> {
    if (data.hasOwnProperty('id')) {
      delete data.id;
    }

    return this.http.post(this.resourceUrl, data);
  }

  /**
   * Patches a resource
   * @param {any} data
   * @return {Observable<any>}
   */
  public update(data: any): Observable<any> {
    let id = data.id;
    delete data.id;

    return this.http.put(this.resourceUrl + `/${id}`, data);
  }

  /**
   * Lists resources
   * @param {any} params
   * @return {Observable<any[]>}
   */
  public index(params: any = {}): Observable<any[]> {
    return this.http.get(this.resourceUrl, {params: params}).pipe(
        map((response: any[]) => response.map((item: any) => new this.model(item)))
    );
  }

  /**
   * View resource
   * @param {number} id
   * @param {any} params
   * @return {Observable<A>}
   */
  public view(id: number, params: any = {}) {
    return this.http.get(this.resourceUrl + '/' + id, {params: params}).pipe(
        map((response: any) => new this.model(response))
    );
  }

  /**
   * Deletes a resource
   * @param {number} id
   * @return {Observable<any>}
   */
  public delete(id: number): Observable<any> {
    return this.http.delete(this.resourceUrl + '/' + id);
  }
  /**
   * handleError
   *
   * @param {HttpErrorResponse} error
   * @return { throwError }
   */
  public handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
    }
    // return an ErrorObservable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  }

}
