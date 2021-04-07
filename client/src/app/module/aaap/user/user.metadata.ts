import { MyUserMetadata } from "src/app/model/myuser.metadata";

export const UserMetadata = [

  {
    label: 'aaap.module.login.loginname',
    control: 'text',
    ngModel: 'loginName',
    placeholder: '',
    required: true,
    maxLength: 40
  },
  {
    label: 'aaap.module.login.firstname',
    control: 'text',
    ngModel: 'person.firstName',
    placeholder: '',
    required: false,
    maxLength: 50
  },
  {
    label: 'aaap.module.login.lastname',
    control: 'text',
    ngModel: 'person.lastName',
    placeholder: '',
    required: false,
    maxLength: 50
  },
  {
    label: 'aaap.module.user.selectaddress',
    control: 'select',
    lookup: 'addresslist',
    ngModel: 'person.addressId',
    placeholder: '',
    required: true,
    suppressInList: true
  },
  {
    label: 'aaap.module.login.password',
    control: 'text',
    ngModel: 'password',
    placeholder: '',
    required: false,
    suppressInList: true
  },
  {
    label: 'aaap.module.login.confirmpassword',
    control: 'text',
    ngModel: 'confirmPassword',
    placeholder: '',
    required: false,
    suppressInList: true
  },
  {
    label: 'aaap.module.login.email',
    control: 'email',
    ngModel: 'person.email',
    placeholder: '',
    required: true,
    maxLength: 255
  },
  ...MyUserMetadata
]
