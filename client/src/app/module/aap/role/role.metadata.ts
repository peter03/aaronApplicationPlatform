export const RoleMetadata = [
  {
    label: 'aap.common.id',
    control: 'text',
    ngModel: 'id',
    suppressInDetail: true
  },
  {
    label: 'aap.common.uniquename',
    control: 'text',
    ngModel: 'name',
    placeholder: '',
    required: true,
    maxLength: 80
  },
  {
    label: 'aap.module.role.rolegroupid',
    control: 'select',
    lookup: 'rolegrouplist',
    ngModel: 'rolegroupId',
    required: false,
    supressInList: true
  }
]
