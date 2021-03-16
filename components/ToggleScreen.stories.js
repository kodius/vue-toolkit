import { storiesOf } from '@storybook/vue'
import ToggleScreen from './ToggleScreen'

storiesOf('ToggleScreen', module)
  .add('normal', () => ({
    components: { ToggleScreen },
    template:
      `
      <ToggleScreen
        :values="values"
      />
    `,
    data: () => ({
      values: [
      ]
    })
  }))