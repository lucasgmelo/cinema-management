@i9n

Feature: registerNewMovie

    As an employee of the cinema
    I want to register new movies in the system
    so that I can have my system show me all of the sessions the movies will be screening

    Scenario: new movie without conflicts
        Given I am at the "Register new movie" area
        And the system has no movie entitled "Top Gun: Maverick"
        When I register the movie with name "Top Gun: Maverick"
        And I fill the "Director's name" field with "Tom Cruise"
        And I fill the release date with "May 26, 2022"
        And I fill the sessions information with "Everyday, theater 3, 8 pm"
        And I fill the sessions information with "Everyday, theater 3, 5 pm"
        And I fill the sessions information with "Everyday, theater 4, 5 pm"
        And I fill the sessions information with "Everyday, theater 4, 10 pm"
        And I set the screening end date with "July 1st, 2022"
        Then I can see there was no conflict with other movie sessions
        And I can see the movie was registered successfully in the system
    
    Scenario: new movie with conflicts
        Given I am at the "Register new movie" area
        And the system has no movie entitled "Top Gun: Maverick"
        And the system has a movie registered entitled "Sonic the Hedgehog 2"
        And "Sonic the Hedgehog 2" has a session "Everyday, theater 3, 5 pm"
        And "Sonic the Hedgehog 2" has a screening end date set to "June 5th, 2022"
        When I register the movie with name "Top Gun: Maverick"
        And I fill the "Director's name" field with "Tom Cruise"
        And I fill the release date with "May 26, 2022"
        And I fill the sessions information with "Everyday, theater 3, 8 pm"
        And I fill the sessions information with "Everyday, theater 3, 5 pm"
        And I fill the sessions information with "Everyday, theater 4, 5 pm"
        And I fill the sessions information with "Everyday, theater 4, 10 pm"
        And I set the screening end date with "July 1st, 2022"
        Then I can see an error message indicating there was a conflict 
            of sessions with "Sonic the Hedgehog 2"
        And "Top Gun: Maverick" is not registered in the system

    Scenario: new movie already registered
        Given I am at the "Register new movie" area
        And the system already has a movie entitled "Top Gun: Maverick"
        When I register the movie with name "Top Gun: Maverick"
        Then I can see an error message indicating that movie name is already registered
        And I can see the movie cannot be registered

    Scenario: new movie without filling all information
        Given I am at the "Register new movie" area
        And the system has no movie entitled "Top Gun: Maverick"
        When I register the movie with name "Top Gun: Maverick"
        And I fill the "Director's name" field with "Tom Cruise"
        And I fill the release date with "May 26, 2022"
        And I set the screening end date with "July 1st, 2022"
        Then I can see an error message indicating i have to fill all fields to 
            register and the sessions weren't specified
        And I can the movie cannot be registered in the system