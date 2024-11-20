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

    it('POST /post-user to return 201', async() => {
        const mockData = {
            "first_name": "Nik2",
            "last_name": "Siasoco1",
            "email": "nikisiasoco001@gmail.com"}
        await request(app).post('/post-user').send(mockData).expect('Content-Type', /json/).expect(201);

    });

});