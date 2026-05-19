import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cookie-consent',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cookie-consent.html',
  styleUrls: ['./cookie-consent.css'],
})
export class CookieConsentComponent implements OnInit {
  isVisible = signal(false);

  ngOnInit(): void {
    const consent = localStorage.getItem('cookie_consent');
    if (!consent) {
      setTimeout(() => this.isVisible.set(true), 800);
    }
  }

  acceptAll(): void {
    this.saveConsent('all');
    this.dismiss();
  }

  rejectAll(): void {
    this.saveConsent('necessary');
    this.dismiss();
  }

  private saveConsent(type: string): void {
    localStorage.setItem('cookie_consent', JSON.stringify({
      type,
      timestamp: new Date().toISOString(),
    }));
  }

  private dismiss(): void {
    this.isVisible.set(false);
  }
}