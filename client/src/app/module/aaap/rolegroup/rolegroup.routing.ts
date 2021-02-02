import { RolegroupRouterComponent } from 'src/app/module/aaap/rolegroup/rolegroupRouter.component';
import { RolegroupDetailComponent } from 'src/app/module/aaap/rolegroup//rolegroupDetail.component';
import { RolegroupListComponent } from 'src/app/module/aaap/rolegroup/rolegroupList.component';

export const rolegroupRoutes = [
    {
    path: 'rolegroup', component: RolegroupRouterComponent,
        children: [
          { path: '', component: RolegroupListComponent},
          { path: 'detail/:id', component: RolegroupDetailComponent}
        ]
    }
];
export const rolegroupComponents = [
    RolegroupRouterComponent,
    RolegroupListComponent,
    RolegroupDetailComponent
];
