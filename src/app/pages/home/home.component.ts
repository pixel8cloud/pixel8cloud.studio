import { Component, OnInit, Renderer2, Inject } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero.component';
import { AboutComponent } from '../../components/about/about.component';
import { WorkComponent } from '../../components/work/work.component';
import { TestimonialsComponent } from '../../components/testimonials/testimonials.component';
import { Meta } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent, AboutComponent, WorkComponent, TestimonialsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.sass'
})
export class HomeComponent implements OnInit {
  constructor(private meta: Meta, private renderer: Renderer2, @Inject(DOCUMENT) private document: Document) { }

  ngOnInit() {
    // Main SEO Tags
    this.meta.updateTag({ name: 'description', content: 'Your creative design and development agency. Explore our services in web, app, and logo design.' });
    this.meta.updateTag({ name: 'keywords', content: 'design, development, web development, app development, logo design, creative agency' });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });
    this.meta.updateTag({ name: 'author', content: 'Pixel8Cloud Studio' });
    // Open Graph Tags
    this.meta.updateTag({ property: 'og:title', content: 'Home | Pixel8Cloud' });
    this.meta.updateTag({ property: 'og:description', content: 'Discover Pixel8Cloud, where creativity meets technology. We specialize in web and app development, and logo design.' });
    this.meta.updateTag({ property: 'og:image', content: 'https://pixel8cloud.studio/pixel8cloud-design-development-agency-logo_100x100.webp' });
    this.meta.updateTag({ property: 'og:url', content: 'https://pixel8cloud.studio' });

    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Pixel8Cloud",
      "url": "https://pixel8cloud.studio",
      "logo": "https://pixel8cloud.studio/pixel8cloud-design-development-agency-logo_100x100.webp",
      "description": "Pixel8Cloud is a creative design and development agency specializing in web, app, and logo design.",
      "mainEntityOfPage": "https://pixel8cloud.studio",
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
      ]
    };

    // Add the structured data to the head
    this.addStructuredData(structuredData);

    // Structured Data for Social Links
    this.addSocialLinksMetaTags();
  }

  addStructuredData(data: object) {
    const script = this.renderer.createElement('script');
    this.renderer.setAttribute(script, 'type', 'application/ld+json');
    this.renderer.appendChild(script, this.renderer.createText(JSON.stringify(data)));
    this.renderer.appendChild(this.document.head, script);
  }

  private addSocialLinksMetaTags() {
    const socialLinks = [
      { name: 'Instagram', url: 'https://instagram.com/pixel8cloud' },
      { name: 'LinkedIn', url: 'https://linkedin.com/company/pixel8cloud' },
      { name: 'YouTube', url: 'https://youtube.com/@pixel8cloud' },
      { name: 'Discord', url: 'https://discord.gg/9XXaRHPvkd' },
      { name: 'GitHub', url: 'https://github.com/pixel8cloud' }
    ];

    socialLinks.forEach(link => {
      this.meta.updateTag({ property: 'sameAs', content: link.url });
    });
  }
}
