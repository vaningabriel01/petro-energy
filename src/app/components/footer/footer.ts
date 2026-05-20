import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Logo } from '../logo/logo';
import { SearchBar } from '../search-bar/search-bar';
import { SocialLinks } from '../social-links/social-links';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink, Logo, SearchBar, SocialLinks],
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class Footer {}
