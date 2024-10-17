import { Todo, TodoStatus, TodoEntity } from "./todo";
import TodoManager from "./todo-manager";

describe("TodoManager", () => {
  let todoManager: TodoManager;
  let initialTodos: Todo[];

  beforeEach(() => {
    initialTodos = [
      new TodoEntity(1, "Làm bài tập", TodoStatus.DOING),
      new TodoEntity(2, "Rửa chén", TodoStatus.COMPLETED),
      new TodoEntity(3, "Đi chợ", TodoStatus.DOING),
    ];
    todoManager = new TodoManager(initialTodos);
  });

  test('filterTodos: should filter todos by status "completed"', () => {
    const completedTodos = todoManager.filterTodos(TodoStatus.COMPLETED);
    expect(completedTodos.length).toBe(1);
    expect(completedTodos[0].task).toBe("Rửa chén");
  });

  test('filterTodos: should filter todos by status "doing"', () => {
    const incompleteTodos = todoManager.filterTodos(TodoStatus.DOING);
    expect(incompleteTodos.length).toBe(2);
    expect(incompleteTodos[0].task).toBe("Làm bài tập");
    expect(incompleteTodos[1].task).toBe("Đi chợ");
  });

  test("editTodo: should update the task of the todo by ID", () => {
    todoManager.editTodo(1, "Làm bài tập mới");
    const todos = todoManager.filterTodos(TodoStatus.DOING);
    expect(todos[0].task).toBe("Làm bài tập mới");
  });

  test("markAllCompleted: should mark all todos as completed", () => {
    todoManager.markAllCompleted();
    const completedTodos = todoManager.filterTodos(TodoStatus.COMPLETED);
    expect(completedTodos.length).toBe(3);
  });

  test("deleteCompletedTasks: should delete all completed tasks", () => {
    todoManager.deleteCompletedTasks();
    const remainingTodos = todoManager.filterTodos(TodoStatus.DOING);
    expect(remainingTodos.length).toBe(2);
    expect(todoManager.filterTodos(TodoStatus.COMPLETED).length).toBe(0);
  });
});
