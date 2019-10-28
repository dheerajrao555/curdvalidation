import {HttpClient} from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  url:string="http://localhost:3000/curd";

  constructor(private _http: HttpClient) { }
  insertRecord(data):Observable<any>{
    return this._http.post(this.url,data)

  }
  userDetails(){
    return this._http.get(this.url)
  }

  deleteUserDetails(data){
    return this._http.delete(this.url+"/"+data)
  }

  updateUser(data){
    return this._http.put(this.url+"/"+data.id,data)
  }

  getById(id){
    return this._http.get("http://localhost:3000/curd/"+id)

  }

}
