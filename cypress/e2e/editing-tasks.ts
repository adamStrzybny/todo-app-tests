import { todoContext } from '../support/utils/todo-context';
import { tasks } from '../support/data/tasks';

todoContext((TodoPage) => {
  it('User edits two tasks', () => {
    TodoPage()
      .verifyPageIsOpened()
      .addNewTask(tasks.lesson)
      .addNewTask(tasks.report)
      .addNewTask(tasks.gym)
      .verifyAmountOfAddedTasks(3)
      .editTask(0, tasks.japaneseLesson)
      .editTask(2, tasks.yoga);
  });
});
