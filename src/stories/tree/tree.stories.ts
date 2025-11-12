import { Meta, moduleMetadata, StoryObj } from "@storybook/angular";
import { UITreeModule, UITreeViewComponent } from "../../../projects/manjon-ui/src/public-api";
import { NodeUI } from "../../../projects/manjon-ui/src/lib/components/tree/tree.model";

const data: Array<NodeUI> = [
  {
    value: 'Empresa',
    children: [
      {
        value: 'Recursos Humanos',
        children: [
          {
            value: 'Contrataciones',
            children: [
              { value: 'Publicar Vacante', children: [] },
              { value: 'Revisar Candidatos', children: [] },
            ],
          },
          {
            value: 'Capacitaciones',
            children: [
              { value: 'Onboarding', children: [] },
              { value: 'Desarrollo Profesional', children: [] },
            ],
          },
        ],
      },
      {
        value: 'Finanzas',
        children: [
          {
            value: 'Contabilidad',
            children: [
              { value: 'Cuentas por Pagar', children: [] },
              { value: 'Cuentas por Cobrar', children: [] },
            ],
          },
          {
            value: 'Presupuestos',
            children: [
              { value: 'Análisis Anual', children: [] },
              { value: 'Proyecciones', children: [] },
            ],
          },
        ],
      },
      {
        value: 'Tecnología',
        children: [
          {
            value: 'Desarrollo de Software',
            children: [
              {
                value: 'Frontend',
                children: [
                  { value: 'Angular', children: [] },
                  { value: 'React', children: [] },
                ],
              },
              {
                value: 'Backend',
                children: [
                  { value: 'Node.js', children: [] },
                  { value: 'Python', children: [] },
                ],
              },
            ],
          },
          {
            value: 'Infraestructura',
            children: [
              { value: 'Servidores', children: [] },
              { value: 'Redes', children: [] },
              { value: 'Seguridad', children: [] },
            ],
          },
        ],
      },
      {
        value: 'Marketing',
        children: [
          { value: 'Campañas Digitales', children: [] },
          { value: 'SEO / SEM', children: [] },
          { value: 'Branding', children: [] },
        ],
      },
    ],
  },
];


const meta: Meta<UITreeViewComponent> = {
  title: 'Components/Tree',
  args: {
    data
  },
  argTypes: {
    data: {
      control: "object"
    },
  },
  decorators: [
    moduleMetadata({
      imports: [
        UITreeModule
      ],
    })
  ],
  parameters: {
    component: UITreeViewComponent
  }
}

export default meta;

export const Default: StoryObj<UITreeViewComponent> = {
  render(args) {
    return {
      template: `<ui-tree-view [data]="data" />`,
      props: {
        ...args,
        data: data
      }
    }
  }
}


