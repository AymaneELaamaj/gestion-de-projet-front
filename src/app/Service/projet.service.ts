import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjetService {

  constructor(private http:HttpClient) { }
  public Addprojet(Projet:any):Observable<any>{

    return this.http.post<any>("http://localhost:8080/Project/saveProject",Projet)
  }

  public ListProjet():Observable<any>{
    return this.http.get("http://localhost:8080/Project/all")
  }
}
