export interface NodeUI {
  value: string;
  children: Array<NodeUI>;
  expanded?: boolean; // TODO(): Add logic.
  icon?: string;      // TODO(): Add logic.
  selected?: boolean; // TODO(): Add logic.
}
