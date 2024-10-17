import { todos } from "./data";
import { TodoStatus } from "./todo";
import TodoManager from "./todo-manager";

const todoManager = new TodoManager(todos);

function main() {
  const readline = require("readline");
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  console.log("Chào mừng bạn đến với ứng dụng quản lý công việc (Todo)");
  todoManager.displayTodos();

  rl.question(
    "------------------------\nChọn một chức năng: \n1. Lọc công việc\n2. Chỉnh sửa công việc\n3. Đánh dấu tất cả hoàn thành\n4. Xóa tất cả hoàn thành\nLựa chọn của bạn: ",
    (choice: string) => {
      switch (choice) {
        case "1":
          rl.question(
            "Chọn trạng thái để lọc (all, completed, doing): ",
            (status: string) => {
              if (status === "all") {
                todoManager.filterTodos();
              } else if (status === "completed") {
                todoManager.filterTodos(TodoStatus.COMPLETED);
              } else if (status === "doing") {
                todoManager.filterTodos(TodoStatus.DOING);
              }
              todoManager.displayTodos();
              rl.close();
            }
          );
          break;
        case "2":
          rl.question("Nhập ID công việc cần chỉnh sửa: ", (id: string) => {
            rl.question("Nhập nội dung mới: ", (newTask: string) => {
              todoManager.editTodo(Number(id), newTask);
              todoManager.displayTodos();
              rl.close();
            });
          });
          break;
        case "3":
          todoManager.markAllCompleted();
          todoManager.displayTodos();
          rl.close();
          break;
        case "4":
          todoManager.deleteCompletedTasks();
          todoManager.displayTodos();
          rl.close();
          break;
        default:
          console.log("Lựa chọn không hợp lệ.");
          rl.close();
          break;
      }
    }
  );
}

main();
