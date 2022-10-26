import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private myApi:ApiService) { }

  name = ""
  age = ""
  phone = ""
  email = ""
  password = ""
  confrimPass = ""

  readValue=()=>{
    let data = {
      "name":this.name,
      "age":this.age,
      "phone":this.phone,
      "email":this.email,
      "password":this.password,
    }
    console.log(data)
    this.myApi.addUser(data).subscribe(
      (resp)=>{
        alert(resp)
      }
    )
    this.name = ""
    this.age = ""
    this.phone = ""
    this.email = ""
    this.password = ""
    this.confrimPass = ""
  }
  ngOnInit(): void {
  }

}
