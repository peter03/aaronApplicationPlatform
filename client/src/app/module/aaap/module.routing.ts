import { userRoutes, userComponents } from "src/app/module/aaap/user/user.routing";
import { addressRoutes, addressComponents } from "src/app/module/aaap/address/address.routing";
import { rolegroupRoutes, rolegroupComponents } from "src/app/module/aaap/rolegroup/rolegroup.routing";
import { roleRoutes, roleComponents } from "src/app/module/aaap/role/role.routing";
import { menuRoutes, menuComponents } from "src/app/module/aaap/menu/menu.routing";
import { fileRoutes, fileComponents } from "src/app/module/aaap/file/file.routing";
import { DetailFormbuilderComponent } from "src/app/module/aaap/detailFormbuilder.component";
import { ListFormbuilderComponent } from "src/app/module/aaap/listFormbuilder.component ";

export const moduleRoutes = [
  ...userRoutes,
  ...addressRoutes,
  ...rolegroupRoutes,
  ...roleRoutes,
  ...menuRoutes,
  ...fileRoutes
];

export const moduleRoutingComponents = [
  ...userComponents,
  ...addressComponents,
  ...rolegroupComponents,
  ...roleComponents,
  ...menuComponents,
  ...fileComponents,
  DetailFormbuilderComponent,
  ListFormbuilderComponent
]
