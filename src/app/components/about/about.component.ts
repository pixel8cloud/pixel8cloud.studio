import { Component, ElementRef, Inject, PLATFORM_ID, ViewChild, AfterViewInit } from '@angular/core';
import { isPlatformBrowser, NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterLink, NgFor],
  templateUrl: './about.component.html',
  styleUrl: './about.component.sass'
})
export class AboutComponent implements AfterViewInit {
  ClientsCount = 0;
  ProjectsCount = 0;
  HoursCount = 0;

  targetClients = 2;
  targetProjects = 2;
  targetHours = 25;

  duration = 2000;

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

  @ViewChild('aboutSection') aboutSection!: ElementRef;
  @ViewChild('card', { static: false }) card!: ElementRef;
  @ViewChild('cards') cards!: ElementRef;
  constructor(@Inject(PLATFORM_ID) private platformId: object) { }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.createObserver();
    }
  }

  createObserver() {
    const observer_stats = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          this.startCounting();
          observer_stats.disconnect();
        }
      });
    });
    observer_stats.observe(this.aboutSection.nativeElement);

    const observer_cards = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.cards.nativeElement.classList.add('in-view');
          observer_cards.disconnect();
        }
      });
    }, {
      threshold: 0.1
    });

    observer_cards.observe(this.card.nativeElement);
  }

  startCounting() {
    this.animateCount(this.targetClients, 'ClientsCount');
    this.animateCount(this.targetProjects, 'ProjectsCount');
    this.animateCount(this.targetHours, 'HoursCount');
  }

  animateCount(targetValue: number, property: 'ClientsCount' | 'ProjectsCount' | 'HoursCount') {
    const stepTime = Math.abs(Math.floor(this.duration / targetValue));

    const increment = () => {
      if (this[property] < targetValue) {
        this[property]++;
        setTimeout(increment, stepTime);
      }
    };

    increment();
  }
}
