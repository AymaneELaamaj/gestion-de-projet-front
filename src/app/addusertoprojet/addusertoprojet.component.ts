import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UsersService } from '../Service/users.service';

@Component({
  selector: 'app-addusertoprojet',
  templateUrl: './addusertoprojet.component.html',
  styleUrl: './addusertoprojet.component.css'
})
export class AddusertoprojetComponent implements OnInit {
  usertoproj!:FormGroup
  constructor(private fb:FormBuilder, private service:UsersService){}
  ngOnInit(): void {
    this.usertoproj=this.fb.group({
      id:[''],
      uid:['']
    })
  }
  Addtoprojet(){
    let proj=this.usertoproj.value
    this.service.addusertoptojet(proj).subscribe({
      next(value) {
          alert('added')
      },error(err) {
          console.log(err)
      },
    })

  }

}
