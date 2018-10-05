app.get('/users', (req, res) => {
  UserService.getAllUsers()
})

app.get('/users/:name', (req, res) => {
  UserService.getUserByName(req.params.name)
})

app.post('/users',  (req, res) => {
  UserService.insertUser(req.body)
})
