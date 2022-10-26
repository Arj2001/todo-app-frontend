import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private myApi:ApiService) { 
    this.getTodoList()
  }

  user = localStorage.getItem("name")
  todo_desc = ""
  todo_name = ""
  due_date = ""

  readValues=()=>{
    let data = {
      "user_id":localStorage.getItem("id"),
      "todo_name":this.todo_name,
      "todo_description":this.todo_desc,
      "due_date":this.due_date
    }
    this.myApi.addTodo(data).subscribe(
      (resp)=>{
        alert(resp);
      }
    )
    
    console.log(data)
    
    alert("To do added")
    this.getTodoList()
  }

  changeStatus=(id:any)=>{
    let data = {
      "id" : id, 
      "status":true
    }
    console.log(data)
    this.myApi.changeTodoStatus(data).subscribe()
    alert("Status changed ")
    this.getTodoList()
  }

  getTodoList=()=>{
    let data = {
      "user_id":localStorage.getItem("id")
    }
    this.myApi.viewTodo(data).subscribe(
      (resp)=>{
        this.todoData = resp
      }
    )
  }
  
  todoData:any

  ngOnInit(): void {
  }

}
