import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import { UITreeViewComponent } from '../../../projects/manjon-ui/src/public-api';

const meta: Meta<UITreeViewComponent> = {
    title: 'Components/Treeview',
    args: {},
    argTypes: {},
    decorators: [
        moduleMetadata({
            imports: [
                UITreeViewComponent
            ]
        }),
    ],
    parameters: {
        component: UITreeViewComponent
    }
}

export default meta;

export const Default: StoryObj<UITreeViewComponent> = {
    render(args) {
        return {
            template: `
            <ui-tree-view 
                [config]="{ withSelected: true }"
                (outputSelectItem)="outputSelectItem($event)" 
            />`,
            props: {
                ...args,
                outputSelectItem: action('Select Option')
            }
        }
    }
}