export enum TodoStatus {
  DOING = "doing",
  COMPLETED = "completed",
}

export type Todo = {
  id: number;
  task: string;
  status: TodoStatus;
};

export class TodoEntity {
  constructor(
    public id: number,
    public task: string,
    public status: TodoStatus = TodoStatus.DOING
  ) {}
}
