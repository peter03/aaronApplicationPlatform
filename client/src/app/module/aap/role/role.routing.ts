import { RoleRouterComponent } from 'src/app/module/aap/role/roleRouter.component';
import { RoleDetailComponent } from 'src/app/module/aap/role/roleDetail.component';
import { RoleListComponent } from 'src/app/module/aap/role/roleList.component';

export const roleRoutes = [
    {
    path: 'role', component: RoleRouterComponent,
        children: [
          { path: '', component: RoleListComponent},
          { path: 'detail/:id', component: RoleDetailComponent}
        ]
    }
];
export const roleComponents = [
    RoleRouterComponent,
    RoleListComponent,
    RoleDetailComponent
];
