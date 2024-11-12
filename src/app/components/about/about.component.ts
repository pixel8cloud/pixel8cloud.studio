import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterLink, NgFor],
  templateUrl: './about.component.html',
  styleUrl: './about.component.sass'
})
export class AboutComponent {
  cardsData = [
    {
      bgColor: 'rgb(255, 171, 171)',
      imgSrc: './cards/uiux.svg',
      title: 'UI/UX Design',
      description: 'Creating user-centered designs that offer excellent user experiences. We focus on making designs both visually appealing and functional.',
      link: '/services'
    },
    {
      bgColor: 'rgb(189, 231, 255)',
      imgSrc: './cards/fullstack.svg',
      title: 'Full Stack Development',
      description: 'Building responsive, dynamic websites that function seamlessly across devices. Perfect for businesses and personal projects.',
      link: '/services'
    },
    {
      bgColor: 'rgb(238, 196, 255)',
      imgSrc: './cards/motion.svg',
      title: 'Motion Design',
      description: 'Bringing designs to life through animations and interactions. Perfect for websites, apps, and promotional content.',
      link: '/services'
    },
    {
      bgColor: 'rgb(189, 255, 233)',
      imgSrc: './cards/logo.svg',
      title: 'Logo Design',
      description: 'Designing unique logos that resonate with your brand identity. We create logos that stand out and communicate your values.',
      link: '/services'
    }
  ];
}
