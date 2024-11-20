import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'url-shortener'
    },
    {
        path: 'url-shortener',
        loadChildren: () => import("./url-shorter/url-shorter.route").then(m => m.URL_ROUTES)
    }
];
