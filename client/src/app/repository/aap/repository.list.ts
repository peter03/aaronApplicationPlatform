import { UserRepository } from "src/app/repository/aap/user.repository";
import { RolegroupRepository } from "src/app/repository/aap/rolegroup.repository";
import { RoleRepository } from "src/app/repository/aap/role.repository";
import { MenuRepository } from "src/app/repository/aap/menu.repository";
import { LookupRepository } from "src/app/repository/aap/lookup.repository";

export const repositoryList = [
  UserRepository
  , RolegroupRepository
  , RoleRepository
  , MenuRepository
  , LookupRepository
];