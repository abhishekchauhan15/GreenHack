const jsonfile = require('jsonfile')
const moment =require('monent')
const FILE_PATH = './data.json'

//for formatting the date
const DATE =moment().format();

const data = {
    date:DATE
}

//typeof fiel you want to edit . writeFile(filepath , data you want to write)
jsonfile.writeFile(FILE_PATH, data )