import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { Meta } from '@angular/platform-browser';
@Component({
  selector: 'app-aboutus',
  standalone: true,
  imports: [NgFor],
  templateUrl: './aboutus.component.html',
  styleUrl: './aboutus.component.sass'
})
export class AboutusComponent implements OnInit {
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

  constructor(private meta: Meta) { }
  ngOnInit() {
    // Main SEO Tags for About Us
    this.meta.updateTag({ name: 'description', content: 'Learn about Pixel8Cloud, our vision, team, and commitment to delivering exceptional design and development solutions.' });
    this.meta.updateTag({ name: 'keywords', content: 'about us, Pixel8Cloud, design agency, development agency, our team' });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });

    // Open Graph Tags for About Us
    this.meta.updateTag({ property: 'og:title', content: 'About Us | Pixel8Cloud' });
    this.meta.updateTag({ property: 'og:description', content: 'Discover our story, vision, and the talented team behind Pixel8Cloud.' });
    this.meta.updateTag({ property: 'og:image', content: 'https://pixel8cloud.studio/pixel8cloud-design-development-agency-logo_100x100.webp' });
    this.meta.updateTag({ property: 'og:url', content: 'https://pixel8cloud.studio/about' });
  }
}
