import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tache',
  templateUrl: './tache.component.html',
  styleUrl: './tache.component.css'
})
export class TacheComponent implements OnInit {
  taches:any
  constructor(){}
  ngOnInit(): void {
  }
  addtaches(){}

}
