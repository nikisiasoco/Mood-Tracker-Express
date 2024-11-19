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
        const {rows} = await db.query('select * from users')
        console.log(rows)
    } catch (error) {
        console.log(`auth controller failed with error: ${error.message}`)
        
    }
}