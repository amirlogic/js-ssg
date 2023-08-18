
const hstem = require('./hstem')

let htcontent = hstem('page-simple-twocol-multirow',{rows:[

    {
        leftcol:`<h5>Welcome to my GitHub Repo</h5>
                            
                <p>My name is Amir, I have been learning web technologies since I created my first web page back in 2007</p>

                <p>Two years later I created my first dynamic website using PHP and MySQL</p>`,

        rightcol:`<h5>Data-driven web applications</h5>

                <p>Web applications have a fantastic power, but I think that this power can be made more accessible, especially when it comes to working with data.</p>

                <p>In 2017, I started working on NestedLogic, a web-based tool to create full stack web applications using vanilla javascript. 
                    Two years later, it was functionnal, and I used it to successfully create an inventory management software.</p>`
    }
]})

console.log(htcontent)