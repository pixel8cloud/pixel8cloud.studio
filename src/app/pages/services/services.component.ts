import { Component, Inject, OnInit, Renderer2 } from '@angular/core';
import { DOCUMENT, NgClass, NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [NgClass, NgFor, NgIf, FormsModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.sass'
})
export class ServicesComponent implements OnInit {
  steps = [
    {
      title: 'Connect',
      description:
        'Kickstart your journey with us by sharing your project ideas, goals, and requirements. This step sets the foundation for a strong partnership, aligning our strategies with your vision to ensure we meet your expectations from the outset.'
    },
    {
      title: 'Discover',
      description:
        'Dive into your project\'s potential during a collaborative session. We\'ll explore your ideas, understand your challenges, and craft tailored solutions that align with your timeline and budget, paving the way for success.'
    },
    {
      title: 'Design',
      description:
        'Transforming ideas into reality begins here. We create wireframes, prototypes, and designs that capture your vision, ensuring user-friendly, visually appealing outcomes that resonate with your audience.'
    },
    {
      title: 'Develop',
      description:
        'With designs finalized, our developers bring your project to life using cutting-edge technologies. From robust functionality to seamless scalability, every aspect is carefully built and rigorously tested.'
    },
    {
      title: 'Deploy',
      description:
        'Launch day! We handle every detail of the deployment process to ensure your project goes live smoothly and is fully optimized for your users. Post-launch monitoring ensures immediate support if needed.'
    },
    {
      title: 'Support',
      description:
        'Our journey doesn\'t end at launch. We provide ongoing support, updates, and enhancements to keep your project secure, relevant, and continuously aligned with your evolving business goals.'
    }
  ];

  cardsData = [
    {
      bgColor: 'rgb(255, 171, 171)',
      imgSrc: './cards/uiux.svg',
      title: 'UI/UX Design',
      description: 'We craft intuitive and user-friendly interfaces that ensure seamless interactions and elevate user satisfaction.',
      link: '/services'
    },
    {
      bgColor: 'rgb(189, 231, 255)',
      imgSrc: './cards/fullstack.svg',
      title: 'Full Stack Development',
      description: 'Delivering scalable and robust web solutions tailored to meet your business needs, from frontend to backend.',
      link: '/services'
    },
    {
      bgColor: 'rgb(238, 196, 255)',
      imgSrc: './cards/motion.svg',
      title: 'Motion Design',
      description: 'Enhancing your digital presence with captivating animations that grab attention and drive engagement.',
      link: '/services'
    },
    {
      bgColor: 'rgb(189, 255, 233)',
      imgSrc: './cards/logo.svg',
      title: 'Logo Design',
      description: 'Creating impactful logos that embody your brand’s personality and leave a lasting impression.',
      link: '/services'
    }
  ];

  constructor(private meta: Meta, private renderer: Renderer2, @Inject(DOCUMENT) private document: Document) { }

  ngOnInit() {
    // Main SEO Tags for Services
    this.meta.updateTag({ name: 'description', content: 'Explore our services at Pixel8Cloud, including UI/UX design, full-stack development, motion design, and logo design.' });
    this.meta.updateTag({ name: 'keywords', content: 'services, Pixel8Cloud, UI/UX design, full-stack development, motion design, logo design' });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });
    this.meta.updateTag({ name: 'author', content: 'Pixel8Cloud Studio' });

    // Open Graph Tags for Services
    this.meta.updateTag({ property: 'og:title', content: 'Services | Pixel8Cloud' });
    this.meta.updateTag({ property: 'og:description', content: 'Our design and development services are tailored to elevate your business. Discover what we offer.' });
    this.meta.updateTag({ property: 'og:image', content: 'https://pixel8cloud.studio/pixel8cloud-design-development-agency-logo_100x100.webp' });
    this.meta.updateTag({ property: 'og:url', content: 'https://pixel8cloud.studio/services' });

    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Pixel8Cloud",
      "url": "https://pixel8cloud.studio/services",
      "logo": "https://pixel8cloud.studio/pixel8cloud-design-development-agency-logo_100x100.webp",
      "description": "Pixel8Cloud is a creative design and development agency specializing in web, app, and logo design.",
      "mainEntityOfPage": "https://pixel8cloud.studio/services",
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
      "service": [
        {
          "@type": "Service",
          "name": "UI/UX Design",
          "description": "Creative UI/UX design services to bring your digital products to life.",
          "priceCurrency": "USD",
          "priceRange": "$300 - $2000",
          "serviceType": "Design",
          "areaServed": "IN",
          "availableLanguage": "English"
        },
        {
          "@type": "Service",
          "name": "Frontend Development",
          "description": "Building fast, responsive, and scalable front-end solutions.",
          "priceCurrency": "USD",
          "priceRange": "$500 - $4000",
          "serviceType": "Development",
          "areaServed": "IN",
          "availableLanguage": "English"
        },
        {
          "@type": "Service",
          "name": "Full-Stack Development",
          "description": "End-to-end development of scalable web applications.",
          "priceCurrency": "USD",
          "priceRange": "$1000 - $5000",
          "serviceType": "Development",
          "areaServed": "IN",
          "availableLanguage": "English"
        },
        {
          "@type": "Service",
          "name": "Motion Design",
          "description": "High-quality animation and motion graphics for your brand.",
          "priceCurrency": "USD",
          "priceRange": "$800 - $3500",
          "serviceType": "Design",
          "areaServed": "IN",
          "availableLanguage": "English"
        },
        {
          "@type": "Service",
          "name": "Logo Design",
          "description": "Unique and creative logo design to represent your brand identity.",
          "priceCurrency": "USD",
          "priceRange": "$200 - $1500",
          "serviceType": "Design",
          "areaServed": "IN",
          "availableLanguage": "English"
        }
      ]
    };
  
    // Add the structured data to the head
    this.addStructuredData(structuredData);
  }

  addStructuredData(data: object) {
    const script = this.renderer.createElement('script');
    this.renderer.setAttribute(script, 'type', 'application/ld+json');
    this.renderer.appendChild(script, this.renderer.createText(JSON.stringify(data)));
    this.renderer.appendChild(this.document.head, script);
  }


  activeStep = 0;

  setActiveStep(index: number) {
    this.activeStep = index;
  }

  isINR = false; // False means USD, true means INR
  selectedCurrency = 'USD';
  exchangeRate = 83; // 1 USD = 83 INR


  chargesPerHour = {
    uiDesign: 3,
    frontendDevelopment: 4,
    appDevelopment: 7,
    backendDevelopment: 5,
    fullStackDevelopment: 10,
    fullStackAppDevelopment: 14,
  };

  weeklyCost = {
    uiDesign: 105,
    frontendDevelopment: 140,
    appDevelopment: 245,
    backendDevelopment: 175,
    fullStackDevelopment: 350,
    fullStackAppDevelopment: 490,
  };

  monthlyCost = {
    uiDesign: 450,
    frontendDevelopment: 600,
    appDevelopment: 1050,
    backendDevelopment: 750,
    fullStackDevelopment: 1500,
    fullStackAppDevelopment: 2100,
  };


  toggleCurrency() {
    if (this.isINR) {
      this.selectedCurrency = 'INR';
      this.convertToINR();
    } else {
      this.selectedCurrency = 'USD';
      this.convertToUSD();
    }
  }

  convertToINR() {
    this.chargesPerHour.uiDesign = parseInt((3 * this.exchangeRate).toFixed(2));
    this.chargesPerHour.frontendDevelopment = parseInt((4 * this.exchangeRate).toFixed(2));
    this.chargesPerHour.appDevelopment = parseInt((7 * this.exchangeRate).toFixed(2));
    this.chargesPerHour.backendDevelopment = parseInt((5 * this.exchangeRate).toFixed(2));
    this.chargesPerHour.fullStackDevelopment = parseInt((10 * this.exchangeRate).toFixed(2));
    this.chargesPerHour.fullStackAppDevelopment = parseInt((14 * this.exchangeRate).toFixed(2));

    this.weeklyCost.uiDesign = parseInt((105 * this.exchangeRate).toFixed(2));
    this.weeklyCost.frontendDevelopment = parseInt((140 * this.exchangeRate).toFixed(2));
    this.weeklyCost.appDevelopment = parseInt((245 * this.exchangeRate).toFixed(2));
    this.weeklyCost.backendDevelopment = parseInt((175 * this.exchangeRate).toFixed(2));
    this.weeklyCost.fullStackDevelopment = parseInt((350 * this.exchangeRate).toFixed(2));
    this.weeklyCost.fullStackAppDevelopment = parseInt((490 * this.exchangeRate).toFixed(2));

    this.monthlyCost.uiDesign = parseInt((450 * this.exchangeRate).toFixed(2));
    this.monthlyCost.frontendDevelopment = parseInt((600 * this.exchangeRate).toFixed(2));
    this.monthlyCost.appDevelopment = parseInt((1050 * this.exchangeRate).toFixed(2));
    this.monthlyCost.backendDevelopment = parseInt((750 * this.exchangeRate).toFixed(2));
    this.monthlyCost.fullStackDevelopment = parseInt((1500 * this.exchangeRate).toFixed(2));
    this.monthlyCost.fullStackAppDevelopment = parseInt((2100 * this.exchangeRate).toFixed(2));
  }
  convertToUSD() {
    this.chargesPerHour.uiDesign = 3;
    this.chargesPerHour.frontendDevelopment = 4;
    this.chargesPerHour.appDevelopment = 7;
    this.chargesPerHour.backendDevelopment = 5;
    this.chargesPerHour.fullStackDevelopment = 10;
    this.chargesPerHour.fullStackAppDevelopment = 14;

    this.weeklyCost.uiDesign = 105;
    this.weeklyCost.frontendDevelopment = 140;
    this.weeklyCost.appDevelopment = 245;
    this.weeklyCost.backendDevelopment = 175;
    this.weeklyCost.fullStackDevelopment = 350;
    this.weeklyCost.fullStackAppDevelopment = 490;

    this.monthlyCost.uiDesign = 450;
    this.monthlyCost.frontendDevelopment = 600;
    this.monthlyCost.appDevelopment = 1050;
    this.monthlyCost.backendDevelopment = 750;
    this.monthlyCost.fullStackDevelopment = 1500;
    this.monthlyCost.fullStackAppDevelopment = 2100;
  }
}
