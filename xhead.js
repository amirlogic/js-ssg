
module.exports = `<style>

header{
    
    height:50px;
    padding:20px 10%;
    font-weight:bold;
    background-color:#FFFFFF;
    color:#555555;
}

header a{
    
    text-decoration:none;
}

#headtext{
    
    color:#8B909A;
    text-align:center;
}

.celltxt p{

    color:#565656;
    font-size:16px;
}

.celltxt h5{

    color:#212a36;
    margin-bottom:20px;
}

#topimg{
    
    background-image: url('datacenter.jpg');
    background-position: top;
    background-repeat: no-repeat;
    background-size:cover;
    height:500px;
}

.purpose{
    
    margin-top:50px;
}

#visform{
    
    background-color:#E5E5E5;
    padding-top:30px;
    padding-bottom:30px;
    
}

h5{

    font-family: Verdana, Geneva, Tahoma, sans-serif;
}

body{
    
    background-color:#FEFEFE;
    font-size:90%;
    
}


footer{
    
    min-height:200px;
    padding-top:30px;
    padding-bottom:100px;
    text-align:center;
    font-size:14px;
    background-color:#EEEEEE;
    color:#777777;
}

@media only screen and (max-width: 600px) {
    
    body {
    font-size:16px;
    }
    
    footer{
        display:none;
    }

    #topimg{
        display:none;
    }
    
}

</style>`