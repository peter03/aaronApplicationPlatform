export const RuleMetadata = [
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
    maxLength: 128
  },
  {
    label: 'aap.module.role.rulegroupid',
    control: 'select',
    lookup: 'rulegrouplist',
    ngModel: 'rulegroupId',
    required: false,
    supressInList: true
  }
]
