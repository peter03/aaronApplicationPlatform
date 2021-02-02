export const RoleMetadata = [
  {
    label: 'aaap.common.id',
    control: 'text',
    ngModel: 'id',
    suppressInDetail: true
  },
  {
    label: 'aaap.common.uniquename',
    control: 'text',
    ngModel: 'name',
    placeholder: '',
    required: true,
    maxLength: 80
  },
  {
    label: 'aaap.common.group',
    control: 'select',
    lookup: 'rolegrouplist',
    ngModel: 'rolegroupId',
    required: false,
    suppressInList: true
  }
]
