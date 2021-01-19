export const userFormMetadata = [

  {
    label: 'Loginname',
    control: 'text',
    ngModel: 'loginName',
    placeholder: '',
    required: true,
    maxLength: 40

  },
  {
    label: 'Password',
    control: 'text',
    ngModel: 'passwordMD5',
    placeholder: '',
    required: false
  },
  {
    label: 'Roles',
    control: 'select',
    ngModel: 'roleId',
    required: true,
    lookup: 'rolelist',
    supressInList: true
  }
]
