import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { Meta } from '@angular/platform-browser';
import { WorkItems } from '../../components/work/work.component';

@Component({
  selector: 'app-work',
  standalone: true,
  imports: [NgFor],
  templateUrl: './work.component.html',
  styleUrl: './work.component.sass',
})
export class WorkComponent implements OnInit {
  categories = ['All', 'UI/UX', 'Motion', 'Logo', 'Website', 'Apps'];
  activeCategory = 'All';

  workItems: WorkItems = {
    'UI/UX': [
      { imgSrc: './work/eventflow-ui-ux-project', alt: 'UI/UX design project for EventFlow' },
      { imgSrc: './work/devstash-ui-ux-project', alt: 'UI/UX design project for DevStash' },
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
      { imgSrc: './work/airmeal-website', alt: 'Airemeal website for drone delivery service' }
    ],
    'Apps': [
      { imgSrc: './work/eventflow-ui-ux-project', alt: 'EventFlow app showcasing user interface and features' },
    ]
  };

  latestProjects = [
    {
      title: 'Caderneta AAC',
      imgSrc: './work/caderneta-aac-discord-football-card-bot',
      description: 'A Portuguese Discord bot game that lets users collect and complete a digital collection of football player cards.',
      link: 'https://github.com/prakhar-5447/caderneta-aac',
      ariaLabel: 'View Caderneta AAC repository on GitHub'
    },
  ];

  caseStudies = [
    {
      title: 'Eventflow',
      description: 'Eventflow is an event management app enabling users to discover nearby events, register, and participate. This redesign for XYZ Corp led to a 50% increase in conversions and improved user experience.',
      link: 'https://dribbble.com/shots/25114789-Eventflow?utm_source=Clipboard_Shot&utm_campaign=pixel8cloud&utm_content=Eventflow&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=pixel8cloud&utm_content=Eventflow&utm_medium=Social_Share',
      imgSrc: './casestudy/eventflow-ui-ux-project-case-study',
      alt: 'Eventflow App Case Study'
    },
  ];


  constructor(private meta: Meta) { }

  ngOnInit(): void {
    // Main SEO Tags
    this.meta.updateTag({ name: 'description', content: 'Explore Pixel8Cloud’s project portfolio, showcasing innovative designs, successful web and app developments, and case studies.' });
    this.meta.updateTag({ name: 'keywords', content: 'Pixel8Cloud portfolio, case studies, web development projects, app design, digital design work' });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });

    // Open Graph Tags
    this.meta.updateTag({ property: 'og:title', content: 'Our Work | Pixel8Cloud - Portfolio and Case Studies' });
    this.meta.updateTag({ property: 'og:description', content: 'See Pixel8Cloud’s portfolio of projects in web and app development and digital design, showcasing creativity and technical expertise.' });
    this.meta.updateTag({ property: 'og:image', content: 'https://pixel8cloud.studio/pixel8cloud-design-development-agency-logo_100x100.webp' });
    this.meta.updateTag({ property: 'og:url', content: 'https://pixel8cloud.studio/work' });
  }

  setActiveCategory(category: string) {
    this.activeCategory = category;
  }

  getActiveWorkItems() {
    if (this.activeCategory === 'All') {
      return Object.values(this.workItems).flat();
    } else {
      return this.workItems[this.activeCategory] || [];
    }
  }
}
