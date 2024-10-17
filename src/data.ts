import { Todo, TodoStatus } from "./todo";

export const todos: Todo[] = [
  { id: 1, task: "Làm bài tập", status: TodoStatus.COMPLETED },
  { id: 2, task: "Rửa chén", status: TodoStatus.DOING },
  { id: 3, task: "Đi chợ", status: TodoStatus.DOING },
  { id: 4, task: "Tập thể dục", status: TodoStatus.DOING },
  { id: 5, task: "Đọc sách", status: TodoStatus.DOING },
];
