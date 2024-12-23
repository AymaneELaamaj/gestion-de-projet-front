import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  public Updatestatus(id: number, statusDto: any) {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.put(`http://localhost:8080/Project/update/${id}`, statusDto,{ headers });
  }
  public delete(id:any):Observable<any>{
    return this.http.delete(`http://localhost:8080/Project/delete/${id}`);

  }
  public getstatus():Observable<any>{
    return this.http.get("http://localhost:8080/Project/getstatus")
  }}
