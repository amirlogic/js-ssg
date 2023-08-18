


module.exports = (ndl='',hdata={})=>{

    if(ndl == 'page-simple-twocol-multirow'){

        let htcont = `<nav class="navbar navbar-light">
		
            <span class="navbar-brand " href="#">amirlogic</span>
            
            <div class="navbar-text"><a href="/userpanel" title="userpanel"><strong>&gt;&gt;</strong></a></div>

        </nav>
        
        <main class="container-fluid">

            <div style="margin-top:100px;margin-bottom:40px;min-height:300px;">
                
                ${hdata?.rows.map((r)=>{

                    return `<div class="row">
                    
                                <div class="col-sm" style="font-size:130%;font-weight:300;padding-bottom:50px;">

                                    <div class="celltxt" style="padding:0 4%;">
                                    
                                        ${ r?.leftcol }

                                    </div>

                                </div>

                                <div class="col-sm" style="font-size:130%;font-weight:300;padding-bottom:50px;">
                        
                                    <div class="celltxt" style="padding:0 4%;">
                                        
                                        ${ r?.rightcol }
                                        
                                    </div>
                                    
                                </div>

                            </div>`

                }).join('')}
   
            </div>

        </main>`

        return htcont
    }
}


{/* <div class="row">
                
                <div class="col-sm" style="font-size:130%;font-weight:300;padding-bottom:50px;">
                    
                    <div class="celltxt" style="padding:0 4%;">
                        
                        <h5>React and Typescript</h5>
                        
                        <p><a href="https://github.com/amirlogic/react-drag-and-drop" target="_blank">Drag and Drop using Beautiful DnD</a></p>

                        <p><a href="https://github.com/amirlogic/drag-and-drop-quiz" target="_blank">Drag and Drop Quiz</a></p>

                        <p><a href="https://github.com/amirlogic/didactic-robot" target="_blank">To-do list</a></p>
                        
                    </div>
                    
                    
                    <div style="padding:0 4%;">
                    
                    </div>
                    
                </div>
                
                <div class="col-sm" style="font-size:130%;font-weight:300;padding-bottom:50px;">
                    
                    <div class="celltxt" style="padding:0 4%;">
                        
                        
                        <h5>NRGA (energia) stack</h5>
                        
                        <p>Next.js Redis GraphQL and API</p>

                        <p><a href="https://github.com/amirlogic/energia-me" target="_blank">My Personal Blog</a></p>

                        <p><a href="https://github.com/amirlogic/funbio" target="_blank">Functional Biology</a></p>
                        
                        
                    </div>
                    
                    
                </div>
                
            </div> */}