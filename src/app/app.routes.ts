import { Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';

export const routes: Routes = [
    {
        path: '', redirectTo: 'admin', pathMatch: 'full',
    },
    {
        path: 'admin', component: AdminComponent, loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
    }
];
