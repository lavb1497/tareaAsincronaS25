import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/interface';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit{

  user!:User[];

  constructor(private userServices:UserService){

  }

  ngOnInit(): void {

    this.userServices.getUser().subscribe(user => {
      this.user = user
    })
  }

  onClickDeleted(user : User){
    const response = this.userServices.deletedUser(user);
    console.log(response)
  }
}
