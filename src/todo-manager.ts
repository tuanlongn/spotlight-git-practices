import { Todo, TodoStatus } from "./todo";

interface ITodoManager {
  displayTodos(): void;

  // Nhóm 1: Tính năng lọc công việc theo trạng thái
  // Yêu cầu:
  // - Thêm tính năng lọc công việc (Todo) theo trạng thái status: completed, doing.
  // - Sau đó thêm dòng hiển thị dưới cùng: "Tổng số công việc: <trạng thái status dùng để filter> 4/5"
  filterTodos(status?: TodoStatus): Todo[];

  // Nhóm 2: Tính năng chỉnh sửa công việc
  // Yêu cầu:
  // - Thêm chức năng chỉnh sửa công việc đã tồn tại.
  // - Bổ sung thêm thời gian thực hiện việc chỉnh sửa.
  editTodo(id: number, newTask: string): void;

  // Nhóm 3: Tính năng đánh dấu tất cả công việc hoàn thành
  // Yêu cầu:
  // - Thêm tính năng đánh dấu tất cả công việc trong danh sách là đã hoàn thành.
  // - Thêm hiển thị dòng thông báo: "Chúc mừng bạn, tất cả các công việc của bạn đã hoàn thành."
  markAllCompleted(): void;

  // Nhóm 4: Tính năng xóa tất cả công việc hoàn thành
  // Yêu cầu:
  // - Thêm tính năng xóa tất cả công việc đã hoàn thành khỏi danh sách.
  // - Thêm hiện thị thông báo: "Bạn hãy tạo công việc mới" nếu danh sách đang rỗng.
  deleteCompletedTasks(): void;
}

class TodoManager implements ITodoManager {
  private todos: Todo[] = [];

  constructor(initialTodos: Todo[]) {
    this.todos = initialTodos;
  }

  public displayTodos(filteredTodos?: Todo[], status?: string): void {
    if (filteredTodos) {
      filteredTodos.forEach((todo) => {
        console.log(`${todo.id}. ${todo.task} (${todo.status})`);
      });
      console.log(`Tổng số công việc: ${status} ${filteredTodos.length}/${this.todos.length}`);
    } else {
      this.todos.forEach((todo) => {
        console.log(`${todo.id}. ${todo.task} (${todo.status})`);
      });
    }
  }

  public filterTodos(status?: TodoStatus): Todo[] {
    if (!status) {
      return this.todos;
    }
    return this.todos.filter(todo => todo.status === status);
  }

  public editTodo(id: number, newTask: string): void {
    // Implement here
  }

  public deleteCompletedTasks(): void {
    // Implement here
  }

  public markAllCompleted(): void {
    // Implement here
  }
}

export default TodoManager;
