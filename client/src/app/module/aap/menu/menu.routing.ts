import { MenuRouterComponent } from 'src/app/module/aap/menu/menuRouter.component';
import { MenuDetailComponent } from 'src/app/module/aap/menu/menuDetail.component';
import { MenuListComponent } from 'src/app/module/aap/menu/menuList.component';

export const menuRoutes = [
    {
    path: 'menu', component: MenuRouterComponent,
        children: [
          { path: '', component: MenuListComponent},
          { path: 'detail/:id', component: MenuDetailComponent}
        ]
    }
];
export const menuComponents = [
    MenuRouterComponent,
    MenuListComponent,
    MenuDetailComponent
];
