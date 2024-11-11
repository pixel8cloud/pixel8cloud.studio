import { Component, ElementRef, Inject, PLATFORM_ID, ViewChild, AfterViewInit } from '@angular/core';
import { isPlatformBrowser, NgFor } from '@angular/common';

declare let gtag: Function;

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [NgFor],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.sass'
})
export class HeroComponent implements AfterViewInit {
  artImages_1 = [
    { imgSrc: './hero/bubble-tea-illustration', alt: 'Bubble tea illustration' },
    { imgSrc: './hero/burger-illustration', alt: 'Burger illustration' },
    { imgSrc: './hero/cocktail-illustration', alt: 'Cocktail illustration' }
  ];

  artImages_2 = [
    { imgSrc: './hero/ghost-illustration', alt: 'Ghost illustration' },
    { imgSrc: './hero/ice-cream-illustration', alt: 'Ice cream illustration' },
    { imgSrc: './hero/pizza-store-illustration', alt: 'Pizza store illustration' }
  ];

  socialLinks = [
    { href: 'https://instagram.com/pixel8cloud', src: './socials/instagram.svg', alt: 'Instagram', ariaLabel: 'Visit Pixel8Cloud on Instagram' },
    { href: 'https://linkedin.com/company/pixel8cloud', src: './socials/linkedin.svg', alt: 'LinkedIn', ariaLabel: 'Visit Pixel8Cloud on LinkedIn' },
    { href: 'https://youtube.com/@pixel8cloud', src: './socials/youtube.svg', alt: 'YouTube', ariaLabel: 'Visit Pixel8Cloud on YouTube' },
    { href: 'https://discord.gg/9XXaRHPvkd', src: './socials/discord.svg', alt: 'Discord', ariaLabel: 'Join Pixel8Cloud on Discord' },
    { href: 'https://github.com/pixel8cloud', src: './socials/github.svg', alt: 'GitHub', ariaLabel: 'Visit Pixel8Cloud on GitHub' }
  ];


  @ViewChild('heading') heading!: ElementRef;
  constructor(@Inject(PLATFORM_ID) private platformId: object) { }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.createObserver();
    }
  }

  createObserver() {
    const observer_heading = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer_heading.disconnect();
        }
      });
    });
    observer_heading.observe(this.heading.nativeElement);
  }

  trackSocialClick(platform: string): void {
    gtag('event', 'click', {
      event_category: 'Social Link',
      event_label: platform,
      value: 1
    });
  }
}
