var express = require('express');
const si = require('systeminformation');
var cors = require('cors');
var app = express();

app.use(cors());
app.get('/', async function (req, res) {

  let data = await allData();
  
  async function allData() {
    try {


        const cpuData = await si.cpu();
        const memData = await si.mem();
        const batteryData = await si.battery();
        const systemData = await si.system();

        return [ cpuData, memData, batteryData, systemData ];

    } catch (e) {
        console.log(e)
    }
  }

  res.send( data );

});

app.listen(4000, function () {
  console.log('API inicializada en el puerto 4000');
  //si.cpu().then(data => console.log(data));

});