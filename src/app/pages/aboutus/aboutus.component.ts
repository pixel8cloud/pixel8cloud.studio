import { Component, ElementRef, Inject, PLATFORM_ID, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import { isPlatformBrowser, NgFor } from '@angular/common';
import { Meta } from '@angular/platform-browser';
@Component({
  selector: 'app-aboutus',
  standalone: true,
  imports: [NgFor],
  templateUrl: './aboutus.component.html',
  styleUrl: './aboutus.component.sass'
})
export class AboutusComponent implements AfterViewInit, OnInit {
  teamMembers = [
    {
      name: 'Prakhar Sahu',
      role: 'Founder and Lead Developer',
      description: 'With a strong vision for innovation, Prakhar leads Pixel8Cloud\'s projects with dedication and expertise, ensuring each project achieves the highest standards of quality and impact.',
      imgSrc: './team/prakhar-sahu-founder-pixel8cloud'
    },
    {
      name: 'Pratham Sahu',
      role: 'Co-Founder and Backend Developer',
      description: 'As Co-Founder and Backend Developer, Pratham specializes in building robust backend systems and ensuring seamless integration for optimal performance and user experience.',
      imgSrc: './team/pratham-sahu-cofounder-pixel8cloud'
    },
  ];

  @ViewChild('section') section!: ElementRef;
  @ViewChild('title') title!: ElementRef;
  @ViewChild('cards') cards!: ElementRef;
  constructor(@Inject(PLATFORM_ID) private platformId: object, private meta: Meta) { }
  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.createObserver();
    }
  }

  ngOnInit() {
    // Main SEO Tags for About Us
    this.meta.updateTag({ name: 'description', content: 'Learn about Pixel8Cloud, our vision, team, and commitment to delivering exceptional design and development solutions.' });
    this.meta.updateTag({ name: 'keywords', content: 'about us, Pixel8Cloud, design agency, development agency, our team' });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });

    // Open Graph Tags for About Us
    this.meta.updateTag({ property: 'og:title', content: 'About Us | Pixel8Cloud' });
    this.meta.updateTag({ property: 'og:description', content: 'Discover our story, vision, and the talented team behind Pixel8Cloud.' });
    this.meta.updateTag({ property: 'og:image', content: '/team/prakhar.jpeg' }); // Example image
    this.meta.updateTag({ property: 'og:url', content: 'https://pixel8cloud.studio/about' });
  }

  createObserver() {
    const observer_section = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer_section.disconnect();
        }
      });
    });
    observer_section.observe(this.section.nativeElement);

    const observer_title = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer_title.disconnect();
        }
      });
    });
    observer_title.observe(this.title.nativeElement);

    const observer_cards = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const cardItems = this.cards.nativeElement.querySelectorAll('.team-member')
          cardItems.forEach((i: Element) => {
            i.classList.add('in-view');
          });
          observer_cards.disconnect();
        }
      });
    });
    observer_cards.observe(this.cards.nativeElement);
  }
}
