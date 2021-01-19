export const RolegroupMetadata = [

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
    label: 'aap.common.sort',
    control: 'number',
    ngModel: 'sort',
    required: false,
  }
]
