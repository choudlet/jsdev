var express = require('express');
var path = require('path');
var open = require('open');
import webpack from 'webpack';
import config from '../webpack.config.dev';


const port = 3500;
const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo:true,
  publicPath: config.output.publicPath
}))

app.get('/',(req,res,next)=>{
res.sendFile(path.join(__dirname, '../src/index.html'));
})

app.listen(port, (err)=>{
  if(err) {
    console.log(err);
  } else {
    open('http://localhost:' + port)
  }
})
