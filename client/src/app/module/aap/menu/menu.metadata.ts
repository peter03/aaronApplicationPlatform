export const MenuMetadata = [
  {
    label: 'aap.common.id',
    control: 'text',
    ngModel: 'id',
    suppressInDetail: true
  },
  {
    label: 'aap.common.parentid',
    control: 'text',
    ngModel: 'parentId',
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
    label: 'aap.common.description',
    control: 'text',
    ngModel: 'description',
    maxLength: 255
  },
  {
    label: 'aap.module.menu.route',
    control: 'text',
    ngModel: 'route',
    maxLength: 128
  },
  {
    label: 'aap.common.rule',
    control: 'select',
    lookup: 'rulelist',
    ngModel: 'ruleId',
    suppressInList: true
  },
  {
    label: 'aap.common.sort',
    control: 'number',
    ngModel: 'sort'
  }
]
