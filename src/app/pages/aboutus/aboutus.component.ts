import { Component, Inject, OnInit, Renderer2 } from '@angular/core';
import { DOCUMENT, NgFor } from '@angular/common';
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

  constructor(private meta: Meta, private renderer: Renderer2, @Inject(DOCUMENT) private document: Document) { }
  ngOnInit() {
    // Main SEO Tags for About Us
    this.meta.updateTag({ name: 'description', content: 'Learn about Pixel8Cloud, our vision, team, and commitment to delivering exceptional design and development solutions.' });
    this.meta.updateTag({ name: 'keywords', content: 'about us, Pixel8Cloud, design agency, development agency, our team' });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });
    this.meta.updateTag({ name: 'author', content: 'Pixel8Cloud Studio' });

    // Open Graph Tags for About Us
    this.meta.updateTag({ property: 'og:title', content: 'About Us | Pixel8Cloud' });
    this.meta.updateTag({ property: 'og:description', content: 'Discover our story, vision, and the talented team behind Pixel8Cloud.' });
    this.meta.updateTag({ property: 'og:image', content: 'https://pixel8cloud.studio/pixel8cloud-design-development-agency-logo_100x100.webp' });
    this.meta.updateTag({ property: 'og:url', content: 'https://pixel8cloud.studio/about' });

    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Pixel8Cloud",
      "url": "https://pixel8cloud.studio/about",
      "logo": "https://pixel8cloud.studio/pixel8cloud-design-development-agency-logo_100x100.webp",
      "description": "Pixel8Cloud is a creative design and development agency specializing in web, app, and logo design.",
      "mainEntityOfPage": "https://pixel8cloud.studio/about",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+9826412657",
        "contactType": "owner",
        "areaServed": "IN",
        "availableLanguage": "English"
      },
      "sameAs": [
        "https://instagram.com/pixel8cloud",
        "https://linkedin.com/company/pixel8cloud",
        "https://youtube.com/@pixel8cloud",
        "https://discord.gg/9XXaRHPvkd",
        "https://github.com/pixel8cloud"
      ],
      "team": this.teamMembers.map(member => ({
        "@type": "Person",
        "name": member.name,
        "role": member.role,
        "description": member.description,
        "image": "https://pixel8cloud.studio/" + member.imgSrc.replace('./', '')
      }))
    };

    // Add structured data to the head
    this.addStructuredData(structuredData);
  }

  addStructuredData(data: object) {
    const script = this.renderer.createElement('script');
    this.renderer.setAttribute(script, 'type', 'application/ld+json');
    this.renderer.appendChild(script, this.renderer.createText(JSON.stringify(data)));
    this.renderer.appendChild(this.document.head, script);
  }
}
