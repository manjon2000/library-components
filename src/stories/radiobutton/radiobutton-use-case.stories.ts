import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { UIRadiobuttonComponent } from '../../../projects/manjon-ui/src/public-api';

const templateCustomStyle = `
<style>
    :root {
  --ui-custom-radiobutton-border-default: red;
  --ui-custom-radiobutton-border-default: #505050;
  --ui-custom-radiobutton-border-focus: green;
  --ui-custom-radiobutton-border-checked:#7a86ff;
  --ui-custom-radiobutton-shadow-bg-checked: blue;
  --ui-custom-radiobutton-border-error:#7a86ff;
  --ui-custom-radiobutton-shadow-bg-default: transparent;
  --ui-custom-radiobutton-shadow-bg-checked:#7a86ff;
  --ui-custom-radiobutton-shadow-bg-error: red;
  --ui-custom-radiobutton-shadow-bg-disabled: transparent;
  --ui-custom-radiobutton-shadow-width-default: 0px;
  --ui-custom-radiobutton-shadow-width-checked: 2px;
  --ui-custom-radiobutton-focus-outline-width: 2px;
  --ui-custom-radiobutton-focus-outline-style: solid;
  --ui-custom-radiobutton-focus-outline-color:#7a86ff;
  --ui-custom-radiobutton-focus-outline-offset: 2px;
}

</style>

<ui-radiobutton
    class="custom-radiobutton"
    [label]="label"
    [isChecked]="isChecked"
    [isDisabled]="isDisabled"
    [isError]="isError"
/>
`;

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
            template: templateCustomStyle,
            props: {
                ...args
            },
        }
    }
}

CustomStyles.parameters = { docs: false };

