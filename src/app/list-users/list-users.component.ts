import { Component, OnInit } from '@angular/core';
import { UsersService } from '../Service/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrl: './list-users.component.css'
})
export class ListUsersComponent implements OnInit {
  Users:any
  constructor(private service:UsersService,private route:Router){}
  ngOnInit(): void {
    this.loadusers()
  }
  public loadusers(){
    this.service.ListUser().subscribe({
      next:(value)=>{
        console.log('Users data:', value);
          this.Users=value

      },error(err) {
          console.log(err)
      },
    })
  }
  deleteuser(uid:any){
    this.service.deleteuser(uid).subscribe({
      next(value) {
          alert("user deleted")
          window.location.reload
      },error(err) {
          console.log(err)
      },
    })
  }


}
