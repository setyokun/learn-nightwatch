Feature: Google Advanced Search 

@google
Scenario: Validate content in google advanced search

  Given I open google advanced search page
  When I input "Elon Musk" in google advanced form
  Then Result about Elon Musk appear