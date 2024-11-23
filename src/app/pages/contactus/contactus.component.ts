import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit, Renderer2 } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-contactus',
  standalone: true,
  imports: [],
  templateUrl: './contactus.component.html',
  styleUrl: './contactus.component.sass'
})
export class ContactusComponent implements OnInit {
  constructor(private meta: Meta, private renderer: Renderer2, @Inject(DOCUMENT) private document: Document) { }

  ngOnInit() {
    // Main SEO Tags for Contact Us
    this.meta.updateTag({ name: 'description', content: 'Contact Pixel8Cloud to discuss your project needs. We specialize in web development, branding, and digital design solutions.' });
    this.meta.updateTag({ name: 'keywords', content: 'contact us, Pixel8Cloud, web development, branding, digital design' });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });
    this.meta.updateTag({ name: 'author', content: 'Pixel8Cloud Studio' });

    // Open Graph Tags for Contact Us
    this.meta.updateTag({ property: 'og:title', content: 'Contact Us | Pixel8Cloud' });
    this.meta.updateTag({ property: 'og:description', content: 'Get in touch with Pixel8Cloud for innovative web development and design solutions.' });
    this.meta.updateTag({ property: 'og:image', content: 'https://pixel8cloud.studio/pixel8cloud-design-development-agency-logo_100x100.webp' });
    this.meta.updateTag({ property: 'og:url', content: 'https://pixel8cloud.studio/contact' });

    // Structured Data for the Contact Us Page
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      "name": "Contact Us | Pixel8Cloud",
      "url": "https://pixel8cloud.studio/contact",
      "description": "Contact Pixel8Cloud to discuss your project needs. We specialize in web development, branding, and digital design solutions.",
      "mainEntityOfPage": "https://pixel8cloud.studio/contact",
      "image": "https://pixel8cloud.studio/pixel8cloud-design-development-agency-logo_100x100.webp",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+9826412657",
        "contactType": "owner",
        "areaServed": "IN",
        "availableLanguage": "English"
      },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Q. No. 20 Deepti Vihar Colony, Janjgir",
        "addressLocality": "Janjgir",
        "addressRegion": "Chhattisgarh",
        "postalCode": "495668",
        "addressCountry": "India"
      },
      "sameAs": [
        "https://instagram.com/pixel8cloud",
        "https://linkedin.com/company/pixel8cloud",
        "https://youtube.com/@pixel8cloud",
        "https://discord.gg/9XXaRHPvkd",
        "https://github.com/pixel8cloud"
      ]
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
