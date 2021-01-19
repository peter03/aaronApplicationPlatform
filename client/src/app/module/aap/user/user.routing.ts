import { UserSelectionComponent } from 'src/app/module/aap/user/userSelection.component';
import { UserDetailComponent } from 'src/app/module/aap/user/userDetail.component';
import { UserListComponent } from 'src/app/module/aap/user/userList.component';
import { UserRolelistComponent } from 'src/app/module/aap/user/userRolelist.component';

export const userRoutes = [
  {
    path: 'user', component: UserSelectionComponent,
    children: [
      { path: '', component: UserListComponent },
      { path: 'detail/:id', component: UserDetailComponent },
      { path: 'userrole/:id', component: UserRolelistComponent }
    ]
  }
];

export const userComponents = [
  UserSelectionComponent,
  UserListComponent,
  UserDetailComponent,
  UserRolelistComponent
];
