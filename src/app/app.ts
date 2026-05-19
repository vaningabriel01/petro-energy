import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { ScrollToTop } from './components/scroll-to-top/scroll-to-top';
import { Logo } from './components/logo/logo';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Header, Footer, ScrollToTop, Logo],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  title = 'petro-energy';
}
