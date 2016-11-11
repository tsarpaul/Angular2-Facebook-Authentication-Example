import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MainComponent, DashboardComponent } from './main';
import { LoginPanelComponent } from './login-panel';

import { AuthGuardService as AuthGuard, NotAuthGuard } from './shared';

const appRoutes: Routes = [
    {
        path: '',
        component: MainComponent,
        children: [
            {
                path: '',
                component: DashboardComponent,
                canActivate: [ AuthGuard ]
            }
        ]
    },
    {
        path: 'login',
        component: LoginPanelComponent,
        canActivate: [ NotAuthGuard ]
    }
]

export const appRoutingProviders: any = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);