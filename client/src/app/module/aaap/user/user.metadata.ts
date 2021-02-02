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
  }


]
