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
        
        const {rows} = await db.query('select * from users');
        res.status(200).send(rows);
    } catch (error) {
        console.log(`getUsers failed with error: ${error.message}`);
        
    }
}
exports.getUserId = async (req, res) => {
    try {
        const {rows} = await db.query('select * from users where user_id = ($1)',[req.params['id']]);
        console.log(`uid = ${req.params['id']}`);
        res.status(200).send(rows);
        
        
    } catch (error) {
        console.log(`getUsersId failed with error: ${error.message}`);
    }
}

exports.postUser = async (req, res) => {
    
    try {
        //Validate incoming JSON:
        const {first_name, last_name,email} = req.body;
        if(first_name == null){
            console.log('empty body');
            res.status(404).send({});
        }else{
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

        }
        
        
    } catch (error) {
        console.log(`postUser failed with error: ${error.message}`);
    }
}

exports.deleteUser = async (req, res) => {
    try {
        
    } catch (error) {
        console.log(`deleteUser failed with error ${error.message}`);
    }
}