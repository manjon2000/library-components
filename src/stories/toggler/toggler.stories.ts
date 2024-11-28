import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { action } from '@storybook/addon-actions';

import { UITogglerComponent } from '../../../projects/manjon-ui/src/public-api';

const meta: Meta<UITogglerComponent> = {
    title: 'Components/Toggler',
    args: {
        isActived: false,
        isDisabled: false,
        outputEvent: action('output-action')
    },
    argTypes: {
        isActived: {
            type: 'boolean'
        },
        isDisabled: {
            type: 'boolean'
        }
    },
    decorators: [
        moduleMetadata({
            imports: [
                UITogglerComponent
            ]
        }),
    ],
    parameters: {
        component: UITogglerComponent
    }
}

export default meta;

export const Default: StoryObj<UITogglerComponent> = {
    render(args) {
        return {
            template: `<ui-toggler
                            [isActived]="isActived"
                            [isDisabled]="isDisabled"
                            (outputEvent)="outputEvent($event)"
                        />`,
            props: {
                ...args,
                outputEvent: action('output-event')
            }
        }
    }
}