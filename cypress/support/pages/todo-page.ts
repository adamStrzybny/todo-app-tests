import * as todoCSS from '../selectors/todo';

export class TodoPage {

  verifyPageIsOpened():this {

    cy.url().should(`include`, todoCSS.todoURL);

    return this;
  };

  addNewTask(text: string): this {

    cy.get(todoCSS.todoInput).type(`${text}{enter}`);
    cy.get(todoCSS.todoList).last().should('contain.text', text);

    return this;
  };

  verifyAllTasksWereAdded(expectedCount: number): this {

    cy.get(todoCSS.todoList)
      .find(todoCSS.todoItem)
      .should('have.length', expectedCount);

    return this;
  };

  deleteTask(taskIndexNumber: number): this {

    cy.get(todoCSS.todoItem)
      .eq(taskIndexNumber)
      .trigger('mouseover')
      .find(todoCSS.deleteButton)
      .click( { force:true } );

    return this;
  };
};
