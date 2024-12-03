import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { action } from '@storybook/addon-actions';

import { UITogglerComponent } from 'manjon-ui';

const meta: Meta<UITogglerComponent> = {
    title: 'Components/Toggler',
    args: {
        isActived: false,
        isDisabled: false,
        ariaLabel: 'Cambiar de tema',
        ariaLabelledby: '',
        outputEvent: action('output-action')
    },
    argTypes: {
        isActived: {
            type: 'boolean'
        },
        isDisabled: {
            type: 'boolean'
        },
        ariaLabel: {
            type: 'string',
            description: 'Se usa para proporcionar un texto descriptivo accesible cuando el botón no tiene contenido textual visible '
        },
        ariaLabelledby: {
            type: 'string',
            description: 'Se usa cuando el botón tiene un texto visible o está asociado con otro elemento que contiene la descripción. El valor de este atributo es el id del elemento que contiene la descripción.'
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
                            [ariaLabel]="ariaLabel"
                            [ariaLabelledby]="ariaLabelledby"
                            (outputEvent)="outputEvent($event)"
                        />`,
            props: {
                ...args,
                outputEvent: action('output-event')
            }
        }
    }
}