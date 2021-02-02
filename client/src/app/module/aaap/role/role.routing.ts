import { RoleRouterComponent } from 'src/app/module/aaap/role/roleRouter.component';
import { RoleDetailComponent } from 'src/app/module/aaap/role/roleDetail.component';
import { RoleListComponent } from 'src/app/module/aaap/role/roleList.component';
import { RoleruleDetailComponent } from 'src/app/module/aaap/role/roleruleDetail.component';

export const roleRoutes = [
  {
    path: 'role', component: RoleRouterComponent,
    children: [
      { path: '', component: RoleListComponent },
      { path: 'detail/:id', component: RoleDetailComponent },
      { path: 'rolerule/:id', component: RoleruleDetailComponent }
    ]
  }
];
export const roleComponents = [
  RoleRouterComponent,
  RoleListComponent,
  RoleDetailComponent,
  RoleruleDetailComponent

];
