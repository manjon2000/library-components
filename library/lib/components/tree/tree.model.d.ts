export interface NodeUI {
    value: string;
    children: Array<NodeUI>;
    expanded?: boolean;
    icon?: string;
    selected?: boolean;
}
