import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProjetService } from '../Service/projet.service';
import { TacheComponent } from '../tache/tache.component';
import { TacheService } from '../Service/tache.service';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-addtache',
  templateUrl: './addtache.component.html',
  styleUrl: './addtache.component.css'
})
export class AddtacheComponent implements OnInit {
  tacheform!:FormGroup
  constructor(private fb:FormBuilder,private service:TacheService ,private route:Router){}
  ngOnInit(): void {
    this.tacheform = this.fb.group({
      name: [''],
      debut: [''],
      fin: [''],
      status:['']
    });
  }
  Addtache(){
    let tache:any =this.tacheform.value
    this.service.Addtache(tache).subscribe({
      next:(value) =>{
          alert("add succfully")
          this.route.navigate(['/taches'])

      },error(err) {
          console.log(err)
      },
    })
  }


}
