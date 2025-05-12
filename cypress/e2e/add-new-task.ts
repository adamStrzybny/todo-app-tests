import { todoContext } from '../support/utils/todo-context';
import { tasks } from '../support/data/tasks';

todoContext((TodoPage) => {
  it('User adds three new tasks', () => {
    TodoPage()
      .verifyPageIsOpened()
      .addNewTask(tasks.lesson)
      .addNewTask(tasks.report)
      .addNewTask(tasks.gym)
      .verifyAllTasksWereAdded(3);
  });
});
