import type { Preview } from "@storybook/angular";
import { setCompodocJson } from "@storybook/addon-docs/angular";
import docJson from "../documentation.json";
setCompodocJson(docJson);

const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  a11y: {
    config: {
      rules: [
        { id: "color-contrast", enabled: true }, // Contraste de colores (WCAG 2.1 AA)
        { id: "aria-roles", enabled: true }, // Roles ARIA
        { id: "aria-required-children", enabled: true }, // Hijos requeridos por ARIA
        { id: "aria-required-parent", enabled: true }, // Padres requeridos por ARIA
        { id: "label", enabled: true }, // Etiquetas en controles interactivos
        { id: "landmark-unique", enabled: true }, // Landmarks únicos
        { id: "region", enabled: true }, // Uso correcto de regiones
      ],
    },
    options: {
      restoreScroll: true, // Soluciona problemas al analizar elementos fuera de pantalla
    },
  },
  tags: ["autodocs"],
};

export default preview;
