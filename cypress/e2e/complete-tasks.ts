import { todoContext } from '../support/utils/todo-context';
import { tasks } from '../support/data/tasks';

todoContext((TodoPage) => {
  it('User adds three new tasks and mark 2 as completed', () => {
    TodoPage()
      .verifyPageIsOpened()
      .addNewTask(tasks.lesson)
      .addNewTask(tasks.report)
      .addNewTask(tasks.gym)
      .verifyAmountOfAddedTasks(3)
      .completeTask(0)
      .completeTask(1)
      .clearCompletedTasks()
      .verifyAmountOfAddedTasks(1)
      .verifyOnlyActiveTasksAreLeft();
  });
});
