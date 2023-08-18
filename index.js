
const hstem = require('./hstem')

const xhead = require('./xhead')

const content = require('./content')

const { webpage } = require('htwrite')

const fs = require('fs');


function writePage(filename){

    let htcontent = hstem('page-simple-twocol-multirow',content[filename])

    let filecontent = webpage(content[filename].pgtitle,xhead,htcontent)

    return fs.writeFile(`${filename}.html`, filecontent, function (err) {

        if (err) throw err;
        console.log(`${filename}.html file created!`);
    });
}

writePage('output')