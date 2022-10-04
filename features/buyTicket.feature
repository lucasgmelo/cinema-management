Feature: buying tickets

As a client
 	I, after having selected a movie session that I want, also want to choose one (or more) available seats,
    choose whether I am buying a full/half ticket and know the quantity and location of my tickets,
    be informed of the total price get paid

Scenario: Purchase of available tickets with a credit card
    Given I am logged in as "customer"
    And after having chosen a session from the list of films
    And the session is available
    When I choose half price or full price tickets
    And select "two" places
    And these seats are available
    Then I can go to the payment section
    And I fill in my card information
    And the payment is approved
    And an approved purchase notification appears
    Then tickets are now available in the "Tickets" section
    And I can see the information about these tickets of mine

Scenario: Purchase of unavailable tickets
    Given I am logged in as "customer"
    And I choose a session from the movie list
    And the session is available
    When I choose half price or full price tickets
    And select "two" places
    And the seats are not available
    Then I can't click on that unavailable seat
    And I remain in the seat selection section
