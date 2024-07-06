import { Order, Status } from "@prisma/client";

export interface HistoryProps{
  id: number,
  orderId: number,
  title: string,
  status: Status,
  updatedAt: Date
}

export class HistoryEntity  {
  public readonly props: HistoryProps;

  constructor(props: HistoryProps) {
    this.props = props
  }
  
  get id(): number {
    return this.props.id;
  }

  get orderId(): number {
    return this.props.orderId;
  }

  get title(): string {
    return this.props.title;
  }
  get status(): Status {
    return this.props.status;
  }

  get updatedAt(): Date {
    return this.props.updatedAt;
  }
}