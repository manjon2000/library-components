import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import { UIInputSearchComponent } from '../../../projects/manjon-ui/src/public-api';


const meta: Meta<UIInputSearchComponent> = {
    title: 'Components/Forms/Input Search',
    args: {},
    argTypes: {},
    decorators: [
        moduleMetadata({
            imports: [UIInputSearchComponent]
        }),
    ],
    parameters: {
        component: UIInputSearchComponent 
    }
}

export default meta;


export const Default: StoryObj<UIInputSearchComponent> = {
    render(args) {
        return {
            template: `<ui-input-search />`,
            props: {
                ...args
            }
        }
    }
} 