const  request= require('request')
// const url="http://api.weatherapi.com/v1/current.json?key=0dbce5dafcfb4881858210806240304&q=London&aqi=no"
// request( {url}, (error, response)=>{
//  // console.log(response.body)
//     const data1= JSON.parse(response.body)
//     // console.log(data1)
//     console.log(data1.location.name)
//     console.log(data1.current.condition.text)

// })
/////////////////////////////////////////////////////////////////

// const url="http://api.weatherapi.com/v1/current.json?key=0dbce5dafcfb4881858210806240304&q=London&aqi=no"
// request( {url ,json:true}, (error, response)=>{
//  // console.log(response.body)
//     // const data1= JSON.parse(response.body)
//     // console.log(data1)
//     console.log(response.body.location.name)
//     console.log(response.body.current.condition.text)
// // json:true: automaticlly convert json to object
// })
// ******************************************************
// const url = "http://api.weatherstack.com/current?access_key=aaf8d75230687617eaa10d75e38c7550&query=germany"
// request( {url ,json:true}, (error, response)=>{
   
//     //  console.log(response.body.location.name)
//     //  console.log(response.body.current.weather_descriptions[0])
    
// if(error){
//     console.log("error has occured")

// }else if(response.body.error){
//     console.log(response.body.error.message)
// }
// else{
//     console.log(response.body.location.name)
// }
// })
//********************************************** */
// const url="http://api.weatherapi.com/v1/current.json?key=0dbce5dafcfb4881858210806240304&q=London&aqi=no"
// request( {url ,json:true}, (error, response)=>{

   
// json:true: automaticlly convert json to object
// if(error){
//         console.log("error has occured")
    
//     }else if(response.body.error){
//         console.log(response.body.error.message)
//     }
//     else{
//         console.log(response.body.location.name,response.body.current.condition.text)
//     }
// })
///////////////////////////////************************* */
// mapbox 
// const geocodeUrl="http://api.mapbox.com/geocoding/v5/mapbox.places/china.json?access_token=pk.eyJ1IjoiaXNsYW0yODQiLCJhIjoiY2wwamEzNmFhMGFtNTNkb3pqaXk4bXNnYSJ9.qYlrWIqo41gXgNNc4h8yIw"
//  request({url:geocodeUrl,json:true},(error,response)=>{
// if(error){
//     console.log("unable to connect geocode service")
// }
// else if (response.body.message){
//     console.log(response.body.message)
// }
// else if(response.body.features.length == 0){
// console.log("unable to find location")
// }
// else{
//     const longtitude= response.body.features[0].center[0]
//     const latitude= response.body.features[0].center[1]
//     console.log(latitude, longtitude)
// }


//  })

// *************************************************
const geocode= require("./data1/geocode")
const forecast= require("./data1/forecast")
// console.log(process.argv)
const country= process.argv[2]
geocode(country, (error,data)=>{
    console.log("ERROR:" ,error)
    console.log("DATA: ",data)

    forecast(data.latitude,data.longtitude , (error, data)=>{
        console.log("ERROR :",error)
        console.log("Data :", data)
    } )
})
// process.argv :value String

 


