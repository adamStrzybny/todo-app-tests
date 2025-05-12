import { todoContext } from '../support/utils/todo-context';
import { tasks } from '../support/data/tasks';

todoContext((TodoPage) => {
  it('User adds two tasks and then deletes one', () => {
    TodoPage()
      .verifyPageIsOpened()
      .addNewTask(tasks.lesson)
      .addNewTask(tasks.report)
      .verifyAllTasksWereAdded(2)
      .deleteTask(1)
      .verifyAllTasksWereAdded(1);
  });
});
