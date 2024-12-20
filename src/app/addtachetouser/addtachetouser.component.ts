import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TacheService } from '../Service/tache.service';

@Component({
  selector: 'app-addtachetouser',
  templateUrl: './addtachetouser.component.html',
  styleUrl: './addtachetouser.component.css'
})
export class AddtachetouserComponent implements OnInit {
  tachetouser!:FormGroup
  constructor(private fb:FormBuilder ,private service:TacheService){}
  ngOnInit(): void {
    this.tachetouser=this.fb.group({

       uid:[''] ,
       tid:[""]
    })

  }
  AddtoUsers(){
    let tachetouser=this.tachetouser.value
    this.service.addtachetouser(tachetouser).subscribe({
      next:(value)=> {
          console.log(value)
      },error(err){
        console.log(err)
      }
    })
  }


}
