Feature: List movies in theaters
    As a customer
    I want to see which movies are available

    Scenario: No movie in poster
        Given the client "Igor Eduardo" is on the "films" screen
        And the system doesn't have any movies playing at the moment
        When the client "Igor Eduardo" accesses the "films" screen
        Then an error message indicating that there are no movies available will be displayed.
        And the client remains on the "movies" screen

    Scenario: Movie sold out while on movie screen
        Given "Minions 2" and "Thor: Love and Thunder" are registered in the system
        And the client "Igor Eduardo" is on the "films" screen
        And the movie "Minions 2" is shown on the screen
        And "Minions 2" has all its sessions full after the client is on screen movies
        When "Igor Eduardo" client selects to view "Minions 2" sessions
        Then an error message indicating that there are no sessions available will be displayed.
        And the client returns to the "movies" screen
        And "Minions 2" is shown as a disable movie poster
        And "Thor: Love and Thunder" is shown as a movie poster

    Scenario: See all sessions of a movie
        Given a movie was registered in the system with the name "Minions 2" and its "age rating" was registered as "Free"
        And "category" was registered as "Animation" and "movie time" was registered as "94min"
        And "cast" was registered as "Voices by: Steve Carell, Lucy Lawless, Taraji P. Henson, Jean-Claude Van Damme, Julie Andrews, Michelle Yeoh, Dolph Lundgren, Alan Arkin"
        And "synopsis" was registered as "Set in the 1970s, the new plot shows the beginning of everything, with Gru as a child and before he became a supervillain. When trying, without success, to be part of the most famous villains clan in the world the Wicked Six, Gru and their faithful minions embark on a risky quest to steal a valuable stone. In a ruckus, Otto exchanges the valuable stone for a pet pebble."
        And "sessions" was registered as "15:00, 3D and Dubbed, Room 4 / 18:30, 3D and Subtitled, Room 4 / 19:00, Dubbed, Room 6 / 23:00, Subtitled, Room 6"
        And "Minions 2" is a movie in theaters
        And the client "Igor Eduardo" is registered and logged in the system
        And the client "Igor Eduardo" is on the "films" screen
        And "Age Rating", "Category", "Film Time", "Cast" and "Synopsis" of "Minions 2" are shown on the screen
        When "Igor Eduardo" client selects to view "Minions 2" sessions
        Then the client goes to the "Sessions" screen of "Minions 2"
        And all sessions of "Minions 2" are shown on the screen

    Scenario: Preview of the films on display
        Given a movie was registered in the system with the name "Minions 2" and its "age rating" was registered as "Free"
        And "category" was registered as "Animation" and "movie time" was registered as "94min"
        And "cast" was registered as "Voices by: Steve Carell, Lucy Lawless, Taraji P. Henson, Jean-Claude Van Damme, Julie Andrews, Michelle Yeoh, Dolph Lundgren, Alan Arkin"
        And "synopsis" was registered as "Set in the 1970s, the new plot shows the beginning of everything, with Gru as a child and before he became a supervillain. When trying, without success, to be part of the most famous villains clan in the world the Wicked Six, Gru and their faithful minions embark on a risky quest to steal a valuable stone. In a ruckus, Otto exchanges the valuable stone for a pet pebble."
        And "sessions" was registered as "15:00, 3D and Dubbed, Room 4 / 18:30, 3D and Subtitled, Room 4 / 19:00, Dubbed, Room 6 / 23:00, Subtitled, Room 6"
        And another movie was registered in the system with the name "Thor: Love and Thunder" and its "age rating" was registered as "14 years old"
        And "category" was registered as "Science Fiction and Action" and "movie time" was registered as "95min (1h35min)"
        And "cast" was registered as "Tessa Thompson, Chris Hemsworth, Chris Pratt, Natalie Portman, Melissa McCarthy, Christian Bale, Karen Gillan, Matt Damon, Russell Crowe, Dave Bautista, Sean Gunn"
        And "synopsis" reads "The film presents Thor on a journey unlike anything he's ever faced - a quest for inner peace. But his retirement is interrupted by a galactic assassin known as Gorr, the Butcher of the Gods, who seeks extinction of the gods. To combat the threat, Thor enlists the help of King Valkyrie, Korg and ex-girlfriend Jane Foster, who - to Thor's surprise - inexplicably carries her magic hammer, Mjolnir, as the Mighty Thor. on a mind-blowing adventure to uncover the mystery of the Butcher of the Gods' revenge and stop him before it's too late."
        And "sessions" was registered as "09:00, Subtitled, Room 2; 17:00, Subtitled, Room 2; 23:30, Subtitled, Room 3;"
        And "Minions 2" and "Thor: Love and Thunder" are upcoming movies
        And the client "Igor Eduardo" is registered and logged in the system
        And the client "Igor Eduardo" is on the "films" screen
        And "Age Rating", "Category", "Film Time", "Cast" and "Synopsis" of "Minions 2" are shown on the screen
        When the customer navigates left or right on the screen through the interface
        Then "Age Rating", "Category", "Film Time", "Cast" and "Synopsis" of "Thor: Love and Thunder" are shown on the screen
        And the client remains on the "movies" screen

    Scenario: Film with no available capacity
        Given "Minions 2" and "Thor: Love and Thunder" are registered in the system
        And all "Minions 2" sessions are full
        And "Thor: Love and Thunder" is a movie in theaters
        And the client "Igor Eduardo" is registered and logged in the system
        When the "Igor Eduardo" client tries to access the "films" screen
        Then "Minions 2" is shown as a disable movie poster
        And "Thor: Love and Thunder" is shown as a movie poster
        And the client remains on the "movies" screen


    Scenario: Crowded Movie Sessions Hidden
        Given a movie was registered in the system with the name "Minions 2" and its "age rating" was registered as "Free"
        And "category" was registered as "Animation" and "movie time" was registered as "94min"
        And "cast" was registered as "Voices by: Steve Carell, Lucy Lawless, Taraji P. Henson, Jean-Claude Van Damme, Julie Andrews, Michelle Yeoh, Dolph Lundgren, Alan Arkin"
        And "synopsis" was registered as "Set in the 1970s, the new plot shows the beginning of everything, with Gru as a child and before he became a supervillain. When trying, without success, to be part of the most famous villains clan in the world the Wicked Six, Gru and their faithful minions embark on a risky quest to steal a valuable stone. In a ruckus, Otto exchanges the valuable stone for a pet pebble."
        And "sessions" was registered as "14:00, 3D and Dubbed, Room 3 / 17:30, 3D and Subtitled, Room 3"
        And "Minions 2" is a movie in theaters
        And the session "14:00, 3D and Subtitled, Room 3" of "Minions 2" is available
        And the session "17:30, 3D and Subtitled, Room 3" of "Minions 2" is full
        And the client "Igor Eduardo" is registered and logged in the system
        And the client "Igor Eduardo" is on the "films" screen
        And "Age Rating", "Category", "Film Time", "Cast" and "Synopsis" of "Minions 2" are shown on the screen
        When "Igor Eduardo" client selects to view "Minions 2" sessions
        Then the client goes to the "Sessions" screen of "Minions 2"
        And the information about the 14:00 session in Room 3 (3D and Dubbed) is shown
        And the information about the 17:30 session in Room 3 (3D and Subtitled) is disable
        