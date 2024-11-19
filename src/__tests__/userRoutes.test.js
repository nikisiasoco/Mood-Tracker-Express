const request = require('supertest');
const app = require('../app')


describe('users api', () => {

    it('return firstname, lastname and emails', async () => {
        const response = await request(app).get('/get-users').expect('Content-Type', /json/).expect(200);
        expect(response.body).toEqual(
            expect.arrayContaining([
                expect.objectContaining({
                    first_name: expect.any(String),                    
                    last_name: expect.any(String),
                    email: expect.any(String)
                })
            ])
        );

    })

});