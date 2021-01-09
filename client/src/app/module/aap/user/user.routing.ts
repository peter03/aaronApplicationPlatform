import { UserSelectionComponent } from 'src/app/module/aap/user/userSelection.component';
import { UserDetailComponent } from 'src/app/module/aap/user/userDetail.component';
import { UserListComponent } from 'src/app/module/aap/user/userList.component';
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
