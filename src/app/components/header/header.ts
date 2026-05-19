import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  menuAberto = signal(false);

  toggleMenu() {
    this.menuAberto.set(!this.menuAberto());
  }

  fecharMenu() {
    this.menuAberto.set(false);
  }
}
