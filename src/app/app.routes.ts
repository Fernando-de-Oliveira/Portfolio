import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
    },
    {
        path: 'home',
        loadChildren: () => import("./pages/home/home.routes").then(m => m.URL_ROUTES)
    },
    {
        path: 'url-shortener',
        loadChildren: () => import("./url-shorter/url-shorter.route").then(m => m.URL_ROUTES)
    }
];
