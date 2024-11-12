import { Component, OnInit } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero.component';
import { AboutComponent } from '../../components/about/about.component';
import { WorkComponent } from '../../components/work/work.component';
import { TestimonialsComponent } from '../../components/testimonials/testimonials.component';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent, AboutComponent, WorkComponent, TestimonialsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.sass'
})
export class HomeComponent implements OnInit {
  constructor(private meta: Meta) { }

  ngOnInit() {
    // Main SEO Tags
    this.meta.updateTag({ name: 'description', content: 'Pixel8Cloud - Your creative design and development agency. Explore our services in web, app, and logo design.' });
    this.meta.updateTag({ name: 'keywords', content: 'design, development, web development, app development, logo design, creative agency' });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });

    // Open Graph Tags
    this.meta.updateTag({ property: 'og:title', content: 'Home | Pixel8Cloud' });
    this.meta.updateTag({ property: 'og:description', content: 'Discover Pixel8Cloud, where creativity meets technology. We specialize in web and app development, and logo design.' });
    this.meta.updateTag({ property: 'og:image', content: 'https://pixel8cloud.studio/pixel8cloud-design-development-agency-logo_100x100.webp' });
    this.meta.updateTag({ property: 'og:url', content: 'https://pixel8cloud.studio' });

    // Structured Data for Social Links
    this.addSocialLinksMetaTags();
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
