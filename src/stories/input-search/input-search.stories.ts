import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { UIInputSearchComponent, UIOptionComponent, UIOptionGroupComponent } from 'manjon-ui';
import { DemoInputSearchComponent } from './demo-input-search/demo-input-search.component';

const meta: Meta<UIInputSearchComponent> = {
    title: 'Components/Forms/Input Search',
    args: {},
    argTypes: {},
    decorators: [
        moduleMetadata({
            imports: [
                UIInputSearchComponent,
                UIOptionGroupComponent,
                UIOptionComponent,
                DemoInputSearchComponent
            ]
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
            template: `<demo-input-search />`,
            props: {
                ...args
            }
        }
    }
} 