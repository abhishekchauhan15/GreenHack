const jsonfile = require('jsonfile')
const moment = require('moment')
const simpleGit = require('simple-git')
const random = require('random')



const FILE_PATH = './data.json'




const makeCommit = (n) => {

    if (n === 0)
        return simpleGit().push()
    //number of weeks 
    const x = random.int(0, 54);

    //number of days
    const y = random.int(0, 6);
     
    //for formatting the date
    const DATE =moment().subtract(1,'y').add(1,'d').add(x,'w').add(y,'d').format('YYYY-MM-DD');
    
    const data = {
        date:DATE
    }

    console.log(DATE);
    
    //typeof file you want to edit . writeFile(filepath , data you want to write)
    jsonfile.writeFile(FILE_PATH, data, ()=> {
        
        //([list of file paths you want to add])
        simpleGit().add([FILE_PATH]).commit(DATE, { '--date': DATE }, makeCommit.bind(this , --n ));
        
    })

}


makeCommit(12);

