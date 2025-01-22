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

