import { Component, OnInit } from '@angular/core';
import { NgClass, NgFor, NgIf } from '@angular/common';
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
        'Your journey begins by reaching out to us. We encourage you to share your project ideas, goals, and any specific requirements you may have. Our team will review your input and prepare to connect with you, ensuring we understand your vision thoroughly. This foundational step is crucial for setting the stage for a successful partnership, allowing us to align our strategies with your expectations and objectives. We aim to provide a seamless communication experience, ensuring that your needs are prioritized from the very start of the project.'
    },
    {
      title: 'Discover',
      description:
        'In our first meeting, we dive deep into your project requirements. This session is designed to facilitate an open dialogue where we can explore your ideas, understand your vision, and discuss any challenges you may face. We take the time to brainstorm potential solutions that align with your budget and timeline. This collaborative approach ensures that we have a comprehensive understanding of your needs, enabling us to tailor our services effectively. By the end of this meeting, we will outline the next steps in our process, paving the way for a successful project.'
    },
    {
      title: 'Design',
      description:
        'Following the discovery session, we enter the design phase where our team transforms your ideas into tangible concepts. We develop wireframes and prototypes that visualize the layout, functionality, and user experience of your project. Our design process incorporates user feedback to ensure that the end result meets your expectations. We focus on creating intuitive and aesthetically pleasing designs that resonate with your target audience. This phase is critical, as it allows for adjustments before development begins, ultimately saving time and resources while ensuring alignment with your vision.'
    },
    {
      title: 'Development',
      description:
        'With the design approved, our development team begins the coding process. We utilize the latest technologies and frameworks to build a robust and responsive product. Throughout this phase, we emphasize best practices in coding to ensure that your project is not only functional but also scalable for future enhancements. Our developers maintain open communication with you, providing regular updates and opportunities for feedback. Rigorous testing is integrated throughout the development process, allowing us to identify and resolve any issues early on, resulting in a smoother final product.'
    },
    {
      title: 'Deploy',
      description:
        'Once development is complete and the project has passed rigorous testing, we proceed to the deployment phase. This involves launching your project in a live environment, ensuring that it is accessible to your users. We handle all aspects of deployment, including server setup, configuration, and final checks to guarantee that everything functions correctly. Our team is dedicated to ensuring a smooth transition from development to production, minimizing downtime and user disruption. After launch, we monitor the project closely to address any immediate issues that may arise.'
    },
    {
      title: 'Support',
      description:
        'Post-launch, our commitment to your project continues with comprehensive support and maintenance services. We provide ongoing updates, ensuring that your project remains secure and operates efficiently. Our team is readily available to address any concerns or issues that may arise, providing quick resolutions to maintain user satisfaction. We also offer suggestions for enhancements based on evolving user needs and technological advancements. This proactive approach ensures that your project stays relevant and continues to meet your business objectives long after launch.'
    },
  ];

  cardsData = [
    {
      bgColor: 'rgb(255, 171, 171)',
      imgSrc: './cards/uiux.svg',
      title: 'UI/UX Design',
      description: 'Creating user-centered designs that offer excellent user experiences. We focus on making designs both visually appealing and functional.'
    },
    {
      bgColor: 'rgb(189, 231, 255)',
      imgSrc: './cards/fullstack.svg',
      title: 'Full Stack Development',
      description: 'Building responsive, dynamic websites that function seamlessly across devices. Perfect for businesses and personal projects.'
    },
    {
      bgColor: 'rgb(238, 196, 255)',
      imgSrc: './cards/motion.svg',
      title: 'Motion Design',
      description: 'Bringing designs to life through animations and interactions. Perfect for websites, apps, and promotional content.'
    },
    {
      bgColor: 'rgb(189, 255, 233)',
      imgSrc: './cards/logo.svg',
      title: 'Logo Design',
      description: 'Designing unique logos that resonate with your brand identity. We create logos that stand out and communicate your values.'
    }
  ];


  constructor(private meta: Meta) { }

  ngOnInit() {
    // Main SEO Tags for Services
    this.meta.updateTag({ name: 'description', content: 'Explore our services at Pixel8Cloud, including UI/UX design, full-stack development, motion design, and logo design.' });
    this.meta.updateTag({ name: 'keywords', content: 'services, Pixel8Cloud, UI/UX design, full-stack development, motion design, logo design' });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });

    // Open Graph Tags for Services
    this.meta.updateTag({ property: 'og:title', content: 'Services | Pixel8Cloud' });
    this.meta.updateTag({ property: 'og:description', content: 'Our design and development services are tailored to elevate your business. Discover what we offer.' });
    this.meta.updateTag({ property: 'og:image', content: 'https://pixel8cloud.studio/pixel8cloud-design-development-agency-logo_100x100.webp' });
    this.meta.updateTag({ property: 'og:url', content: 'https://pixel8cloud.studio/services' });
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
