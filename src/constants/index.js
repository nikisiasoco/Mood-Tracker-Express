const {config} =require('dotenv')
config()

module.exports ={
    PORT: process.env.PORT,
    SERVER_URL: process.env.SERVER_URL,
    CLIENT_URL: process.env.CLIENT_URL,
    DB_NAME : process.env.DB_NAME,
    DB_PASSWORD: process.env.DB_PASSWORD,
    DB_USER: process.env.DB_USER,
    DB_PORT: process.env.DB_PORT,
    DB_HOST: process.env.DB_HOST
}