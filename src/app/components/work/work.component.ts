import { NgFor } from '@angular/common';
import { Component, } from '@angular/core';
import { RouterLink } from '@angular/router';

interface WorkItem {
  imgSrc: string;
  alt: string;
}

export interface WorkItems {
  [category: string]: WorkItem[];
}

@Component({
  selector: 'app-work',
  standalone: true,
  imports: [NgFor, RouterLink],
  templateUrl: './work.component.html',
  styleUrl: './work.component.sass'
})
export class WorkComponent {
  categories = ['UI/UX', 'Motion', 'Logo', 'Website', 'Apps'];
  activeCategory = 'UI/UX';

  workItems: WorkItems = {
    'UI/UX': [
      { imgSrc: './work/eventflow-ui-ux-project', alt: 'UI/UX design project for EventFlow' },
      { imgSrc: './work/devstash-ui-ux-project', alt: 'UI/UX design project for DevStash' },
      { imgSrc: './work/mealmate-ui-ux-project', alt: 'UI/UX design project for MealMate' },
    ],
    // 'Motion': [
    //   { imgSrc: './work/motion-design-project', alt: 'Motion design project showcasing animation techniques' },
    // ],
    // 'Logo': [
    //   { imgSrc: './work/logo-design-pixel8cloud', alt: 'Logo design for Pixel8Cloud agency' },
    // ],
    'Website': [
      { imgSrc: './work/pixel8cloud-website', alt: 'Website design for Pixel8Cloud' },
      { imgSrc: './work/portfolio-website', alt: 'Portfolio website showcasing various projects' },
      { imgSrc: './work/motion-io-website', alt: 'Motion.io website' },
      { imgSrc: './work/airmeal-website', alt: 'Airemeal website for drone delivery service' },
      { imgSrc: './work/sweetandcrave-website', alt: 'Sweet and Crave Backery website' }
    ],
    'Apps': [
      { imgSrc: './work/eventflow-ui-ux-project', alt: 'EventFlow app showcasing user interface and features' },
    ]
  };

  setActiveCategory(category: string) {
    this.activeCategory = category;
  }

  getActiveWorkItems() {
    return this.workItems[this.activeCategory];
  }
}
