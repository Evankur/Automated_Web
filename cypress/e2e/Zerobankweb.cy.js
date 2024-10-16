///<reference types="cypress"/>
require('cypress-xpath');

describe('gagal login', () => {
  beforeEach(() => {
    cy.visit('http://zero.webappsecurity.com/index.html',{timeout : 10000})
    cy.url().should('include','index.html')
    cy.get('#signin_button').click()

  })
  
  it('should try login invalid data',()=>{
    cy.get('#login_form').should('be.visible')
    cy.get('#user_login').type('invalid user')
    cy.get('#user_password').type('invalid pass')
    cy.get('.btn').click()
    cy.get('.alert').should('be.visible').and('contain.text','Login and/or password are wrong')

    cy.get('#login_form').should('be.visible')
    cy.get('#user_login').type('Username')
    cy.get('#user_password').type('invalid pass')
    cy.get('.btn').click()
    cy.get('.alert').should('be.visible').and('contain.text','Login and/or password are wrong')

  })
  describe('Forgot Password', () => {
    beforeEach(() => {
      cy.visit('http://zero.webappsecurity.com/index.html',{timeout : 10000})
      cy.url().should('include','index.html')
      cy.get('#signin_button').click()
    })
    it('should try forgot password',()=>{
      cy.get('.offset3 > a').click()
      cy.url().should('include','forgot-password.html')
      cy.get('h3').should('include.text','Forgotten Password')
      cy.get('#user_email').type('van10212@gmail.com')
      cy.get('.btn').click()
    })
  })
  describe('Success login', () => {
    beforeEach(() => {
      cy.visit('http://zero.webappsecurity.com/index.html',{timeout : 10000})
      cy.url().should('include','index.html')
      cy.get('#signin_button').click()
  })
  it('should try login valid data dan masuk web map',()=>{

    cy.fixture("user").then(user =>{
      const username = user.username
      const password = user.password
  
      cy.get('#user_login').clear()
      cy.get('#user_login').type(username)
      cy.get('#user_password').clear()
      cy.get('#user_password').type(password)
      cy.get('.btn').click()
      cy.get('#account_activity_tab > a').click()
      cy.get('#money_map_tab > a').click()
      cy.get('tspan').should('contain.text','OutFlow Chart')
      cy.get('#gridview-1015-hd-Deposits > .x-grid-cell > .x-grid-cell-inner > .x-grid-group-title').click()
      cy.get('#gridview-1021-hd-Spendings > .x-grid-cell > .x-grid-cell-inner > .x-grid-group-title').click()
      cy.get('#tool-1033-toolEl').click()
      cy.get('#gridcolumn-1029-titleEl').click()
      cy.get('#gridcolumn-1029-triggerEl').click()
      cy.get('#menuitem-1053-textEl').click()
      cy.get('#online_statements_tab > a').click()
      cy.url().should('include','online-statements.html')
      cy.get('.board-content > :nth-child(2) > .nav > :nth-child(3) > a').click()
      cy.get('#os_2010 > .table > tbody > :nth-child(2) > [style="border-right: 1px solid #CCC"] > a').click()
      cy.get(':nth-child(3) > .dropdown-toggle').click()
      cy.get('#logout_link').should('include.text','Logout').click()
      //cy.get('#os_accountId').click()
      //cy.get('#os_2012 > .table > tbody > tr > [style="border-right: 1px solid #CCC"] > a').click()
    })
    })
  })


})



