import { Component, OnInit } from '@angular/core';
import { TacheService } from '../Service/tache.service';

@Component({
  selector: 'app-list-tache',
  templateUrl: './list-tache.component.html',
  styleUrl: './list-tache.component.css'
})
export class ListTacheComponent implements OnInit{
  taches:any
  constructor(private service:TacheService){}
  ngOnInit(): void {
    this.loadtaches()
  }
  loadtaches(){
    this.service.listtache().subscribe({
      next:(value)=>{
          console.log(value)
          this.taches=value
      },error(err) {
          console.log(err)
      },
    })
  }

}
