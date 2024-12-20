import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProjetService } from '../Service/projet.service';
import { UsersService } from '../Service/users.service';

@Component({
  selector: 'app-addusers',
  templateUrl: './addusers.component.html',
  styleUrl: './addusers.component.css'
})
export class AddusersComponent implements OnInit{
  userform!:FormGroup
  constructor(private fb:FormBuilder,private service:UsersService){}
  ngOnInit(): void {
    this.userform=this.fb.group({
      uid:[''],
      name:[''],

    });


  }
  AddUsers(){
    let users:any=this.userform.value

    this.service.Adduser(users).subscribe({
      next(value) {
          alert("user addes")
          console.log(value)
      },error(err) {
          console.log(err)
      },
    })
  }

}
