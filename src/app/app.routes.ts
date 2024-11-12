import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ServicesComponent } from './pages/services/services.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { WorkComponent } from './pages/work/work.component';
import { ContactusComponent } from './pages/contactus/contactus.component';

export const routes: Routes = [
    {
        title: 'Home | Pixel8Cloud - Creative Design and Development Agency',
        path: '',
        component: HomeComponent,
    },
    {
        title: 'Our Work | Pixel8Cloud - Explore Our Projects and Case Studies',
        path: 'work',
        component: WorkComponent,
    },
    {
        title: 'Services | Pixel8Cloud - Comprehensive Design and Development Solutions',
        path: 'services',
        component: ServicesComponent,
    },
    {
        title: 'About Us | Pixel8Cloud - Learn About Our Vision and Team',
        path: 'about',
        component: AboutusComponent,
    },
    {
        title: 'Contact Us | Pixel8Cloud - Get in Touch for Your Next Project',
        path: 'contact',
        component: ContactusComponent,
    },
    {
        path: '**',
        redirectTo: '',
    }
];