import { DOCUMENT, NgFor, NgIf } from '@angular/common';
import { Component, Inject, Renderer2 } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.sass'
})
export class FaqComponent {
  faqs = [
    { question: "What services does Pixel8Cloud offer?", answer: "We offer a wide range of services, including web development, branding, digital design solutions, UI/UX design, and application development.", open: false },
    { question: "How can I contact Pixel8Cloud?", answer: "You can reach us through our Contact Us page or email us at info@pixel8cloud.studio.", open: false },
    { question: "Do you work with startups?", answer: "Yes, we specialize in helping startups create impactful online presences and scalable digital solutions tailored to their business needs.", open: false },
    { question: "What is the typical timeline for a project?", answer: "The timeline varies based on the scope and complexity of the project. For example, a small website might take 2–4 weeks, while a more complex app or branding solution could take 6–12 weeks.", open: false },
    { question: "Do you offer revisions on designs and projects?", answer: "Yes, we include a set number of revisions in our packages to ensure the final product meets your expectations.", open: false },
    { question: "Can you help with website maintenance after launch?", answer: "Absolutely! We provide ongoing website maintenance and support services to ensure your website remains secure, updated, and optimized.", open: false },
    { question: "Do you provide custom design solutions?", answer: "Yes, all our designs are custom-made to suit your brand identity and specific requirements.", open: false },
    { question: "What technologies do you use?", answer: "We use a variety of modern technologies, including Angular, React, Node.js, MongoDB, and popular design tools like Figma and Adobe XD.", open: false },
    { question: "Can you help with SEO and digital marketing?", answer: "Yes, we provide SEO optimization, keyword research, and basic digital marketing strategies to help you rank higher in search results.", open: false },
    { question: "What industries do you specialize in?", answer: "We have experience working with various industries, including technology, e-commerce, healthcare, and education.", open: false },
    { question: "What is the cost of a project?", answer: "Our pricing depends on the project's complexity, scope, and timeline. Contact us for a detailed quote tailored to your requirements.", open: false },
    { question: "Do you offer branding services?", answer: "Yes, we create complete branding solutions, including logos, color schemes, typography, and brand guidelines.", open: false },
    { question: "Can you build e-commerce websites?", answer: "Yes, we specialize in building scalable e-commerce websites with features like payment integration, inventory management, and user-friendly interfaces.", open: false },
    { question: "Do you work on a freelance or full-time basis?", answer: "We operate as a personal branding and freelance agency, delivering high-quality work on a project-by-project basis.", open: false },
    { question: "How do I start a project with Pixel8Cloud?", answer: "Starting a project is easy! Contact us through the form on our Contact Us page, and we’ll guide you through the next steps.", open: false }
  ];

  constructor(private meta: Meta, private renderer: Renderer2, @Inject(DOCUMENT) private document: Document) { }

  ngOnInit(): void {
    // Main SEO Tags
    this.meta.updateTag({ name: 'description', content: 'Find answers to the most frequently asked questions about Pixel8Cloud.' });
    this.meta.updateTag({ name: 'keywords', content: 'Pixel8Cloud, FAQs, web development, branding, digital design' });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });
    this.meta.updateTag({ name: 'author', content: 'Pixel8Cloud Studio' });

    // Open Graph Tags
    this.meta.updateTag({ property: 'og:title', content: 'FAQs | Pixel8Cloud ' });
    this.meta.updateTag({ property: 'og:description', content: 'Explore our FAQ section to learn more about our services and technologies.' });
    this.meta.updateTag({ property: 'og:image', content: 'https://pixel8cloud.studio/pixel8cloud-design-development-agency-logo_100x100.webp' });
    this.meta.updateTag({ property: 'og:url', content: 'https://pixel8cloud.studio/faqs' });

    // Structured Data for the "Work" Page Projects
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "CreativeWork",
      "name": "Pixel8Cloud Portfolio",
      "url": "https://pixel8cloud.studio/faqs",
      "description": "Find answers to the most frequently asked questions about Pixel8Cloud.",
      "mainEntityOfPage": "https://pixel8cloud.studio/faqs",
      "image": "https://pixel8cloud.studio/pixel8cloud-design-development-agency-logo_100x100.webp",
      "mainEntity": this.faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
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

  toggleAnswer(index: number) {
    this.faqs[index].open = !this.faqs[index].open;
  }
}
