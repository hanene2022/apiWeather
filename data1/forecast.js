const request= require('request')
const forecast= (latitude,longtitude,calback)=>{


    const url=
"http://api.weatherapi.com/v1/current.json?key=0dbce5dafcfb4881858210806240304&q=" + latitude +"," +longtitude 

request( {url ,json:true}, (error, response)=>{

   

if(error){
        calback("unable to connect weather api service", undefined)
    
    }else if(response.body.error){
        calback(response.body.error.message,undefined)
    }
    else{
        calback(undefined,
            response.body.location.name +"it is : "+
            response.body.current.condition.text
        + " and temps is :"+ response.body.current.temp_c)
    }
})

}
module.exports= forecast