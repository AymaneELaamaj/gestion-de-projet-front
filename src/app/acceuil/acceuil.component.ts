import { Component, OnInit } from '@angular/core';
import { ProjetService } from '../Service/projet.service';
import { Chart } from 'chart.js';
import { ActivatedRoute, Router } from '@angular/router';


// Modèle de données pour les statistiques de projet
interface StatsProjet {
  Terminé: number;
  Non_commencé: number;
  En_cours: number;
}

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.css']
})
export class AcceuilComponent implements OnInit {
  statsProjet: StatsProjet = { Terminé: 0, Non_commencé: 0, En_cours: 0 };
  chart: any;
  get termine() {
    return this.statsProjet['Terminé'];
  }

  get nonCommence() {
    return this.statsProjet['Non_commencé'];
  }

  get enCours() {
    return this.statsProjet['En_cours'];
  }

  constructor(private service: ProjetService,private router: Router) {

  }

  ngOnInit(): void {
    this.getstatus();

  }




  public getstatus(): void {
    this.service.getstatus().subscribe({
      next: (data: StatsProjet) => {
        this.statsProjet = data;

        // Mise à jour ou création du graphique
        this.renderChart();
      },
      error: (err) => {
        console.error('Erreur lors de la récupération des données :', err);
      }
    });
  }

  private renderChart(): void {
    if (this.chart) {
      // Mise à jour du graphique existant
      this.chart.data.datasets[0].data = [
        this.statsProjet.Non_commencé,
        this.statsProjet.En_cours,
        this.statsProjet.Terminé
      ];
      this.chart.update();
    } else {
      // Création d'un nouveau graphique
      this.chart = new Chart('chart', {
        type: 'doughnut', // Type de graphique (doughnut/pie)
        data: {
          labels: ['Non_commencé', 'En_cours', 'Terminé'],
          datasets: [
            {
              data: [
                this.statsProjet.Non_commencé,
                this.statsProjet.En_cours,
                this.statsProjet.Terminé
              ],
              backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'], // Couleurs des segments
              hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
            }
          ]
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: 'top',
            },
            tooltip: {
              enabled: true,
            }
          }
        }
      });
    }
  }
}
