# Árbol n-ario

Este tipo de árbol nos permite tener la cantidad de nodos que queramos.


```markdown
           Raíz
        /    |    \
     Nodo1 Nodo2  Nodo3
     /  \     |     | \
   A1   A2    B1   C1  C2

```

## Representación jerárquica

> Cada nodo tiene una lista de hijos, estructura recursiva.

```yaml
Nodo:
  valor: A
  hijos: [B, C, D]
```
```yaml
Nodo:
  valor: C
  hijos: [E, F]
```

## Recorridos

- Preorden
- Inorden
- Postorden
- Amplitud

```js
class TreeNode {

  contructor(
    value,
    level = 0,
    parentNode = null
  ) {
    
    this.value = value
    this.children = []
    this.level = level
    this.parentNode = parentNode
  }

}
```
