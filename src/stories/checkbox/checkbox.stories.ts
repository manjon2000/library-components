import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import { UICheckboxComponent } from '../../../projects/manjon-ui/src/public-api';


const meta: Meta<UICheckboxComponent> = {
    title: 'Components/Forms/Checkbox',
    args: {
        id: 'checked01',
        name: 'layout',
        label: 'Label Checkbox',
        ariaLabel: 'Aria Label Checkbox',
        isChecked: false,
        isDisabled: false,
        outputChecked: action('checked')
    },
    argTypes: {},
    decorators: [
        moduleMetadata({
            imports: [
                UICheckboxComponent
            ]
        })
    ],
    parameters: {
        component: UICheckboxComponent
    }
}

export default meta;

const templateDefault = `
<ui-checkbox
    [id]="id"
    [name]="name"
    [label]="label"
    [ariaLabel]="ariaLabel"
    [isChecked]="isChecked"
    [isDisabled]="isDisabled"
    (outputChecked)="outputChecked($event)"
/>
`;

export const Default: StoryObj<UICheckboxComponent> = {
    render(args) {
        return {
            template: templateDefault,
            props: {
                ...args,
                outputChecked: action('checked')
            }
        }
    }
}