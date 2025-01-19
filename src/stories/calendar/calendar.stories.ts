import type { Meta, StoryObj } from '@storybook/angular';
import { action } from '@storybook/addon-actions'
import { UICalendarComponent } from "../../../projects/manjon-ui/src/public-api";
import { moduleMetadata } from '@storybook/angular';

const meta: Meta<UICalendarComponent> = {
  title: 'Components/Calendar',
  args: {
    type: 'single',
    startDate: new Date('2025/01/01'),
    endDate: new Date('2025/01/05'),
    isSelectCurrentDay: false,
    dateSelect: action('Date selected'),
    dateRangeSelect: action('Date selected'),
  },
  argTypes: {
    type: {
      control: 'select',
      options: ['single', 'range']
    },
    startDate: {
      control: 'date',
      defaultValue: '2025/01/28'
    },
    endDate: {
      control: 'date',
      defaultValue: '2025/01/28'
    }
  },
  decorators: [
    moduleMetadata({
      imports: [
        UICalendarComponent
      ],
    }),
  ],
  parameters: {
    component: UICalendarComponent
  }
}

export default meta;

export const Default: StoryObj<UICalendarComponent> = {
  render(args) {
    return {
      template: `<ui-calendar
                  [type]="type"
                  [startDate]="startDate"
                  [endDate]="endDate"
                  [isSelectCurrentDay]="isSelectCurrentDay"
                  (dateSelect)="dateSelect($event)"
                  (dateRangeSelect)="dateRangeSelect($event)"
                />`,
      props: {
        ...args,
        dateSelect: action('Date selected'),
        dateRangeSelect: action('Range Dates selected')
      }
    }
  }
}
