describe('cypress running test', () => {
    it('renders',  () => {
        cy.request('/').then(res => {
            expect(res.status).to.eq(200);
            expect(res.body._links.todos.templated).to.eq(true);
            cy.writeFile('cypress/fixtures/base-url.json', res);
        });
        cy.request('/todos').then(res => {
            expect(res.status).to.eq(200);
            expect(res.body[0].name).to.eq('Shadman');
            cy.writeFile('cypress/fixtures/todos.json', res);
        });
    });
})