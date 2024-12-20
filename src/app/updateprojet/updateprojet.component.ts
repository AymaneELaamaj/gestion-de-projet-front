import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjetService } from '../Service/projet.service';

@Component({
  selector: 'app-updateprojet',
  templateUrl: './updateprojet.component.html',
  styleUrls: ['./updateprojet.component.css']
})
export class UpdateprojetComponent implements OnInit {

  updateproject: FormGroup;
  projetId: any;  // Variable pour stocker l'ID du projet à mettre à jour

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private service:ProjetService,
    private router:Router // Service pour mettre à jour le projet
  ) {
    this.updateproject = this.fb.group({
      status: ['', Validators.required]  // FormControl pour le statut
    });
  }

  ngOnInit(): void {
    // Récupérer l'ID du projet à partir de l'URL
    this.projetId = this.route.snapshot.paramMap.get('id');
    // Charger les détails du projet si nécessaire
  }



  updatestatus(): void {
    if (this.updateproject.valid) {
      const updatedStatus = this.updateproject.value;
      this.service.Updatestatus(this.projetId, updatedStatus).subscribe(
       {
        next:(value)=> {
          alert('succes')
            console.log("mise a jour",value)
            this.router.navigate(["/projet"])
        },error(err) {
            console.log("probleme de mise a jour")
        },

       }
      );
    }
  }
}
