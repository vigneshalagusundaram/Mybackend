const express =require('express')
const app = express()
const indexRouter =require('./Route/index')
const usersRouter =require('./Route/users')
const PORT=process.env.PORT || 8000
app.use(express.json())


app.use('/',indexRouter)
app.use('/users',usersRouter)



app.listen(PORT,()=>console.log(`Server Listening ${PORT}`))