import { Component, OnInit } from '@angular/core';
import { UserService } from '../../core/service/user.service';
import { User } from '../../core/model/user.model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-data-grid',
  imports: [RouterLink],
  templateUrl: './data-grid.component.html',
  styleUrl: './data-grid.component.css'
})
export class DataGridComponent implements OnInit {

  users: User[] = [];

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.userService.getAll().subscribe({
      next: (users) => {
        this.users = users;
      },
      error: (error) => {
        console.error('Erreur lors de la récupération des utilisateurs:', error);
        if (error.status === 0) {
          console.error('Erreur CORS ou serveur non accessible. Vérifiez que:');
          console.error('1. Le serveur Spring est démarré sur http://localhost:8080');
          console.error('2. La configuration CORS est correcte dans Spring');
          console.error('3. Le endpoint /api/users existe et est accessible');
        }
      }
    });
  }
}
