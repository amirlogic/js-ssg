
const hstem = require('./hstem')

const xhead = require('./xhead')

const content = require('./content')

const { webpage } = require('htwrite')


/* {rows:[

    {
        leftcol:`<h5>Welcome to my GitHub Repo</h5>
                            
                <p>My name is Amir, I have been learning web technologies since I created my first web page back in 2007</p>

                <p>Two years later I created my first dynamic website using PHP and MySQL</p>`,

        rightcol:`<h5>Data-driven web applications</h5>

                <p>Web applications have a fantastic power, but I think that this power can be made more accessible, especially when it comes to working with data.</p>

                <p>In 2017, I started working on NestedLogic, a web-based tool to create full stack web applications using vanilla javascript. 
                    Two years later, it was functionnal, and I used it to successfully create an inventory management software.</p>`
    },

    {
        leftcol:`<h5>React and Typescript</h5>
                        
                <p><a href="https://github.com/amirlogic/react-drag-and-drop" target="_blank">Drag and Drop using Beautiful DnD</a></p>

                <p><a href="https://github.com/amirlogic/drag-and-drop-quiz" target="_blank">Drag and Drop Quiz</a></p>

                <p><a href="https://github.com/amirlogic/didactic-robot" target="_blank">To-do list</a></p>`,

        rightcol:`<h5>NRGA (energia) stack</h5>
                        
                <p>Next.js Redis GraphQL and API</p>

                <p><a href="https://github.com/amirlogic/energia-me" target="_blank">My Personal Blog</a></p>

                <p><a href="https://github.com/amirlogic/funbio" target="_blank">Functional Biology</a></p>`
    },

   

]} */

//console.log(htcontent)

const fs = require('fs');


/* let devhtml = getHtml([
    
    ['b63ac4e2-6ba6-48cd-a774-58d51e1eac12', 
    
    {title:"demo",list:['first','second']}]

]) */

function writePage(){

    let htcontent = hstem('page-simple-twocol-multirow',content.output)

    let filecontent = webpage("DEMO",xhead,htcontent)

    return fs.writeFile('output.html', filecontent, function (err) {

        if (err) throw err;
        console.log('html file created!');
    });
}

writePage()