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

  verifyAmountOfAddedTasks(expectedCount: number): this {

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

  completeTask(taskIndexNumber: number): this {

    cy.get(todoCSS.todoItem)
      .eq(taskIndexNumber)
      .find(todoCSS.completeTaskCheckbox)
      .check()
      .should('be.checked');

    cy.get(todoCSS.todoItem)
      .eq(taskIndexNumber)
      .find(todoCSS.inputText)
      .should('have.css', 'text-decoration-line', 'line-through');

    return this;
  };

  clearCompletedTasks(): this {

    cy.get(todoCSS.clearCompletedTasksButton).click();

    return this;
  };

  verifyOnlyActiveTasksAreLeft(): this {

    cy.get(todoCSS.todoItem)
      .each(($task) => {
        cy.wrap($task).should('not.have.class', 'completed');
      });

    return this;
  };

  editTask(taskIndexNumber: number, editedText: string): this {

    cy.get(todoCSS.todoItem)
      .eq(taskIndexNumber)
      .dblclick();

    cy.get(todoCSS.todoItem)
      .eq(taskIndexNumber)
      .find(todoCSS.editIem)
      .clear()
      .type(`${editedText}{enter}`);

    cy.get(todoCSS.todoItem)
      .eq(taskIndexNumber)
      .find(todoCSS.inputText)
      .should('have.text', editedText);

    return this;
  };

  addMultipleTasks(tasks: string[]): this {
    tasks.forEach((task) => {
      cy.get(todoCSS.todoInput).type(`${task}{enter}`);
    });

    return this;
  }
  verifyAllTasksVisibility(): this {
    cy.get(todoCSS.todoItem).each(($task) => {
      cy.wrap($task).should('be.visible');
    });

    return this;
  }

  completeAllTasks(): this {
    cy.get(todoCSS.todoItem).each(($task) => {
      cy.wrap($task)
        .find(todoCSS.completeTaskCheckbox)
        .check()
        .should('be.checked');
    });

    return this;
  }
};
