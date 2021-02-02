export const MenuMetadata = [
  {
    label: 'aaap.common.id',
    control: 'text',
    ngModel: 'id',
    suppressInDetail: true
  },
  {
    label: 'aaap.common.parentid',
    control: 'text',
    ngModel: 'parentId',
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
    label: 'aaap.common.description',
    control: 'text',
    ngModel: 'description',
    maxLength: 255
  },
  {
    label: 'aaap.module.menu.route',
    control: 'text',
    ngModel: 'route',
    maxLength: 128
  },
  {
    label: 'aaap.common.rule',
    control: 'select',
    lookup: 'rulelist',
    ngModel: 'ruleId',
    suppressInList: true
  },
  {
    label: 'aaap.common.sort',
    control: 'number',
    ngModel: 'sort'
  }
]
