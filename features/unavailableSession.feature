Feature: Availability of sessions

Scenario: Check movies availability
  Given I'm in the Movies page 
  And There's a list of all sessions
  And I want to see if there's any 'Spider Man' session available
  When I see that all 'Spider Man' sessions are full
  Then I know that there are no available sessions
