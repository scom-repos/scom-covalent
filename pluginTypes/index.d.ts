/// <amd-module name="@scom/scom-covalent/global/interfaces.ts" />
declare module "@scom/scom-covalent/global/interfaces.ts" {
    export interface ICovalentConfig {
        componentId?: number;
        endpoint?: string;
        options?: {
            [key: string]: any;
        };
        showHeader?: boolean;
        showFooter?: boolean;
    }
    export interface IProjectBlockWidget {
        guid: string;
        projectBlockGuid: string;
        widgetName: string;
        title: string;
        description: string;
        img: string;
        dataUri: string;
        status: 'active' | 'inactive';
    }
    export interface IFetchProjectBlockWidgetsResult {
        data: IProjectBlockWidget[];
    }
}
/// <amd-module name="@scom/scom-covalent/global/utils.ts" />
declare module "@scom/scom-covalent/global/utils.ts" {
    import { IFetchProjectBlockWidgetsResult } from "@scom/scom-covalent/global/interfaces.ts";
    export function fetchProjectBlockWidgets(): Promise<IFetchProjectBlockWidgetsResult>;
}
/// <amd-module name="@scom/scom-covalent/global/index.ts" />
declare module "@scom/scom-covalent/global/index.ts" {
    export * from "@scom/scom-covalent/global/interfaces.ts";
    export * from "@scom/scom-covalent/global/utils.ts";
}
/// <amd-module name="@scom/scom-covalent/index.css.ts" />
declare module "@scom/scom-covalent/index.css.ts" {
    export const containerStyle: string;
    export const covalentStyle: string;
}
/// <amd-module name="@scom/scom-covalent/data.json.ts" />
declare module "@scom/scom-covalent/data.json.ts" {
    const _default: {
        id: number;
        title: string;
        description?: string;
        path: string;
        properties: {
            [key: string]: string | number | object;
        };
    }[];
    export default _default;
}
/// <amd-module name="@scom/scom-covalent" />
declare module "@scom/scom-covalent" {
    import { Module, ControlElement, Container, VStack } from '@ijstech/components';
    import { ICovalentConfig } from "@scom/scom-covalent/global/index.ts";
    interface ScomCovalentElement extends ControlElement, ICovalentConfig {
    }
    global {
        namespace JSX {
            interface IntrinsicElements {
                ['i-scom-covalent']: ScomCovalentElement;
            }
        }
    }
    export default class ScomCovalent extends Module {
        private vStackCovalent;
        private mdConfig;
        private pnlConfig;
        private _data;
        tag: any;
        static create(options?: ScomCovalentElement, parent?: Container): Promise<ScomCovalent>;
        constructor(parent?: Container, options?: ScomCovalentElement);
        get showFooter(): boolean;
        set showFooter(value: boolean);
        get showHeader(): boolean;
        set showHeader(value: boolean);
        private getData;
        private setData;
        private getTag;
        private setTag;
        private _getActions;
        saveConfigData(data: any, tag: any): void;
        getConfigurators(): {
            name: string;
            target: string;
            getActions: () => {
                name: string;
                icon: string;
                command: (builder: any, userInputData: any) => {
                    execute: () => Promise<void>;
                    undo: () => void;
                    redo: () => void;
                };
                isReplacement: boolean;
                customUI: {
                    render: (data?: any, onReplace?: (data: any) => void) => Promise<VStack>;
                };
            }[];
            getData: any;
            setData: any;
            getTag: any;
            setTag: any;
        }[];
        private renderPlaceholder;
        private showConfig;
        init(): Promise<void>;
        render(): any;
    }
}
