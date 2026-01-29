describe('HTTP Requests', ()=> {


     it("Get Call" , ()=> {
        cy.request('GET' , 'https://jsonplaceholder.typicode.com/posts/1')
        .its('status')
        .should('equal', 200)
        })
    
    
    it("Get call" , ()=> {
        cy.request('GET' , 'https://jsonplaceholder.typicode.com/posts/1').then((response) => {

            // Status code
        expect(response.status).to.eq(200)


        cy.log(JSON.stringify(response.body))
      console.log(response.body)
        })
    })

    it("POST Call" , ()=>{
        cy.request({
                method : 'POST',
                url : "https://jsonplaceholder.typicode.com/posts/",
                body : {
                        title : "qui est esse",
                        body : "This is Post request testing",
                        userId : 1
                }    
        })
        .its('status')
        .should('equal', 201)

    })

    it("POST Call" , ()=>{
        cy.request({
                method : 'POST',
                url : "https://jsonplaceholder.typicode.com/posts/",
                body : {
                        title : "qui est esse",
                        body : "This is Post request testing",
                        userId : 1
                }    

            })
        .then((response) => {

    //status code
        expect(response.status).to.eq(201)

    cy.log(JSON.stringify(response.body))
        console.log(response.body)

    // Header validation
    expect(response.headers['content-type'])
      .to.include('application/json')

    // Response body structure
    expect(response.body).to.have.all.keys(
      'id', 'title', 'body', 'userId'   
    )

    // Response body assertions
    expect(response.body.title).to.eq("qui est esse")
    expect(response.body.userId).to.eq(1)
    expect(response.status).to.eq(201)
    expect(response.body).to.have.all.keys('id','title','body','userId')

    // Extracting and Validating Dynamic Values
    expect(response.body.id).to.be.a('number')


        
        })
    })  

    // -------------------- Invalid Payload Testing -------------------- //

    it("POST Call - Invalid Payload", () => {
        cy.request({
        method: 'POST',
        url: 'https://jsonplaceholder.typicode.com/posts',
        failOnStatusCode: false, // IMPORTANT
        body: {
            userId: "invalid" // missing title & body
        }
        }).then((response) => {

        // jsonplaceholder is mock, so it may still return 201
        // In real APIs, this would be 400
        expect(response.status).to.be.oneOf([400, 201])
        })
    })


    // -------------------- Missing Headers -------------------- //

    it("POST Call - Missing Content-Type Header", () => {
        cy.request({
        method: 'POST',
        url: 'https://jsonplaceholder.typicode.com/posts',
        headers: {
            // intentionally missing content-type
        },
        body: {
            title: "Test",
            body: "Missing headers",
            userId: 1
        },
        failOnStatusCode: false
        }).then((response) => {

        // Real API usually returns 415 or 400
        expect(response.status).to.be.oneOf([400, 415, 201])
        })
    })
        
     // -------------------- Error Response (4xx) -------------------- //

    it("GET Call - Resource Not Found (404)", () => {
        cy.request({
        method: 'GET',
        url: 'https://jsonplaceholder.typicode.com/posts/999999',
        failOnStatusCode: false
        }).then((response) => {

        // Status code assertion
        expect(response.status).to.eq(404)

        // Response body validation
        expect(response.body).to.be.empty
        })
    })


  /*  it("PUT Call" , ()=>{
        cy.request({
                method : 'PUT',
                url : "https://jsonplaceholder.typicode.com/posts/1",
                body : {
                        title : "qui est esse - updated ",
                        body : "This is Post request testing - updated",
                        userId : 1,
                        id : 1
                }    
        })
        .its('status')
        .should('equal', 200)

    })

    it("PUT Call" , ()=>{
        cy.request({
                method : 'PUT' ,
                url : "https://jsonplaceholder.typicode.com/posts/1",
                body : {
                        title : "qui est esse - updated ",
                        body : "This is Post request testing - updated",
                        userId : 1,
                        id : 1
     
                }    

            })
        .then((response) => {
        expect(response.status).to.eq(200)
        cy.log(JSON.stringify(response.body))
        console.log(response.body)
        })
    }) 
    
    
    it("DELETE Call" , ()=>{
        cy.request({
                method : 'DELETE',
                url : "https://jsonplaceholder.typicode.com/posts/1" 
        })
        .its('status')
        .should('equal', 200)

    })

    it("DELETE Call" , ()=>{
        cy.request({
                method : 'DELETE' ,
                url : "https://jsonplaceholder.typicode.com/posts/1"   

            })
        .then((response) => {
        expect(response.status).to.eq(200)
        cy.log(JSON.stringify(response.body))
        console.log(response.body)
        })
    })*/

})