// https://docs.cypress.io/api/introduction/api.html

describe("My First Test", () => {
  it("Visits the app root url", () => {
    cy.visit("/");
    cy.contains("h1", "Motor Vehicle Statistics");
    cy.contains("h1", "Total Occupant Death Rate");
    cy.contains("h1", "Impaired Driving Death Rate");
    cy.contains("h1", "% of Seat Belt Wearing");

    cy.contains("Occupant Death Rate - Region 1 - Boston");
    cy.contains("Occupant Death Rate - Region 2 - New York");
    cy.contains("Occupant Death Rate - Region 3 - Philadelphia");
    cy.contains("Occupant Death Rate - Region 4 - Atlanta");
    cy.contains("Occupant Death Rate - Region 5 - Chicago");
    cy.contains("Occupant Death Rate - Region 6 - Dallas");
    cy.contains("Occupant Death Rate - Region 7 - Kansas City");
    cy.contains("Occupant Death Rate - Region 8 - Denver");
    cy.contains("Occupant Death Rate - Region 9 - San Francisco");
    cy.contains("Occupant Death Rate - Region 10 - Seattle");

    cy.contains("Impaired Driving Death Rate - Region 1 - Boston");
    cy.contains("Impaired Driving Death Rate - Region 2 - New York");
    cy.contains("Impaired Driving Death Rate - Region 3 - Philadelphia");
    cy.contains("Impaired Driving Death Rate - Region 4 - Atlanta");
    cy.contains("Impaired Driving Death Rate - Region 5 - Chicago");
    cy.contains("Impaired Driving Death Rate - Region 6 - Dallas");
    cy.contains("Impaired Driving Death Rate - Region 7 - Kansas City");
    cy.contains("Impaired Driving Death Rate - Region 8 - Denver");
    cy.contains("Impaired Driving Death Rate - Region 9 - San Francisco");
    cy.contains("Impaired Driving Death Rate - Region 10 - Seattle");

    cy.contains("% Wearing Seat Belts - Region 1 - Boston");
    cy.contains("% Wearing Seat Belts - Region 2 - New York");
    cy.contains("% Wearing Seat Belts - Region 3 - Philadelphia");
    cy.contains("% Wearing Seat Belts - Region 4 - Atlanta");
    cy.contains("% Wearing Seat Belts - Region 5 - Chicago");
    cy.contains("% Wearing Seat Belts - Region 6 - Dallas");
    cy.contains("% Wearing Seat Belts - Region 7 - Kansas City");
    cy.contains("% Wearing Seat Belts - Region 8 - Denver");
    cy.contains("% Wearing Seat Belts - Region 9 - San Francisco");
    cy.contains("% Wearing Seat Belts - Region 10 - Seattle");

    cy.contains("h1", "Data retrieved from the CDC");
    cy.contains("a", "CDC");
  });
});

describe("CDC link is linked to correct page, and opens in new tab", () => {
  it("Checks if the CDC link is to the correct website and opens in new tab", () => {
    cy.visit("/");
    cy
      .get('[data-test-id="cdc-link"]') // gets the cdc link
      .should('have.attr', 'href', 'https://data.cdc.gov/browse?category=Injury+%26+Violence&limitTo=datasets&page=1') // checks if it goes to the right page
      .should('have.attr', 'target', '_blank'); // checks if it opens a new tab when clicked
  });
});

// *************************************************************************
// Tests for Total Occupant Death Rate and Regions
// *************************************************************************

describe("Clicks on Total Occupant Death Rate", () => {
  it("Clicks on link to Total Occupant Death Rate", () => {
    cy.visit("/");
    cy
      .get('[data-test-id="ODR-Main-link"]')
      .click();
    cy.contains("h2", "Total Occupant Death Rate");
    cy
      .get('[data-test-id="Results-Table"]')
      .contains("Arkansas");
  });
});

describe("Clicks on Total Occupant Death Rate Search Bar", () => {
  it("Clicks on Total Occupant Death Rate Search Bar", () => {
    cy.visit("/");
    cy
      .get('[data-test-id="ODR-Main-link"]')
      .click();
    cy
      .get('[data-test-id="Search-Bar"]')
      .type('Arizona');
    cy
      .get('[data-test-id="Results-Table"]')
      .contains("Arizona");
  });
});

describe("Clicks on Total Occupant Death Rate Clear Button", () => {
  it("Clicks on Total Occupant Death Rate Clear Button", () => {
    cy.visit("/");
    cy
      .get('[data-test-id="ODR-Main-link"]')
      .click();
    cy
      .get('[data-test-id="Search-Bar"]')
      .should('have.value', '');
    cy
      .get('[data-test-id="Search-Bar"]')
      .type('Arizona');
    cy
      .get('[data-test-id="Search-Bar"]')
      .should('have.value', 'Arizona');
    cy
      .get('[data-test-id="Clear-Button"]')
      .click();
    cy
      .get('[data-test-id="Search-Bar"]')
      .should('have.value', '');
  });
});

describe("Clicks on Occupant Death Rate - Region 1 - Boston", () => {
  it("Clicks on link to Occupant Death Rate - Region 1 - Boston", () => {
    cy.visit("/");
    cy
      .get('[data-test-id="ODR-Boston-link"]')
      .click();
    cy.contains("h2", "Occupant Death Rate - Region 1 - Boston");
    cy
      .get('[data-test-id="Results-Table"]')
      .contains("Maine");
  });
});

describe("Clicks on Occupant Death Rate - Region 2 - New York", () => {
  it("Clicks on link to Occupant Death Rate - Region 2 - New York", () => {
    cy.visit("/");
    cy
      .get('[data-test-id="ODR-New-York-link"]')
      .click();
    cy.contains("h2", "Occupant Death Rate - Region 2 - New York");
    cy
      .get('[data-test-id="Results-Table"]')
      .contains("New Jersey");
  });
});

describe("Clicks on Occupant Death Rate - Region 3 - Philadelphia", () => {
  it("Clicks on link to Occupant Death Rate - Region 3 - Philadelphia", () => {
    cy.visit("/");
    cy
      .get('[data-test-id="ODR-Philadelphia-link"]')
      .click();
    cy.contains("h2", "Occupant Death Rate - Region 3 - Philadelphia")
    cy
      .get('[data-test-id="Results-Table"]')
      .contains("West Virginia");
  });
});

describe("Clicks on Occupant Death Rate - Region 4 - Atlanta", () => {
  it("Clicks on link to Occupant Death Rate - Region 4 - Atlanta", () => {
    cy.visit("/");
    cy
      .get('[data-test-id="ODR-Atlanta-link"]')
      .click();
    cy.contains("h2", "Occupant Death Rate - Region 4 - Atlanta")
    cy
      .get('[data-test-id="Results-Table"]')
      .contains("South Carolina");
  });
});

describe("Clicks on Occupant Death Rate - Region 5 - Chicago", () => {
  it("Clicks on link to Occupant Death Rate - Region 5 - Chicago", () => {
    cy.visit("/");
    cy
      .get('[data-test-id="ODR-Chicago-link"]')
      .click();
    cy.contains("h2", "Occupant Death Rate - Region 5 - Chicago")
    cy
      .get('[data-test-id="Results-Table"]')
      .contains("Minnesota");
  });
});

describe("Clicks on Occupant Death Rate - Region 6 - Dallas", () => {
  it("Clicks on link to Occupant Death Rate - Region 6 - Dallas", () => {
    cy.visit("/");
    cy
      .get('[data-test-id="ODR-Dallas-link"]')
      .click();
    cy.contains("h2", "Occupant Death Rate - Region 6 - Dallas")
    cy
      .get('[data-test-id="Results-Table"]')
      .contains("United States");
  });
});

describe("Clicks on Occupant Death Rate - Region 7 - Kansas City", () => {
  it("Clicks on link to Occupant Death Rate - Region 7 - Kansas City", () => {
    cy.visit("/");
    cy
      .get('[data-test-id="ODR-Kansas-link"]')
      .click();
    cy.contains("h2", "Occupant Death Rate - Region 7 - Kansas City")
    cy
      .get('[data-test-id="Results-Table"]')
      .contains("Missouri");
  });
});

describe("Clicks on Occupant Death Rate - Region 8 - Denver", () => {
  it("Clicks on link to Occupant Death Rate - Region 8 - Denver", () => {
    cy.visit("/");
    cy
      .get('[data-test-id="ODR-Denver-link"]')
      .click();
    cy.contains("h2", "Occupant Death Rate - Region 8 - Denver")
    cy
      .get('[data-test-id="Results-Table"]')
      .contains("Wyoming");
  });
});

describe("Clicks on Occupant Death Rate - Region 9 - San Francisco", () => {
  it("Clicks on link to Occupant Death Rate - Region 9 - San Francisco", () => {
    cy.visit("/");
    cy
      .get('[data-test-id="ODR-San-Francisco-link"]')
      .click();
    cy.contains("h2", "Occupant Death Rate - Region 9 - San Francisco")
    cy
      .get('[data-test-id="Results-Table"]')
      .contains("Nevada");
  });
});

describe("Clicks on Occupant Death Rate - Region 10 - Seattle", () => {
  it("Clicks on link to Occupant Death Rate - Region 10 - Seattle", () => {
    cy.visit("/");
    cy.viewport(1000, 1000);
    cy
      .get('[data-test-id="ODR-Seattle-link"]')
      .click();
    cy.contains("h2", "Occupant Death Rate - Region 10 - Seattle")
    cy
      .get('[data-test-id="Results-Table"]')
      .contains("Washington");
  });
});

// *************************************************************************
// Tests for Impaired Driving Death Rate and Regions
// *************************************************************************

describe("Clicks on Impaired Driving Death Rate", () => {
  it("Clicks on link to Impaired Driving Death Rate", () => {
    cy.visit("/");
    cy
      .get('[data-test-id="IDDR-Main-link"]')
      .click();
    cy.contains("h2", "Impaired Driving Death Rate");
    cy
      .get('[data-test-id="Results-Table"]')
      .contains("Kentucky");
  });
});

describe("Clicks on Impaired Driving Death Rate Search Bar", () => {
  it("Clicks on link to Impaired Driving Death Rate Search Bar", () => {
    cy.visit("/");
    cy
      .get('[data-test-id="IDDR-Main-link"]')
      .click();
    cy
      .get('[data-test-id="Search-Bar"]')
      .type('South Dakota');
    cy
      .get('[data-test-id="Results-Table"]')
      .contains("South Dakota");
  });
});

describe("Clicks on Impaired Driving Death Rate Clear Button", () => {
  it("Clicks on Impaired Driving Death Rate Clear Button", () => {
    cy.visit("/");
    cy
      .get('[data-test-id="IDDR-Main-link"]')
      .click();
    cy
      .get('[data-test-id="Search-Bar"]')
      .should('have.value', '');
    cy
      .get('[data-test-id="Search-Bar"]')
      .type('South Dakota');
    cy
      .get('[data-test-id="Search-Bar"]')
      .should('have.value', 'South Dakota');
    cy
      .get('[data-test-id="Clear-Button"]')
      .click();
    cy
      .get('[data-test-id="Search-Bar"]')
      .should('have.value', '');
  });
});

describe("Clicks on Impaired Driving Death Rate - Region 1 - Boston", () => {
  it("Clicks on link to Impaired Driving Death Rate - Region 1 - Boston", () => {
    cy.visit("/");
    cy
      .get('[data-test-id="IDDR-Boston-link"]')
      .click();
    cy.contains("h2", "Impaired Driving Death Rate - Region 1 - Boston");
    cy
      .get('[data-test-id="Results-Table"]')
      .contains("Vermont");
  });
});

describe("Clicks on Impaired Driving Death Rate - Region 2 - New York", () => {
  it("Clicks on link to Impaired Driving Death Rate - Region 2 - New York", () => {
    cy.visit("/");
    cy
      .get('[data-test-id="IDDR-New-York-link"]')
      .click();
    cy.contains("h2", "Impaired Driving Death Rate - Region 2 - New York");
    cy
      .get('[data-test-id="Results-Table"]')
      .contains("New York");
  });
});

describe("Clicks on Impaired Driving Death Rate - Region 3 - Philadelphia", () => {
  it("Clicks on link to Impaired Driving Death Rate - Region 3 - Philadelphia", () => {
    cy.visit("/");
    cy
      .get('[data-test-id="IDDR-Philadelphia-link"]')
      .click();
    cy.contains("h2", "Impaired Driving Death Rate - Region 3 - Philadelphia")
    cy
      .get('[data-test-id="Results-Table"]')
      .contains("Delaware");
  });
});

describe("Clicks on Impaired Driving Death Rate - Region 4 - Atlanta", () => {
  it("Clicks on link to Impaired Driving Death Rate - Region 4 - Atlanta", () => {
    cy.visit("/");
    cy
      .get('[data-test-id="IDDR-Atlanta-link"]')
      .click();
    cy.contains("h2", "Impaired Driving Death Rate - Region 4 - Atlanta")
    cy
      .get('[data-test-id="Results-Table"]')
      .contains("Florida");
  });
});

describe("Clicks on Impaired Driving Death Rate - Region 5 - Chicago", () => {
  it("Clicks on link to Impaired Driving Death Rate - Region 5 - Chicago", () => {
    cy.visit("/");
    cy
      .get('[data-test-id="IDDR-Chicago-link"]')
      .click();
    cy.contains("h2", "Impaired Driving Death Rate - Region 5 - Chicago")
    cy
      .get('[data-test-id="Results-Table"]')
      .contains("Michigan");
  });
});

describe("Clicks on Impaired Driving Death Rate - Region 6 - Dallas", () => {
  it("Clicks on link to Impaired Driving Death Rate - Region 6 - Dallas", () => {
    cy.visit("/");
    cy
      .get('[data-test-id="IDDR-Dallas-link"]')
      .click();
    cy.contains("h2", "Impaired Driving Death Rate - Region 6 - Dallas")
    cy
      .get('[data-test-id="Results-Table"]')
      .contains("Louisiana");
  });
});

describe("Clicks on Impaired Driving Death Rate - Region 7 - Kansas City", () => {
  it("Clicks on link to Impaired Driving Death Rate - Region 7 - Kansas City", () => {
    cy.visit("/");
    cy
      .get('[data-test-id="IDDR-Kansas-link"]')
      .click();
    cy.contains("h2", "Impaired Driving Death Rate - Region 7 - Kansas City")
    cy
      .get('[data-test-id="Results-Table"]')
      .contains("Iowa");
  });
});

describe("Clicks on Impaired Driving Death Rate - Region 8 - Denver", () => {
  it("Clicks on link to Impaired Driving Death Rate - Region 8 - Denver", () => {
    cy.visit("/");
    cy
      .get('[data-test-id="IDDR-Denver-link"]')
      .click();
    cy.contains("h2", "Impaired Driving Death Rate - Region 8 - Denver")
    cy
      .get('[data-test-id="Results-Table"]')
      .contains("Utah");
  });
});

describe("Clicks on Impaired Driving Death Rate - Region 9 - San Francisco", () => {
  it("Clicks on link to Impaired Driving Death Rate - Region 9 - San Francisco", () => {
    cy.visit("/");
    cy.viewport(1000, 1000);
    cy
      .get('[data-test-id="IDDR-San-Francisco-link"]')
      .click();
    cy.contains("h2", "Impaired Driving Death Rate - Region 9 - San Francisco")
    cy
      .get('[data-test-id="Results-Table"]')
      .contains("Hawaii");
  });
});

describe("Clicks on Impaired Driving Death Rate - Region 10 - Seattle", () => {
  it("Clicks on link to Impaired Driving Death Rate - Region 10 - Seattle", () => {
    cy.visit("/");
    cy.viewport(1000, 1000);
    cy
      .get('[data-test-id="IDDR-Seattle-link"]')
      .click();
    cy.contains("h2", "Impaired Driving Death Rate - Region 10 - Seattle")
    cy
      .get('[data-test-id="Results-Table"]')
      .contains("Oregon");
  });
});

// *************************************************************************
// Tests for Total Occupant Death Rate Regions
// *************************************************************************

describe("Clicks on % of Seat Belt Wearing", () => {
  it("Clicks on link to % of Seat Belt Wearing", () => {
    cy.visit("/");
    cy
      .get('[data-test-id="TPSB-Main-link"]')
      .click();
    cy.contains("h2", "% of Seat Belt Wearing");
    cy
      .get('[data-test-id="Results-Table"]')
      .contains("California");
  });
});

describe("Clicks on % of Seat Belt Wearing Search Bar", () => {
  it("Clicks on link to % of Seat Belt Wearing Search Bar", () => {
    cy.visit("/");
    cy
      .get('[data-test-id="TPSB-Main-link"]')
      .click();
    cy
      .get('[data-test-id="Search-Bar"]')
      .type('District of Columbia');
    cy
      .get('[data-test-id="Results-Table"]')
      .contains("District of Columbia");
  });
});

describe("Clicks on % of Seat Belt Wearing Clear Button", () => {
  it("Clicks on % of Seat Belt Wearing Clear Button", () => {
    cy.visit("/");
    cy
      .get('[data-test-id="TPSB-Main-link"]')
      .click();
    cy
      .get('[data-test-id="Search-Bar"]')
      .should('have.value', '');
    cy
      .get('[data-test-id="Search-Bar"]')
      .type('District of Columbia');
    cy
      .get('[data-test-id="Search-Bar"]')
      .should('have.value', 'District of Columbia');
    cy
      .get('[data-test-id="Clear-Button"]')
      .click();
    cy
      .get('[data-test-id="Search-Bar"]')
      .should('have.value', '');
  });
});

describe("Clicks on Percentage of Drivers and Front Seat Passengers Wearing Seat Belts - Region 1 - Boston", () => {
  it("Clicks on link to Percentage of Drivers and Front Seat Passengers Wearing Seat Belts - Region 1 - Boston", () => {
    cy.visit("/");
    cy
      .get('[data-test-id="TPSB-Boston-link"]')
      .click();
    cy.contains("h2", "Percentage of Drivers and Front Seat Passengers Wearing Seat Belts - Region 1 - Boston");
    cy
      .get('[data-test-id="Results-Table"]')
      .contains("Massachusetts");
  });
});

describe("Clicks on Percentage of Drivers and Front Seat Passengers Wearing Seat Belts - Region 2 - New York", () => {
  it("Clicks on link to Percentage of Drivers and Front Seat Passengers Wearing Seat Belts - Region 2 - New York", () => {
    cy.visit("/");
    cy
      .get('[data-test-id="TPSB-New-York-link"]')
      .click();
    cy.contains("h2", "Percentage of Drivers and Front Seat Passengers Wearing Seat Belts - Region 2 - New York");
    cy
      .get('[data-test-id="Results-Table"]')
      .contains("New Jersey");
  });
});

describe("Clicks on Percentage of Drivers and Front Seat Passengers Wearing Seat Belts - Region 3 - Philadelphia", () => {
  it("Clicks on link to Percentage of Drivers and Front Seat Passengers Wearing Seat Belts - Region 3 - Philadelphia", () => {
    cy.visit("/");
    cy
      .get('[data-test-id="TPSB-Philadelphia-link"]')
      .click();
    cy.contains("h2", "Percentage of Drivers and Front Seat Passengers Wearing Seat Belts - Region 3 - Philadelphia")
    cy
      .get('[data-test-id="Results-Table"]')
      .contains("West Virginia");
  });
});

describe("Clicks on Percentage of Drivers and Front Seat Passengers Wearing Seat Belts - Region 4 - Atlanta", () => {
  it("Clicks on link to Percentage of Drivers and Front Seat Passengers Wearing Seat Belts - Region 4 - Atlanta", () => {
    cy.visit("/");
    cy
      .get('[data-test-id="TPSB-Atlanta-link"]')
      .click();
    cy.contains("h2", "Percentage of Drivers and Front Seat Passengers Wearing Seat Belts - Region 4 - Atlanta")
    cy
      .get('[data-test-id="Results-Table"]')
      .contains("Georgia");
  });
});

describe("Clicks on Percentage of Drivers and Front Seat Passengers Wearing Seat Belts - Region 5 - Chicago", () => {
  it("Clicks on link to Percentage of Drivers and Front Seat Passengers Wearing Seat Belts - Region 5 - Chicago", () => {
    cy.visit("/");
    cy
      .get('[data-test-id="TPSB-Chicago-link"]')
      .click();
    cy.contains("h2", "Percentage of Drivers and Front Seat Passengers Wearing Seat Belts - Region 5 - Chicago")
    cy
      .get('[data-test-id="Results-Table"]')
      .contains("Ohio");
  });
});

describe("Clicks on Percentage of Drivers and Front Seat Passengers Wearing Seat Belts - Region 6 - Dallas", () => {
  it("Clicks on link to Percentage of Drivers and Front Seat Passengers Wearing Seat Belts - Region 6 - Dallas", () => {
    cy.visit("/");
    cy
      .get('[data-test-id="TPSB-Dallas-link"]')
      .click();
    cy.contains("h2", "Percentage of Drivers and Front Seat Passengers Wearing Seat Belts - Region 6 - Dallas")
    cy
      .get('[data-test-id="Results-Table"]')
      .contains("Texas");
  });
});

describe("Clicks on Percentage of Drivers and Front Seat Passengers Wearing Seat Belts - Region 7 - Kansas City", () => {
  it("Clicks on link to Percentage of Drivers and Front Seat Passengers Wearing Seat Belts - Region 7 - Kansas City", () => {
    cy.visit("/");
    cy
      .get('[data-test-id="TPSB-Kansas-link"]')
      .click();
    cy.contains("h2", "Percentage of Drivers and Front Seat Passengers Wearing Seat Belts - Region 7 - Kansas City")
    cy
      .get('[data-test-id="Results-Table"]')
      .contains("Missouri");
  });
});

describe("Clicks on Percentage of Drivers and Front Seat Passengers Wearing Seat Belts - Region 8 - Denver", () => {
  it("Clicks on link to Percentage of Drivers and Front Seat Passengers Wearing Seat Belts - Region 8 - Denver", () => {
    cy.visit("/");
    cy
      .get('[data-test-id="TPSB-Denver-link"]')
      .click();
    cy.contains("h2", "Percentage of Drivers and Front Seat Passengers Wearing Seat Belts - Region 8 - Denver")
    cy
      .get('[data-test-id="Results-Table"]')
      .contains("Wyoming");
  });
});

describe("Clicks on Percentage of Drivers and Front Seat Passengers Wearing Seat Belts - Region 9 - San Francisco", () => {
  it("Clicks on link to Percentage of Drivers and Front Seat Passengers Wearing Seat Belts - Region 9 - San Francisco", () => {
    cy.visit("/");
    cy.viewport(1000, 1000);
    cy
      .get('[data-test-id="TPSB-San-Francisco-link"]')
      .click();
    cy.contains("h2", "Percentage of Drivers and Front Seat Passengers Wearing Seat Belts - Region 9 - San Francisco")
    cy
      .get('[data-test-id="Results-Table"]')
      .contains("Arizona");
  });
});

describe("Clicks on Percentage of Drivers and Front Seat Passengers Wearing Seat Belts - Region 10 - Seattle", () => {
  it("Clicks on link to Percentage of Drivers and Front Seat Passengers Wearing Seat Belts - Region 10 - Seattle", () => {
    cy.visit("/");
    cy.viewport(1000, 1000);
    cy
      .get('[data-test-id="TPSB-Seattle-link"]')
      .click();
    cy.contains("h2", "Percentage of Drivers and Front Seat Passengers Wearing Seat Belts - Region 10 - Seattle")
    cy
      .get('[data-test-id="Results-Table"]')
      .contains("Idaho");
  });
});
/*
describe("Clicks on ", () => {
  it("Clicks on link to ", () => {
    cy.visit("/");
    
  });
});

describe("Clicks on ", () => {
  it("Clicks on link to ", () => {
    cy.visit("/");
    
  });
});

describe("Clicks on ", () => {
  it("Clicks on link to ", () => {
    cy.visit("/");
    
  });
});

describe("Clicks on ", () => {
  it("Clicks on link to ", () => {
    cy.visit("/");
    
  });
});
*/