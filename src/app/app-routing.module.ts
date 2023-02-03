import { NgModule } from "@angular/core";
// import { APP_BASE_HREF } from "@angular/common";
import { RouterModule, Routes } from '@angular/router';

import { PorPaisComponent } from "./pais/pages/por-pais/por-pais.component";
import { PorCapitalComponent } from './pais/pages/por-capital/por-capital.component';
import { PorRegionComponent } from './pais/pages/por-region/por-region.component';
import { VerPaisComponent } from './pais/pages/ver-pais/ver-pais.component';



const routes: Routes = [

    {
        path: '',
        component: PorPaisComponent,
        pathMatch: 'full'
    },
    {
        path: 'capital',
        component: PorCapitalComponent
    },
    {
        path: 'region',
        component: PorRegionComponent
    },
    {
        path: 'pais/:id',
        component: VerPaisComponent
    },
    {
        path: '**',
        redirectTo: ''
    }
];



@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule,
    ],
    // providers: [ { provide: APP_BASE_HREF, useValue: '/' } ]
})
export class AppRoutingModule {

}