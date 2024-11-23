import { Component } from '@angular/core';
import { NgFor } from '@angular/common';


@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [NgFor],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.sass'
})
export class HeroComponent {
  artImages_1 = [
    { imgSrc: './hero/bubble-tea-illustration', alt: 'Illustration of a bubble tea cup with tapioca pearls' },
    { imgSrc: './hero/burger-illustration', alt: 'Illustration of a delicious burger with lettuce and cheese' },
    { imgSrc: './hero/cocktail-illustration', alt: 'Illustration of a colorful cocktail with a straw and garnish' }
  ];

  artImages_2 = [
    { imgSrc: './hero/ghost-illustration', alt: 'Illustration of a friendly ghost holding a sign' },
    { imgSrc: './hero/ice-cream-illustration', alt: 'Illustration of a multi-scoop ice cream cone with sprinkles' },
    { imgSrc: './hero/pizza-store-illustration', alt: 'Illustration of a small pizza store with a slice of pizza on the sign' }
  ];

  socialLinks = [
    { href: 'https://instagram.com/pixel8cloud', src: './socials/instagram.svg', alt: 'Instagram logo', ariaLabel: 'Visit Pixel8Cloud on Instagram' },
    { href: 'https://linkedin.com/company/pixel8cloud', src: './socials/linkedin.svg', alt: 'LinkedIn logo', ariaLabel: 'Visit Pixel8Cloud on LinkedIn' },
    { href: 'https://youtube.com/@pixel8cloud', src: './socials/youtube.svg', alt: 'YouTube logo', ariaLabel: 'Visit Pixel8Cloud on YouTube' },
    { href: 'https://discord.gg/9XXaRHPvkd', src: './socials/discord.svg', alt: 'Discord logo', ariaLabel: 'Join Pixel8Cloud on Discord' },
    { href: 'https://github.com/pixel8cloud', src: './socials/github.svg', alt: 'GitHub logo', ariaLabel: 'Visit Pixel8Cloud on GitHub' }
  ];

}
