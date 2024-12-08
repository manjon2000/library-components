# Opciones para crear el componente

 ## Fábrica de Renderizadores

### Paso 1: Base para los Renderizadores

Primero definimos una interfaz base que todos los renderizadores deben implementar:

```ts
import { TreeNode } from './tree-node.model';

export interface TreeNodeRenderer {
  render(node: TreeNode): string; // Puede ser un string o incluso un componente dinámico.
}
```
### Paso 2: Renderizadores Específicos

Ahora implementamos diferentes renderizadores según los tipos de nodos.

#### Renderizador para Nodos Simples

```ts
import { Injectable } from '@angular/core';
import { TreeNode } from './tree-node.model';
import { TreeNodeRenderer } from './tree-node-renderer';

@Injectable({
  providedIn: 'root'
})
export class SimpleTreeNodeRenderer implements TreeNodeRenderer {
  render(node: TreeNode): string {
    return `<span>${node.label}</span>`;
  }
}
```
#### Renderizador para Nodos con Íconos

```ts
import { Injectable } from '@angular/core';
import { TreeNode } from './tree-node.model';
import { TreeNodeRenderer } from './tree-node-renderer';

@Injectable({
  providedIn: 'root'
})
export class IconTreeNodeRenderer implements TreeNodeRenderer {
  render(node: TreeNode): string {
    return `<span><i class="icon">${node.label}</i></span>`;
  }
}
```

#### Renderizador para Nodos con Acciones

```ts
import { Injectable } from '@angular/core';
import { TreeNode } from './tree-node.model';
import { TreeNodeRenderer } from './tree-node-renderer';

@Injectable({
  providedIn: 'root'
})
export class ActionTreeNodeRenderer implements TreeNodeRenderer {
  render(node: TreeNode): string {
    return `<span>${node.label} <button>Action</button></span>`;
  }
}
```

### Paso 3: Fábrica de Renderizadores

Ahora implementamos la lógica para decidir qué renderizador usar basándonos en el tipo de nodo:

```ts
import { Injectable } from '@angular/core';
import { TreeNode } from './tree-node.model';
import { TreeNodeRenderer } from './tree-node-renderer';
import { SimpleTreeNodeRenderer } from './simple-tree-node-renderer';
import { IconTreeNodeRenderer } from './icon-tree-node-renderer';
import { ActionTreeNodeRenderer } from './action-tree-node-renderer';

@Injectable({
  providedIn: 'root'
})
export class TreeNodeRendererFactory {
  constructor(
    private simpleRenderer: SimpleTreeNodeRenderer,
    private iconRenderer: IconTreeNodeRenderer,
    private actionRenderer: ActionTreeNodeRenderer
  ) {}

  getRenderer(node: TreeNode): TreeNodeRenderer {
    switch (node.type) {
      case 'icon':
        return this.iconRenderer;
      case 'action':
        return this.actionRenderer;
      default:
        return this.simpleRenderer;
    }
  }
}

```

### Paso 4: Integración en el Componente TreeView

En el componente del árbol, usamos la fábrica para obtener el renderizador correcto y generar la salida.

```ts
import { Component, Input } from '@angular/core';
import { TreeNode } from './tree-node.model';
import { TreeNodeRendererFactory } from './tree-node-renderer-factory';

@Component({
  selector: 'app-tree-view',
  template: `
    <ul>
      <li *ngFor="let node of data">
        <span [innerHTML]="rendererFactory.getRenderer(node).render(node)"></span>
        <app-tree-view *ngIf="node.children" [data]="node.children"></app-tree-view>
      </li>
    </ul>
  `
})
export class TreeViewComponent {
  @Input() data: TreeNode[] = [];

  constructor(public rendererFactory: TreeNodeRendererFactory) {}
}
```

### Conclucion

- Esto producirá:
    - Un nodo raíz con un renderizado básico.
    - Un hijo con un ícono.
    - Un hijo con una acción adicional.
