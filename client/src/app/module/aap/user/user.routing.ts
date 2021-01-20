import { UserSelectionComponent } from 'src/app/module/aap/user/userSelection.component';
import { UserDetailComponent } from 'src/app/module/aap/user/userDetail.component';
import { UserListComponent } from 'src/app/module/aap/user/userList.component';
import { UserroleDetailComponent } from 'src/app/module/aap/user/userroleDetail.component';

export const userRoutes = [
  {
    path: 'user', component: UserSelectionComponent,
    children: [
      { path: '', component: UserListComponent },
      { path: 'detail/:id', component: UserDetailComponent },
      { path: 'userrole/:id', component: UserroleDetailComponent }
    ]
  }
];

export const userComponents = [
  UserSelectionComponent,
  UserListComponent,
  UserDetailComponent,
  UserroleDetailComponent
];
