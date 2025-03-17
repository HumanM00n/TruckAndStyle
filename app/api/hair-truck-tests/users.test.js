// const { headers } = require('next/headers');
const fetch = require('node-fetch');

async function testPost() {
    const response = await fetch('http://localhost:3000/api/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            lastName: "Doe",
            fristName: "John",
            email: "john.doe@gmail.com",
            password: "paswword123",
            birthdate: "1990-01-01",
            phone_number: "0123456789",
            department: "île de France",
            city: "Paris",
            user_type: "Client",
            lastName: "2025-01-01"

        })
    });


    const result = await response.json();
    console.log(result);
}

testPost();