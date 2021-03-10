import { AddressRouterComponent } from 'src/app/module/aaap/address/addressRouter.component';
import { AddressDetailComponent } from 'src/app/module/aaap/address/addressDetail.component';
import { AddressListComponent } from 'src/app/module/aaap/address/addressList.component';

export const addressRoutes = [
    {
    path: 'aaap_address', component: AddressRouterComponent,
        children: [
          { path: '', component: AddressListComponent},
          { path: 'detail/:id', component: AddressDetailComponent}
        ]
    }
];
export const addressComponents = [
    AddressRouterComponent,
    AddressListComponent,
    AddressDetailComponent
];
