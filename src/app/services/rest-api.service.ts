import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams, HttpRequest, HttpEvent  } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { delay, map, catchError } from 'rxjs/operators';
import { StorageService } from './storage.service';
import { environment } from 'src/environments/environment.development';
import { ThisReceiver } from '@angular/compiler';
@Injectable({
  providedIn: 'root'
})
export class RestApiService {
  auth_token: any;

  constructor(
    private http: HttpClient,
    private storage : StorageService,
  ) {
      // this.merchant.sync();
    }

  private getApiUrl(endpoint: string): any {
    return `${environment.api.url}${endpoint}`;
  }

  private handleError(error: HttpErrorResponse): any {

    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {

      if (error.status == 401) {
        localStorage.clear();
        window.location.reload();
      }

      console.error(
        `Backend returned code ${error.status}, \n
          Body was: ${error.error}`);
    }

    return throwError(error);

  }

  private get(endpoint: string): any {
    return this.http.get(endpoint, this.reqHeaders())
      .pipe(
        delay(100),
        map((data: any) => (data)),
        catchError(this.handleError)
      );
  }

  private get_non(endpoint: string): any {
    return this.http.get(endpoint, this.reqHeaders())
      .pipe(
        catchError(this.handleError)
      );
  }

  private post(endpoint: string, body: {}): any {
    return this.http.post(endpoint, body, this.reqHeaders())
      .pipe(
        delay(100),
        map((data: any) => (data || data)),
        catchError(this.handleError)
      );
  }

  private reqHeaders() {

    const auth_token = this.storage.get('token');

    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    if (auth_token) {

      headers = new HttpHeaders({
        'Accept': 'application/json',
        'Authorization': `Bearer ${auth_token}`,
      });

    }

    return {
      headers: headers,
    };

  }

  public addUser(user:any,file:File)
  {

    const formData: FormData = new FormData();
    formData.append('image', file);
    formData.append('email', user.email);
    formData.append('phone', user.phone);
    formData.append('name', user.name);
  
    return this.post(this.getApiUrl('user-add'),formData);
  }

  public addGroup(group:any)
  {
    const formData = {
     
      name: group.name,
    

    }
    return this.post(this.getApiUrl('group-add'),formData);
  }
  
  public getWorkOrderList()
  {
    return this.get(this.getApiUrl('deshboard-work-list'));
  }

  public getUserList()
  {
    return this.get(this.getApiUrl('user-list'));
  }

  public getClientList()
  {
    return this.get(this.getApiUrl('deshboard-client-list'));
  }
  
  public getAssetsList(client_id:any)
  {
    return this.get(this.getApiUrl('deshboard-assets-of-Client/'+client_id));
  }

  public assignWork(work_id:any,user_id:any)
  {
    const formData = {
      work_id: work_id,
      user_id: user_id,
    };
    return this.post(this.getApiUrl('deshboard-update-assign'),formData)
  }
  /**
   * @use Login api
   * @param email : string
   * @param password : string
   * @returns
   */
  public login(email: string, password: string): any {
    const formData = {
      email: email,
      password: password,
    };
    return this.post(this.getApiUrl('login'), formData);
  }
  public signup(user:any): any {
   
    return this.post(this.getApiUrl('create-user'), user);
  }

  public createFolder(folder_name : string): any {
    const data = {
      folder_name: folder_name
    };
    return this.post(this.getApiUrl('create-folder'), data);
  }

  public user(formData: {}, isEdit: boolean = true): any {

    let uri = 'add_user';

    if (isEdit === true) {
      uri = 'edit_user';
    }

    return this.post(this.getApiUrl(uri), formData);
  }

  public restro_list(): any {
    return this.get(this.getApiUrl('restraurant_details'));
  }

  public restro_info(restaurant_id: string): any {
    return this.get(this.getApiUrl(`restraurant_details/${restaurant_id}`));
  }

  public uploadfile(data: any): any {
    return this.post(this.getApiUrl('uploadfile'), data);
  }


  public getBulkTax(data: {}) {
    return this.post(this.getApiUrl(`get_bulk_recal_tax`), data);
  }


  public upd_for_multi_settle(data: {}) {
    return this.post(this.getApiUrl(`upd_for_multi_settle`), data);
  }

  // public uploadDoc(data: {}) {

  //   const headers = new HttpHeaders({
  //     // Set the appropriate content type for file upload
  //     'Content-Type': 'multipart/form-data'
  //   });

  //   console.log( 'earlier data was :: ',data ) ;
  //   console.log( JSON.stringify(data) ) ;

  //   const options = { headers: headers };

  //   data = {
  //     'free': JSON.stringify(data),
  //     'weight': 'no-matter',
  //   };

  //   this.http.post('http://localhost:8000/api/upload-document', data)
  //     .subscribe(response => {
  //       console.log('Post request successful:', response);
  //     }, error => {
  //       console.error('Error in post request:', error);
  //     });

  // }

  public get_user_lang() {
    return this.get(this.getApiUrl(`get_user_lang`));
  }

  public uploadDocument(file: File): Observable<HttpEvent<any>> {

    const auth_token = this.storage.get('token');

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${auth_token}`
    });

    const formData: FormData = new FormData();

    formData.append('file', file);

    const url =  this.getApiUrl('upload-document')

    const req = new HttpRequest('POST', url, formData, {
      headers,
      reportProgress: true,
      responseType: 'json',
    });

    return this.http.request(req);
  }

  public collectionList () {
    return this.get(this.getApiUrl(`collection-list/1`));
  }

}
