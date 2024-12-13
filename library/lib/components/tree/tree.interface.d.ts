export interface ITreeViewConfiguration {
    withCheckbox?: boolean;
    withSelected?: boolean;
}
export interface ITreeView {
    id: string;
    label: string;
    children?: ITreeView[] | null;
}
export interface ITreeViewNodes extends Omit<Partial<ITreeView>, 'children'> {
    children: boolean;
    isFather: boolean;
    level: number;
    index: number;
    contentChildren: boolean;
}
export interface ITreeViewSelected {
    parent?: ITreeView | null;
    selected: ITreeView;
}
