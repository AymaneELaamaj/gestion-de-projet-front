import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { UsersService } from '../Service/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit {
  users: any[] = [];

  constructor(private route:Router) {}

  ngOnInit(): void {
    // Récupérer la liste des users depuis l'état de navigation
    const navigation = window.history.state;
    if (navigation.users) {
      this.users = navigation.users;
    }
  }
  addusers(){
    this.route.navigate(['/addusertoprojet'])
  }
}
