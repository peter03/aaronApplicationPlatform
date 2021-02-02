import { UserRepository } from "src/app/repository/aaap/user.repository";
import { RolegroupRepository } from "src/app/repository/aaap/rolegroup.repository";
import { RoleRepository } from "src/app/repository/aaap/role.repository";
import { RuleRepository } from "src/app/repository/aaap/rule.repository";
import { MenuRepository } from "src/app/repository/aaap/menu.repository";
import { LookupRepository } from "src/app/repository/aaap/lookup.repository";

export const repositoryList = [
  UserRepository
  , RolegroupRepository
  , RuleRepository
  , RoleRepository
  , MenuRepository
  , LookupRepository
];