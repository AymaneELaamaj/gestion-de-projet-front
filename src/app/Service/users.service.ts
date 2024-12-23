import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }
  public Adduser(Users:any):Observable<any>{

    return this.http.post<any>("http://localhost:8080/Users/saveusers",Users)
  }
  public ListUser():Observable<any>{

    return this.http.get("http://localhost:8080/Users/findall")
  }
  public addusertoptojet(add:any):Observable<any>{
    return this.http.post<any>("http://localhost:8080/Users/addtoproj",add)
  }
  public deleteuser(uid:any):Observable<any>{
    return this.http.delete(`http://localhost:8080/Users/delete/${uid}`)
  }
}
