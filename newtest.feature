


Scenario Outline: Customer should to be able to reach at review page

When user selects <rating> in Rating stars
And enters <nickname> in Nickname field
And writes <summary> in Summary field
And writes <review> in Review field
Then user should be able to see <response>

Examples:
| rating | nickname | summary | review | warning |
| empty | valid | valid | valid | Please select one of each of the ratings above. |
| valid | empty | valid | valid | Nickname is required field |
| valid | valid | empty | valid | summary is required field |
| valid | valid | valid | empty | Review is required field |
| valid | valid | valid | valid | Review submitted succesfully |
