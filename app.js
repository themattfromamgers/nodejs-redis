const express = require('express');
const redis = require('redis');

const app = express();

app.set('view engine', 'ejs')

app.use(express.urlencoded({extended: true}))
app.use(express.json())

const client = redis.createClient({
    host: "redis-12709.c12.us-east-1-4.ec2.cloud.redislabs.com",
    port: 12709,
    password: "Vm3ljTDYV48baHs7rrrX8ZSXndm4tHpk"
});


app.get('/', (req,res)=>{
	client.set('gitarcı', 'ahmed')
	const exd = client.get('gitarcı')
	res.render('Index', {exd: exd});
	
})

app.listen(80, ()=>{
	console.log('listen 80 to website');
})