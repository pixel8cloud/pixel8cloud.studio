import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
@Component({
  selector: 'app-contactus',
  standalone: true,
  imports: [],
  templateUrl: './contactus.component.html',
  styleUrl: './contactus.component.sass'
})
export class ContactusComponent implements OnInit {
  constructor(private meta: Meta) { }

  ngOnInit() {
    // Main SEO Tags for Contact Us
    this.meta.updateTag({ name: 'description', content: 'Contact Pixel8Cloud to discuss your project needs. We specialize in web development, branding, and digital design solutions.' });
    this.meta.updateTag({ name: 'keywords', content: 'contact us, Pixel8Cloud, web development, branding, digital design' });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });

    // Open Graph Tags for Contact Us
    this.meta.updateTag({ property: 'og:title', content: 'Contact Us | Pixel8Cloud' });
    this.meta.updateTag({ property: 'og:description', content: 'Get in touch with Pixel8Cloud for innovative web development and design solutions.' });
    this.meta.updateTag({ property: 'og:image', content: 'https://pixel8cloud.studio/pixel8cloud-design-development-agency-logo_100x100.webp' });
    this.meta.updateTag({ property: 'og:url', content: 'https://pixel8cloud.studio/contact' });
  }
}
