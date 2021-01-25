export const UserMetadata = [

  {
    label: 'aap.module.login.loginname',
    control: 'text',
    ngModel: 'loginName',
    placeholder: '',
    required: true,
    maxLength: 40

  },
  {
    label: 'aap.module.login.password',
    control: 'text',
    ngModel: 'password',
    placeholder: '',
    required: false,
    suppressInList: true
  },
  {
    label: 'aap.module.login.confirmpassword',
    control: 'text',
    ngModel: 'confirmPassword',
    placeholder: '',
    required: false,
    suppressInList: true
  }


]
