import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Film {
  id: number;
  titre: string;
  affiche: string;
}

@Component({
  selector: 'app-liste',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './liste.html',
  styleUrl: './liste.css'
})
export class Liste {
  films: Film[] = [
    { id: 1, titre: 'Inception', affiche: 'https://image.tmdb.org/t/p/w500/oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg' },
    { id: 2, titre: 'Interstellar', affiche: 'https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg' },
    { id: 3, titre: 'The Dark Knight', affiche: 'https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg' },
    { id: 4, titre: 'Gladiator', affiche: 'https://image.tmdb.org/t/p/w500/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg' },
    { id: 5, titre: 'Fight Club', affiche: 'https://image.tmdb.org/t/p/w500/bptfVGEQuv6vDTIMVCHjJ9Dz8PX.jpg' }
  ];

  filmSelectionne: Film | null = null;

  selectionnerFilm(film: Film): void {
    this.filmSelectionne = film;
  }
}