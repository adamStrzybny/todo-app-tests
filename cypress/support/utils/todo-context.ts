import { TodoPage } from '../pages/todo-page';

export const todoContext = (
  callback: (todoPage: () => TodoPage) => void
): void => {
  context('Todo Tests', () => {
    beforeEach(() => {
      cy.openTodoPage();
    });

    const openTodoPage = (): TodoPage => new TodoPage();

    callback(openTodoPage);
  });
};