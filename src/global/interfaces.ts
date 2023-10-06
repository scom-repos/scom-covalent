export interface ICovalentConfig {
  componentId?: number;
  endpoint?: string;
  options?: { [key: string]: any };
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