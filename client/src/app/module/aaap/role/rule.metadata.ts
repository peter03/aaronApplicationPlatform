export const RuleMetadata = [
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
    maxLength: 128
  },
  {
    label: 'aaap.module.role.rulegroupid',
    control: 'select',
    lookup: 'rulegrouplist',
    ngModel: 'rulegroupId',
    required: false,
    supressInList: true
  }
]
