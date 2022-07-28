Feature: Buying tickets

    As a client
    I want to be able to select a movie session, choose an available seat,
    , choose if I am buying a full/half price ticket and select the paying method

    Scenario: Buying available tickets with credit card  
        Given I am logged in as a "client"
        And I choose a session from the movies list
        And The session is available
        When I choose "two" seats
        And The seats are available
        Then I am redirected to the payment section
        When I choose half price or full price tickets
        And I select credit card as paying method
        And I fill my card informations
        And The payment is approved
        Then I receive the tickets at the My tickets Section
        And I am able to see the informations about those tickets

    Scenario: Buying available tickets with bank slip  
        Given I am logged in as a "client"
        And I choose a session from the movies list
        And The session is available
        When I choose "two" seats
        And The seats are available
        Then I am redirected to the payment section
        When I choose half price or full price tickets
        And I select bank slip as paying method
        And I get access to the bank slip informations
        And The payment is approved
        Then I receive the tickets at the My tickets Section
        And I am able to see the informations about those tickets

    Scenario: Buying unavailable tickets     
        Given I am logged in as a "client"
        And I choose a session from the movies list
        And The session is available
        When I choose "two" seats
        And The seats are not available
        Then I receive an error message
        And It says that the seats I chose are not available
        And I remain at the seat selection section

    Scenario: Available tickets become unavailable before the payment section is completed     
        Given I am logged in as a "client"
        And I choose a session from the movies list
        And The session is available
        When I choose "four" seats
        And The seats are available
        Then I am redirected to the payment section
        When I choose half price or full price tickets
        Then I receive an error message
        And It says that the seats I chose are not available anymore
        And I get redirected to the seat selection section
