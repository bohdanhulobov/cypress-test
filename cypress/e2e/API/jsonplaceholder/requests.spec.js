/// <reference types="cypress" />

const jsonPlaceholderUrl = "https://jsonplaceholder.typicode.com/posts/";
const testUserId = 1;

describe("Request to JSONPlaceholder", () => {
  it("GET request test - status, array length (100 items), and first item ID check", () => {
    cy.request("GET", jsonPlaceholderUrl).then((response) => {
      expect(response.status).eq(200);
      expect(response.body).lengthOf(100);
      expect(response.body[0].id).eq(testUserId);
    });
  });

  it("POST request test - response status code and status text check", () => {
    cy.request("POST", jsonPlaceholderUrl, {
      fixture: "json-placeholder.body",
    }).then((response) => {
      expect(response.status).eq(201);
      expect(response.statusText).eq("Created");
    });
  });

  it("PUT request test - response status code check", () => {
    cy.request("PUT", jsonPlaceholderUrl + testUserId, {
      fixture: "json-placeholder.body",
    })
      .its("status")
      .should("eq", 200);
  });

  it("PATCH request test - title update and response status code check", () => {
    cy.fixture("json-placeholder.body").then((fixtureValues) => {
      const title = fixtureValues.title;

      cy.request("PATCH", jsonPlaceholderUrl + testUserId, { title })
        .its("status")
        .should("eq", 200);
    });
  });

  it("DELETE request test - status code and response time check", () => {
    cy.request("DELETE", jsonPlaceholderUrl + testUserId).then((response) => {
      expect(response.status).eq(200);
      expect(response.duration).lessThan(200);
    });
  });
});
