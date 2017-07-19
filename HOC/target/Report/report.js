$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("HOCanalytics.feature");
formatter.feature({
  "line": 3,
  "name": "As a parliament website Analytics auditor",
  "description": "I want to access the website\nSo that page hits are collected in GA",
  "id": "as-a-parliament-website-analytics-auditor",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@solo"
    }
  ]
});
formatter.scenarioOutline({
  "line": 7,
  "name": "Click on Outbound link",
  "description": "",
  "id": "as-a-parliament-website-analytics-auditor;click-on-outbound-link",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 9,
  "name": "I am on Parliament beta website landing page \"\u003cbrowser\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I assert the landing page and a pageview is collected in GA",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I click on Current parliament website link which is present on bottom of the page",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I assert the current website URL and an outbound event will be collected in GA",
  "keyword": "Then "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "as-a-parliament-website-analytics-auditor;click-on-outbound-link;",
  "rows": [
    {
      "cells": [
        "browser"
      ],
      "line": 15,
      "id": "as-a-parliament-website-analytics-auditor;click-on-outbound-link;;1"
    },
    {
      "cells": [
        "GC"
      ],
      "line": 16,
      "id": "as-a-parliament-website-analytics-auditor;click-on-outbound-link;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 16,
  "name": "Click on Outbound link",
  "description": "",
  "id": "as-a-parliament-website-analytics-auditor;click-on-outbound-link;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@solo"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I am on Parliament beta website landing page \"GC\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I assert the landing page and a pageview is collected in GA",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I click on Current parliament website link which is present on bottom of the page",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I assert the current website URL and an outbound event will be collected in GA",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "GC",
      "offset": 46
    }
  ],
  "location": "HOCdefinition.i_am_on_Parliament_beta_website_landing_page_GC(String)"
});
formatter.result({
  "duration": 14812747603,
  "status": "passed"
});
formatter.match({
  "location": "HOCdefinition.i_assert_the_landing_page_and_a_pageview_is_collected_in_GA()"
});
formatter.result({
  "duration": 20959210,
  "status": "passed"
});
formatter.match({
  "location": "HOCdefinition.i_click_on_Current_parliament_website_link_which_is_present_on_bottom_of_the_page()"
});
formatter.result({
  "duration": 10271480642,
  "status": "passed"
});
formatter.match({
  "location": "HOCdefinition.i_assert_the_current_website_URL_and_an_outbound_event_will_be_collected_in_GA()"
});
formatter.result({
  "duration": 1729379038,
  "status": "passed"
});
});