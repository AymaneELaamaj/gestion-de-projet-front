import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TacheService {

  constructor(private http:HttpClient) { }
  public Addtache(tache:any):Observable<any>{

    return this.http.post<any>("http://localhost:8080/taches/savetaches",tache)
  }
  public listtache():Observable<any>{

    return this.http.get("http://localhost:8080/taches/all",)
  }
  public addtachetouser(addusertoprj:any):Observable<any>{
    return this.http.post<any>("http://localhost:8080/taches/addtachetoprj",addusertoprj)
  }

}
