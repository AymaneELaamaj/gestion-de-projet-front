import { Component, OnInit } from '@angular/core';
import { ProjetService } from '../Service/projet.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projet',
  templateUrl: './projet.component.html',
  styleUrl: './projet.component.css'
})
export class ProjetComponent implements OnInit {
  Projets:any
  constructor(private service:ProjetService, private router:Router){

  }
  ngOnInit(): void {
    this.loadprojet();
  }
  public loadprojet(){
    this.service.ListProjet().subscribe({
      next:(value)=> {
          this.Projets=value
      },error(err) {
          console.log(err)
      },
    })
  }
  gotousers(projet: any) {
    this.router.navigate(['/users', projet.id], {
      state: { users: projet.users }
    });
  }

  updatestatus(id:any){
    this.router.navigate(["/updatestatus",id])
  }
  deleteproject(id:any){
    this.service.delete(id).subscribe({
      next:(value)=>{
          alert("deleted")
          window.location.reload()
      },error(err) {
          console.log("err")
      },
    })
  }


}
