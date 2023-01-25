import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{

  formRegister!:FormGroup;

  constructor (private userService:UserService){

    this.formRegister = new FormGroup({
      nameUser: new FormControl(),
      email: new FormControl(),
      role: new FormControl()
    })
  }

  ngOnInit(): void {

  }

  async onSubmit(){
    console.log(this.formRegister.value);
    const response = this.userService.addUser(this.formRegister.value)
    console.log(response)
  }
}
