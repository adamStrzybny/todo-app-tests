import { todoContext } from '../support/utils/todo-context';

todoContext((TodoPage) => {
  it('Verifies page header and input placeholder', () => {
    TodoPage()
      .verifyPageIsOpened()
      .verifyHeaderTitle()
      .verifyInputPlaceholder();
  });
});
