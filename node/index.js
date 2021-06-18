const express = require('express')
const app = express()
const port = 3000
const config = {
  host: 'bd',
  user: 'root',
  password: 'root',
  database: 'nodedb'
};

const mysql = require('mysql')
const connection = mysql.createConnection(config)

const sql = `insert into people(name) values ('Micael Fernandes')` 
connection.query(sql)
connection.end()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port} Micael Fernandes`)
})