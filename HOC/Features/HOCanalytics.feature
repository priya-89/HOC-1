@solo

Feature: As a parliament website Analytics auditor
  I want to access the website
  So that page hits are collected in GA

  Scenario Outline: Click on Outbound link

    Given I am on Parliament beta website landing page "<browser>"
    Then  I assert the landing page and a pageview is collected in GA
    When  I click on Current parliament website link which is present on bottom of the page
    Then  I assert the current website URL and an outbound event will be collected in GA

    Examples:
    |browser|
    |  GC   |
