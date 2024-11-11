import { NgFor } from '@angular/common';
import { Component, ElementRef, Inject, PLATFORM_ID, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [NgFor, RouterLink],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.sass'
})
export class TestimonialsComponent {
  testimonials = [
    {
      quote: "Working with this team was an absolute pleasure. They delivered outstanding results that exceeded our expectations. The team was incredibly responsive and understood our needs perfectly. We couldn't be happier with the outcome.",
      name: "John Doe",
      role: "CEO, Company XYZ",
      image: "./pixel8cloud-design-development-agency-logo"
    },
    {
      quote: "Their attention to detail and commitment to quality is unparalleled. We highly recommend their services. Working with this team was an absolute pleasure. They delivered outstanding results that exceeded our expectations.",
      name: "Jane Smith",
      role: "Product Manager, ABC Corp",
      image: "./pixel8cloud-design-development-agency-logo"
    },
    {
      quote: "The team was incredibly responsive and understood our needs perfectly. We couldn't be happier with the outcome. Their attention to detail and commitment to quality is unparalleled. We highly recommend their services.",
      name: "Michael Lee",
      role: "CTO, Startup Inc.",
      image: "./pixel8cloud-design-development-agency-logo"
    },
  ];
  constructor(@Inject(PLATFORM_ID) private platformId: object) { }

  currentSlideIndex = 0;

  @ViewChild('slidesContainer', { static: true }) slidesContainer!: ElementRef;

 scrollToSlide(index: number) {
    const container = this.slidesContainer.nativeElement;
    const slide = container.querySelector('.testimonial');
    const slideWidth = slide.clientWidth;

    // Get the computed gap between slides
    const slideGap = parseInt(getComputedStyle(container).columnGap || '0', 10);

    // Calculate the target scroll position, including the gap
    const targetScrollPosition = index * (slideWidth + slideGap);
    
    // Calculate the difference between the current scroll position and the target position
    const currentScrollPosition = container.scrollLeft;
    const scrollDistance = targetScrollPosition - currentScrollPosition;

    container.scrollBy({
      left: scrollDistance,
      behavior: 'smooth'
    });

    this.currentSlideIndex = index;
}

}
