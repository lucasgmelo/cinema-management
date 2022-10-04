@i9n

Feature: register New Movie

    As a movie manager
    I want to register new films in the system
    for my system to show me all the sessions where the movies will be shown


    Scenario: New film without conflicts
        Given I'm logged in as a manager
        And the system has no movie titled "Top Gun: Maverick"
        When I click the "Add Movie" button and fill the "Movie Name" field with "Top Gun: Maverick"
        And I fill the "Director" field with "Tom Cruise"
        And I fill the "Cast" field with "Angelina, Louis"
        And I fill the "Duration" field with "131 min"
        And I fill the "Genre" field with "Action Drama"
        And I fill the "Rating" field with "12 years old"
        And I fill the "Price" field with "12"
        And I select whether or not to accept half entry
        And fill the "Banner" field with the poster image link
        And I fill in the "Synopsis" field with the movie synopsis
        And I fill the field "Start date" with "03/10/2022"
        And fill the field "End date" with "07/12/2022"
        And fill the "Room" field with “1”
        And fill in the “Time” field with “22:00”
        Then I can see that there was no conflict with other film sessions
        And I can see that the movie was successfully registered in the system

    Scenario: new movie with conflict when being registered
        Given I'm logged in as a manager
        And the system has no movie titled "Top Gun: Maverick"
        And the system has a registered movie titled "Orphan 2: Inception"
        And "The Orphan 2: The Origin" has a session in "Room 3" at "17:00"
        And "Orphan 2: The Origin" has an air end date set to "8/25/22
        When I click the "Add Movie" button and fill the "Movie Name" field with "Top Gun: Maverick"
        And I fill the "Director's name" field with "Tom Cruise"
        And I fill the "Cast" field with "Angelina, Louis"
        And I fill the "Duration" field with "131 min"
        And I fill the "Genre" field with "Action Drama"
        And I fill the "Rating" field with "12 years old"
        And I fill the "Price" field with "12"
        And I select whether or not to accept half entry
        And fill the "Banner" field with the poster image link
        And I fill in the "Synopsis" field with the movie synopsis
        And I fill the field "Start date" with "03/10/2022"
        And fill the field "End date" with "07/10/2022"
        And fill the "Room" field with "3"
        And fill the “Time” field with “17:00”
        And I set the display end date to "09/10/2022"
        Then I can see an error message indicating that there was a conflict
        of sessions
        And "Top Gun: Maverick" will not be able to be registered in the system

    Scenario: new movie already registered
        Given I'm logged in as a manager
        And the system already has a movie titled "Top Gun: Maverick"
        When I register the movie as "Top Gun: Maverick"
        Then I can see an error message indicating that the movie is already registered
        And I can see the movie can't be registered

    Scenario: New movie without filling all the information
        Given I'm logged in as a manager
        And the system has no movie titled "Top Gun: Maverick"
        When I register the movie as "Top Gun: Maverick"
        And I fill the "Director's name" field with "Tom Cruise"
        And I fill the "Duration" field with "131 min"
        And I fill the "Category" field with "Action Drama"
        And I fill the “Start Date” with "26/10/2022"
        And I fill the “End date ” with "10/30/2022"
        And I try to click the Add button
        Then I notice that the button is disabled because there is still missing information to complete
        And I can see that the movie cannot be registered in the system

    Scenario: New movie with session time conflicting with itself
        Given I'm logged in as a manager
        And the system has a movie titled "Top Gun: Maverick"
        When I register the movie as "Top Gun: Maverick"
        And I fill the "Director's name" field with "Tom Cruise"
        And I fill the "Duration" field with "131 min"
        And I fill the "Category" field with "Action Drama"
        And I fill in the release date with "May 26, 2022"
        And fill in the session information with "Room 1" and time “20:00”
        And fill in the session information with "Room 1" and time “21:00”
        And I set the display end date to "July 1, 2022"
        Then I can see an error message indicating that there is a conflict with the specified sessions
        And I can see that the movie cannot be registered in the system
