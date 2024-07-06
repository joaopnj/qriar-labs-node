import { HistoryProps } from "./history.entity";

export interface OrderProps{
  id: number,
  title: string,
  locator: string,
  history?: History[]
}

export class OrderEntity  {
  public readonly props: OrderProps;

  constructor(props: OrderProps) {
    this.props = props
  }
  
  get id(): number {
    return this.props.id;
  }
  get title(): string {
    return this.props.title;
  }
  get locator(): string {
    return this.props.locator;
  }
  get history(): History[] | undefined {
    return this.props.history;
  }
}