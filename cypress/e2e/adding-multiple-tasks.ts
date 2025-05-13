import { todoContext } from '../support/utils/todo-context';

todoContext((TodoPage) => {
  it('User adds multiple tasks (more than 20), checking if app behaves correctly', () => {
    const taskAmount = 21;
    const multipleTasks = Array.from({ length: taskAmount }, (_, i) => `Task ${i + 1}`);

    TodoPage()
      .verifyPageIsOpened()
      .addMultipleTasks(multipleTasks)
      .verifyAmountOfAddedTasks(taskAmount)
      .verifyAllTasksVisibility()
      .completeAllTasks()
      .clearCompletedTasks();
  });
});
