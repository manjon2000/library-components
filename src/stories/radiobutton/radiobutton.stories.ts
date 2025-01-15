import type { Meta, StoryObj } from '@storybook/angular';

import { moduleMetadata } from '@storybook/angular'
import { UIRadiobuttonComponent } from '../../../projects/manjon-ui/src/public-api';

const meta: Meta<UIRadiobuttonComponent> = {
    title: 'Components/Forms/Radiobutton',
    args: {
        label: 'Label',
        isChecked: false,
        isDisabled: false
    },
    argTypes: {
        label: {
            type: 'string'
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
    }
}

export default meta;

export const Default: StoryObj<UIRadiobuttonComponent> = {
    render(args) {
        return {
            template: `
            <ui-radiobutton
                [label]="label"
                [isChecked]="isChecked"
                [isDisabled]="isDisabled"
                [isError]="isError"
            />`,
            props: {
                ...args
            }
        }
    }
};
