import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { UIRadiobuttonComponent } from '../../../projects/manjon-ui/src/public-api';

const meta: Meta<UIRadiobuttonComponent> = {
    title: 'Components/Forms/Radiobutton',
    args: {
        label: 'Option 1',
        isChecked: false,
        isDisabled: false
    },
    argTypes: {
        label: {
            type: 'string',
        },
        isChecked: {
            type: 'boolean'
        },
        isDisabled: {
            type: 'boolean'
        },
        isError: {
            type: 'boolean'
        }
    },
    decorators: [
        moduleMetadata({
            imports: [
                UIRadiobuttonComponent
            ],
        }),
    ],
    parameters: {
        component: UIRadiobuttonComponent
    },
    tags: ['!autodocs']
}

export default meta;

export const CustomStyles: StoryObj<UIRadiobuttonComponent> = {
    render(args) {
        return {
            template: `
            <style>
            .custom-radiobutton {
                --ui-radiobutton-border-default: #505050;
                --ui-radiobutton-border-focus: green;
                --ui-radiobutton-border-checked: #7a86ff;
                --ui-radiobutton-shadow-bg-checked: blue;
                --ui-radiobutton-border-error: #7a86ff;
                --ui-radiobutton-shadow-bg-default: transparent;
                --ui-radiobutton-shadow-bg-checked: #7a86ff;
                --ui-radiobutton-shadow-bg-error: red;
                --ui-radiobutton-shadow-bg-disabled: transparent;
                --ui-radiobutton-shadow-width-default: 0px;
                --ui-radiobutton-shadow-width-checked: 2px;
                --ui-radiobutton-focus-outline-width: 2px;
                --ui-radiobutton-focus-outline-style: solid;
                --ui-radiobutton-focus-outline-color: #7a86ff;
                --ui-radiobutton-focus-outline-offset: 2px;}
            </style>
            <ui-radiobutton
                class="custom-radiobutton"
                [label]="label"
                [isChecked]="isChecked"
                [isDisabled]="isDisabled"
                [isError]="isError"
            />
            `,
            props: {
                ...args
            },
        }
    }
}

CustomStyles.parameters = { docs: false };
