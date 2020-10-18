context("Register Tests", ()=>{
    it("makes a registering failed because a wrong email", ()=>{
        cy.visit("/static/home");

            let fake_username = cy.faker.internet.userName();
            let fake_email = cy.faker.lorem.word(10);
            let fake_passw = cy.faker.internet.password();

            cy.get("#usernameInput").type(fake_username,{force:true}).should("have.value",fake_username);
            cy.get("input[type='email']").type(fake_email,{force:true});
            cy.get("input[type='password']").then(els=>{
                [...els].forEach(el=>cy.wrap(el).type(fake_passw,{force:true}));
            })

            cy.get("input.input-invalid").should('be.visible')
            cy.wait(2000);
            
    });

    it("makes a registering failed because the passwords are unmatched", ()=>{
        cy.visit("/static/home");

            let fake_username = cy.faker.internet.userName();
            let fake_email = cy.faker.internet.email();
            

            cy.get("#usernameInput").type(fake_username,{force:true}).should("have.value",fake_username);
            cy.get("input[type='email']").type(fake_email,{force:true});
            cy.get("input[type='password']").then(els=>{
                [...els].forEach(el=>{
                    let fake_passw = cy.faker.internet.password();
                    cy.wrap(el).type(fake_passw,{force:true})
                })
            })

            cy.get("input.input-invalid").should('be.visible')
            cy.wait(2000);
    });

    it("makes a registering failed because the username has more than 20 chars", ()=>{
        cy.visit("/static/home");

            let fake_username = cy.faker.random.words(5);
            let fake_passw = cy.faker.internet.password();
            let fake_email = cy.faker.internet.email();

            cy.get("#usernameInput").type(fake_username,{force:false}).should("have.value",fake_username);
            cy.get("input[type='email']").type(fake_email,{force:true});
            cy.get("input[type='password']").then(els=>{
                [...els].forEach(el=>{
                    cy.wrap(el).type(fake_passw,{force:true})
                })
            })

            cy.get("input.input-invalid").should('be.visible')
            cy.wait(2000);
    })
})