//import { BaseService } from "src/app/service/aaap/base.service";
import { AuthenticationService } from "src/app/service/aaap/authentication.service";
import { EntityLoaderService } from "src/app/service/aaap/entityLoader.service";
import { ScreenIoService } from "src/app/service/aaap/screenio.service";

export const serviceList = [
  //BaseService,
  AuthenticationService,
  EntityLoaderService,
  ScreenIoService
];
