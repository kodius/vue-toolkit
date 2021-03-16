import { storiesOf } from '@storybook/vue'
import ToggleScreen from './ToggleScreen'

storiesOf('ToggleScreen', module)
  .add('normal', () => ({
    components: { ToggleScreen },
    template:
      `
      <ToggleScreen
        :explainedWith="explainedWith"
        :explainedWithout="explainedWithout"
      />
    `,
    data: () => ({
      switchHover: false,
      switchedOn: false,
      explainedWith: [
        {
          "id": 1,
          "iconCheck": "/images/custom-software/check.svg",
          "iconCheckAlt": "With Us - explained (bullet) check icon",
          "description": "You gain an edge over your competitors using software that’s built for boosting your productivity and flexibility."
        },
        {
          "id": 2,
          "iconCheck": "/images/custom-software/check.svg",
          "iconCheckAlt": "With Us - explained (bullet) check icon",
          "description": "After the software is set up, if something goes wrong, a strong team will be behind you to help with anything you need."
        },
        {
          "id": 3,
          "iconCheck": "/images/custom-software/check.svg",
          "iconCheckAlt": "With Us - explained (bullet) check icon",
          "description": "Scale it up or down and modify it as you grow, and new requirements, tasks, or problems appear."
        },
        {
          "id": 4,
          "iconCheck": "/images/custom-software/check.svg",
          "iconCheckAlt": "With Us - explained (bullet) check icon",
          "description": "A custom software provides a higher level of security when compared to generic software."
        }
      ],
      explainedWithout: [
        {
          "id": 1,
          "iconCheck": "/images/custom-software/check.svg",
          "iconCheckAlt": "With Us - explained (bullet) check icon",
          "description": "You gain an edge over your competitors using software that’s built for boosting your productivity and flexibility."
        },
        {
          "id": 2,
          "iconCheck": "/images/custom-software/check.svg",
          "iconCheckAlt": "With Us - explained (bullet) check icon",
          "description": "After the software is set up, if something goes wrong, a strong team will be behind you to help with anything you need."
        },
        {
          "id": 3,
          "iconCheck": "/images/custom-software/check.svg",
          "iconCheckAlt": "With Us - explained (bullet) check icon",
          "description": "Scale it up or down and modify it as you grow, and new requirements, tasks, or problems appear."
        },
        {
          "id": 4,
          "iconCheck": "/images/custom-software/check.svg",
          "iconCheckAlt": "With Us - explained (bullet) check icon",
          "description": "A custom software provides a higher level of security when compared to generic software."
        }
      ],
    })
  }))