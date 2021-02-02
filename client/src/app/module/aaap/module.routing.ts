import { userRoutes, userComponents } from "src/app/module/aaap/user/user.routing";
import { rolegroupRoutes, rolegroupComponents } from "src/app/module/aaap/rolegroup/rolegroup.routing";
import { roleRoutes, roleComponents } from "src/app/module/aaap/role/role.routing";
import { menuRoutes, menuComponents } from "src/app/module/aaap/menu/menu.routing";
import { DetailFormbuilderComponent } from "src/app/module/aaap/detailFormbuilder.component";
import { ListFormbuilderComponent } from "src/app/module/aaap/listFormbuilder.component ";

export const moduleRoutes = [
  ...userRoutes,
  ...rolegroupRoutes,
  ...roleRoutes,
  ...menuRoutes
];

export const moduleRoutingComponents = [
  ...userComponents,
  ...rolegroupComponents,
  ...roleComponents,
  ...menuComponents,
  DetailFormbuilderComponent,
  ListFormbuilderComponent
]
