
const TOP_LEFT_TEXT = 'amirlogic';



module.exports = (ndl='',hdata={})=>{

    if(ndl == 'page-simple-twocol-multirow'){

        let htcont = `<nav class="navbar navbar-light">
		
            <span class="navbar-brand mx-4" href="#">${TOP_LEFT_TEXT}</span>
            
            <div class="navbar-text mx-4"><a href="/userpanel" title="userpanel"><strong>&gt;&gt;</strong></a></div>

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

        </main>
        
        <footer>
		
		    <div style="padding:20px 0;">Copyright 2023</div>
		
	    </footer>`

        return htcont
    }
}

