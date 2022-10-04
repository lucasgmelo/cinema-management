Feature: Availability of sessions

  As a client
  I want to be able to see which sessions are available
  Then I can choose one to buy tickets

  Scenario: Movie unavailable due to lack of seats
    Given I am on the homepage
    And I click on the movie I want to watch
    And I am redirected to the movie page 'Pinocchio: The Wooden Boy'
    And I want to see if there is any session available
    When I see that all 'Pinocchio: The Wooden Boy' time options are unavailable to click
    Then I know there are no sessions available

  Scenario: First session unavailable while user was navigating to sessions
    Given I am on the homepage
    And there is a list of all movie options
    And I want to see if the first session of the day of 'Pinocchio: The Wooden Boy' is available
    When I click on "View available sessions" I am redirected to the movie's exclusive page
    And I see that the first time is unable to be clicked
    Then I know that the first session of the day of 'Pinocchio: The Wooden Boy' is not available
