import { todoContext } from '../support/utils/todo-context';
import { tasks } from '../support/data/tasks';
import { filters } from '../support/data/enums';

todoContext((TodoPage) => {
  it('User adds three new tasks', () => {
    TodoPage()
      .verifyPageIsOpened()
      .addNewTask(tasks.lesson)
      .addNewTask(tasks.report)
      .addNewTask(tasks.gym)
      .verifyAmountOfAddedTasks(3)
      .completeTask(0)
      .clickOnFilter(filters.COMPLETED)
      .verifyAmountOfAddedTasks(1)
      .clickOnFilter(filters.ACTIVE)
      .verifyAmountOfAddedTasks(2)
      .clickOnFilter(filters.all)
      .verifyAmountOfAddedTasks(3);
  });
});
