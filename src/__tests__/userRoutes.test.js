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
    });
    describe('POST REQUEST /post-user', () => {
        it('empty body -> return 404', async () => {
            await request(app).post('/post-user').expect(404);
        });

        it('to return 201', async () => {
            const mockData = {
                "first_name": "Nik23",
                "last_name": "Siasoco12",
                "email": "nikisiasoco001@gmail.com1"}
            await request(app).post('/post-user').expect('Content-Type', /json/).expect(201);
    
        });

    }) 
    

});