import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  addUser=(data:any)=>{
    return this.http.post("http://localhost:8080/addUser",data)
  }
  authUser=(data:any)=>{
    return this.http.post("http://localhost:8080/auth",data)
  }
  addTodo=(data:any)=>{
    return this.http.post("http://localhost:8080/addTodo",data)
  }
  viewTodo=(data:any)=>{
    return this.http.post("http://localhost:8080/viewTodo",data)
  }
}
