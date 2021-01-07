import { UserSelectionComponent } from './userSelection.component';
import { UserDetailComponent } from './userDetail.component';
import { UserListComponent } from './userList.component';
//import { AddressComponent } from 'src/app/module/address/address.component';

export const userRoutes = [
    {
        path: 'user', component: UserSelectionComponent,
        children: [
            { path: '', component: UserListComponent},
            { path: 'detail/:id', component: UserDetailComponent}
        ]
    }
];
export const userComponents = [
    UserSelectionComponent,
    UserListComponent,
    UserDetailComponent
    //AddressComponent

];
