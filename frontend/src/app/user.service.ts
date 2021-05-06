import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from "./../environments/environment";


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url:string = environment.apiUrl + "/usuarios";

  constructor(private httpClient:HttpClient) { }

  registerUser(user:any):Promise<any> {
    return this.httpClient.post(this.url, user).toPromise();
  }

  loginUser(user:any) {

  }

  getUsers():Promise<any>  {
    return this.httpClient.get(this.url + "/all").toPromise();
  }
}
