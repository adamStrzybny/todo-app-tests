/// <reference types="cypress" />

import * as todoCSS from '../selectors/todo';

Cypress.Commands.add('openTodoPage', () => {
  cy.visit(todoCSS.todoURL);

});
