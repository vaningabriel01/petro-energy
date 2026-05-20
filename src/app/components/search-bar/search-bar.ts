import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search-bar.html',
  styleUrl: './search-bar.css',
})
export class SearchBar {
  termoBusca = signal('');

  constructor(private router: Router) {}

  buscar() {
    const termo = this.termoBusca().trim();
    if (termo) {
      this.router.navigate(['/busca'], { queryParams: { q: termo } });
      this.termoBusca.set('');
    }
  }
}