import { Component, HostListener, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-scroll-to-top',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './scroll-to-top.html',
  styleUrl: './scroll-to-top.css'
})
export class ScrollToTop {
  isVisible = signal(false);

  @HostListener('window:scroll')
  onScroll() {
    this.isVisible.set(window.scrollY > 250); 
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}