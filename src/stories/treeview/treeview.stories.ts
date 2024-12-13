import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import { UITreeComponent, UITreeModule } from '../../../projects/manjon-ui/src/public-api';

const meta: Meta<UITreeComponent> = {
    title: 'Components/Treeview',
    args: {},
    argTypes: {},
    decorators: [
        moduleMetadata({
            imports: [
                UITreeModule
            ]
        }),
    ],
    parameters: {
        component: UITreeComponent
    }
}

export default meta;

export const Default: StoryObj<UITreeComponent> = {
    render(args) {
        return {
            template: `
            <ui-tree 
                [config]="{ withSelected: true }"
            />`,
            props: {
                ...args,
                //outputSelectItem: action('Select Option')
            }
        }
    }
}