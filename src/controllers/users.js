const db = require('../db')
//GET USERS ENDPOINT
// Mock database
const mockUsers = [
    {
      first_name: 'John',
      last_name: 'Doe',
      email: 'johndoe@example.com',
    },
    {
      first_name: 'Alice',
      last_name: 'Smith',
      email: 'alicesmith@example.com',
    },
  ];
exports.getUsers = async (req,res) => {
    try {
        res.status(200).send(mockUsers);
        const {rows} = await db.query('select * from users');
        console.log(rows);
    } catch (error) {
        console.log(`getUsers failed with error: ${error.message}`);
        
    }
}

exports.postUser = async (req, res) => {
    try {
        //Validate incoming JSON:
        const {first_name, last_name,email} = req.body;
        
        await db.query('INSERT INTO USERS (first_name, last_name, email) VALUES ($1, $2, $3) RETURNING *',[first_name,last_name,email],
            (error, results)=> {
                if (error){
                    console.log(`post-user QUERY failed with error: ${error.message}`);
                    throw error;
                }
                response.status(201).send(`User added with ID: ${results.rows[0].id}`);
            })
        //console.log(`POST USERS LOG: ${req.body}`);
        console.log(`first_name =  ${first_name}, last_name = ${last_name}`);
        
    } catch (error) {
        console.log(`postUser failed with error: ${error.message}`);
    }
}