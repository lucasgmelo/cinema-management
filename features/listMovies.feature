Feature: List movies

    As a client
    I want to see which movies are currently showing,
    and some information about each one, such as synopsis, duration and genre

    Scenario: Film sold out on the cinema screen
        Given "Pinocchio: The Wooden Boy" and "Thor: Love and Thunder" are registered in
        the system
        And the "Igor Eduardo" client is on the home screen
        And the movie "Pinocchio: The Wooden Boy" is shown on this screen
        And "Pinocchio: The Wooden Boy" has all its sessions full
        When the client selects to view the "Pinocchio: The Wooden Boy" sessions
        Then he is directed to an exclusive page of the film
        And the client cannot select any session because they are all full
        And the session time button shows disabled

    Scenario: View all sessions of a movie
        Given a movie was registered in the system with the name "Pinocchio: The Wooden Boy"
        And "genre" was recorded as "Animation" and "film length" was recorded as "90min"
        And "director" registered as "Joe"
        And "cast" was registered as "John Doe, Joana Doe"
        And "rating" as "Free"
        And the synopsis was recorded as "Discover the adventures of Pinocchio in this new version of one of the most beloved classic tales of all time. With the blessing of Geppetto, his father and creator, Pinocchio sets out to see the world alongside his horse and friend Tibalt. Together they decide to participate in a traveling circus, where Pinocchio realizes that he is a beautiful acrobat, as well as discovering something that will make him a real human boy."
        And the "Available sessions" were recorded as "28/09 TODAY", "29/09 TOMORROW", "30/09 MONDAY", "01/10 TUESDAY", "02/10 WEDNESDAY", '03/10 THURSDAY" , "04/10 FRIDAY"
        And the rooms "ROOM 1 14:00 17:00" and "ROOM 3 15:00" are shown
        And so "Pinocchio: The Wooden Boy" is a movie in theaters
        And the client "Igor Eduardo" is registered and logged in the system
        And the "Igor Eduardo" client is on the home screen
        And "Genre", "Movie Length" and "Synopsis" of "Pinocchio: The Wooden Boy" are shown on the home screen
        When the customer clicks on the "View available sessions" button
        And the client goes to the "Sessions" screen of "Pinocchio: The Wooden Boy"
        And "Film Length", "Genre", "Synopsis", "Director", "Cast" and "Rating" are shown on the new screen. In addition to the "Available sessions" and the respective
        Then all the sessions of "Pinocchio: The Wooden Boy" are shown on the screen
