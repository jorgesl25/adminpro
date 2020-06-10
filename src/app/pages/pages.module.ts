import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgessComponent } from './progess/progess.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { SHAREDMODULE } from '../shared/shared.module';
import { PagesComponent } from './pages.component';
import { PAGES_ROUTES } from './pages.routes';

@NgModule({
    declarations: [
        PagesComponent,
        DashboardComponent,
        ProgessComponent,
        Graficas1Component
    ],
    imports: [ 
        CommonModule,
        SHAREDMODULE
    ],
    exports: [
        DashboardComponent,
        ProgessComponent,
        Graficas1Component
    ],
    providers: [],
})
export class PagesModule {}