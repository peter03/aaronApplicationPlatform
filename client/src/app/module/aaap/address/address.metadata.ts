export const AddressMetadata = [

  {
    label: 'aaap.module.address.name1',
    control: 'text',
    ngModel: 'name1',
    placeholder: '',
    required: true,
    maxLength: 40
  },
  {
    label: 'aaap.module.address.name2',
    control: 'text',
    ngModel: 'name2',
    placeholder: '',
    required: false,
    maxLength: 40
  },
  {
    label: 'aaap.module.address.street',
    control: 'text',
    ngModel: 'street',
    placeholder: '',
    required: true,
    maxLength: 50
  },
  {
    label: 'aaap.module.address.zip',
    control: 'text',
    ngModel: 'zip',
    placeholder: '',
    required: true,
    maxLength: 20
  },
  {
    label: 'aaap.module.address.city',
    control: 'text',
    ngModel: 'city',
    placeholder: '',
    required: true,
    maxLength: 50
  },
  {
    label: 'aaap.common.country',
    control: 'select',
    lookup: 'countrylist',
    ngModel: 'countryId',
    required: true,
    suppressInList: true
  }

]
