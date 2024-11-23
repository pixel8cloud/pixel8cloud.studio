import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink, NgFor],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.sass'
})
export class FooterComponent {
  socialLinks = [
    { href: 'https://instagram.com/pixel8cloud', src: './socials/instagram.svg', alt: 'Instagram logo', ariaLabel: 'Visit Pixel8Cloud on Instagram' },
    { href: 'https://linkedin.com/company/pixel8cloud', src: './socials/linkedin.svg', alt: 'LinkedIn logo', ariaLabel: 'Visit Pixel8Cloud on LinkedIn' },
    { href: 'https://youtube.com/@pixel8cloud', src: './socials/youtube.svg', alt: 'YouTube logo', ariaLabel: 'Visit Pixel8Cloud on YouTube' },
    { href: 'https://discord.gg/9XXaRHPvkd', src: './socials/discord.svg', alt: 'Discord logo', ariaLabel: 'Join Pixel8Cloud on Discord' },
    { href: 'https://github.com/pixel8cloud', src: './socials/github.svg', alt: 'GitHub logo', ariaLabel: 'Visit Pixel8Cloud on GitHub' }
  ];
}
