import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Logo } from '../logo/logo';
import { SearchBar } from '../search-bar/search-bar';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, Logo, SearchBar],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  menuAberto = signal(false);
  buscaAberta = signal(false);

  toggleMenu() {
    this.menuAberto.set(!this.menuAberto());
  }

  fecharMenu() {
    this.menuAberto.set(false);
    this.buscaAberta.set(false); 
  }

  toggleBusca() {
    this.buscaAberta.set(!this.buscaAberta());
  }

  fecharBusca() {
    this.buscaAberta.set(false);
  }
}