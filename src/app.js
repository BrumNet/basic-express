//initialise express app
const app = require("express")();

//import services
const items = require("./items/index.js")

//routes to services
app.use('/api/v1/items', items);
//app.use('/api/v2',  newroute);

//test api
app.get('/',  (req,res) => {
    res.send({message: 'ping success: connected to server. Append api/version/*number* to access api. e.g api/version/1', code: 200})
});

app.listen(3000, () =>
{
 console.log('Server active')
});//test/production port"Console Log port type"