import { Component } from '@angular/core';

interface Film {
  titre: string;
  affiche: string;
}

@Component({
  selector: 'app-liste',
  imports: [],
  templateUrl: './liste.html',
  styleUrl: './liste.css'
})
export class Liste {
  films: Film[] = [
    { titre: 'Inception', affiche: 'https://image.tmdb.org/t/p/w500/oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg' },
    { titre: 'Interstellar', affiche: 'https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg' },
    { titre: 'The Dark Knight', affiche: 'https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg' },
    { titre: 'Gladiator', affiche: 'https://image.tmdb.org/t/p/w500/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg' },
    { titre: 'Fight Club', affiche: 'https://image.tmdb.org/t/p/w500/bptfVGEQuv6vDTIMVCHjJ9Dz8PX.jpg' }
  ];

  // Film sur lequel on a cliqué (null tant qu'on n'a rien choisi)
  filmSelectionne: Film | null = null;

  selectionnerFilm(film: Film): void {
    this.filmSelectionne = film;
  }
}