import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProjetService } from '../Service/projet.service';

@Component({
  selector: 'app-addprojet',
  templateUrl: './addprojet.component.html',
  styleUrl: './addprojet.component.css'
})
export class AddprojetComponent implements OnInit {
  addform!:FormGroup
  constructor(private fb:FormBuilder,private service:ProjetService){}
  ngOnInit(): void {
    this.addform = this.fb.group({
      name: [''],
      debut: [''],
      fin: [''],
      status:['']
    });
  }
  AddProject(){
    let projet:any =this.addform.value
    this.service.Addprojet(projet).subscribe({
      next(value) {
          alert("add succfully")
      },error(err) {
          console.log(err)
      },
    })
  }

}
