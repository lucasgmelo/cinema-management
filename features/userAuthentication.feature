Feature: User Authentication

    As a client
    I want to put my login and password
    Then log into my account
    And be able to see my tickets

    As a manager
    I want to colocar meu login e senha
    Then entrar na minha conta de administrador
    And be able to make the changes I want in each movie

    Scenario: Login successful
        Given I am on the login page
        When I fill in my login and password
        And the login is already registered in the database
        And the password is equivalent to that same login
        so i can log into my account
        And I'm redirected to the home screen of the current movies

    Scenario: Successful registration
        Given I am on the login page
        When I press "Register"
        And I am redirected to a registration page
        And I put my 'Name', 'Email' and 'Password'
        So I'm registered
        And I'm redirected to the home screen of the current movies
        And I get a registration confirmation message.
        And I can always log in with that login and password now to buy my tickets

    Scenario: Problem on login because of the password
        Given I am  on the login page
        When I fill in my login and password
        And the login is already registered in the database
        And the password is not equivalent to that same login
        Then I can't access my account
        And an error message appears

    Scenario: Problem on login because of the login
        Given I'm on the login page
        When I fill in my login and password
        And you don't have the typed login registered in the database
        Then I can't access my account
        And an error message appears


    Scenario: Problem registering because of invalid password
        Given I am on the login page
        When I press "Register"
        And I am redirected to a registration page
        And I put my 'Name', 'Email' and 'Password'
        And my password is less than 6 digits
        So I'm not registered
        And an error message appears
        And stays on the same page until the user changes

    Scenario: Problem with registration due to invalid email
        Given I am on the login page
        When I press "Register"
        And I am redirected to a registration page
        And I put my 'Name', 'Email' and 'Password'
        And my email has no email format
        So I'm not registered
        And an error message appears
        And stays on the same page until the user changes
