import { UserRepository } from "src/app/repository/aaap/user.repository";
import { AddressRepository } from "src/app/repository/aaap/address.repository";
import { PersonRepository } from "src/app/repository/aaap/person.repository";
import { RolegroupRepository } from "src/app/repository/aaap/rolegroup.repository";
import { RoleRepository } from "src/app/repository/aaap/role.repository";
import { RuleRepository } from "src/app/repository/aaap/rule.repository";
import { MenuRepository } from "src/app/repository/aaap/menu.repository";
import { LookupRepository } from "src/app/repository/aaap/lookup.repository";
import { FilespecRepository } from "src/app/repository/aaap/filespec.repository";

export const repositoryList = [
  UserRepository
  , AddressRepository
  , PersonRepository
  , RolegroupRepository
  , RuleRepository
  , RoleRepository
  , MenuRepository
  , LookupRepository
  , FilespecRepository
];
