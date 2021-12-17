const jsonfile = require('jsonfile')
const moment = require('moment')
const simpleGit = require('simple-git')
// const random = require('random')



const FILE_PATH = './data.json'

//for formatting the date
const DATE =moment().subtract(5,'d').format('YYYY-MM-DD');

const data = {
    date:DATE
}

//typeof file you want to edit . writeFile(filepath , data you want to write)
jsonfile.writeFile(FILE_PATH, data, ()=> {
    
    //([list of file paths you want to add])
    simpleGit().add([FILE_PATH]).commit(DATE, { '--date': DATE }).push();
    
})

