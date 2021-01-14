import { userRoutes, userComponents } from "src/app/module/aap/user/user.routing";
import { rolegroupRoutes, rolegroupComponents } from "src/app/module/aap/rolegroup/rolegroup.routing";
import { roleRoutes, roleComponents } from "src/app/module/aap/role/role.routing";
import { menuRoutes, menuComponents } from "src/app/module/aap/menu/menu.routing";

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
  ...menuComponents
]
