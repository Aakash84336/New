var parsedData = null; 
var dropdown = null
fetch('https://archive-api.open-meteo.com/v1/archive?latitude=52.52&longitude=13.41&start_date=2023-04-10&end_date=2023-04-15&daily=temperature_2m_max&timezone=GMT').then((response) =>{
        console.log('resolved' , response); 
        return response.json(); // json is java script object notation is an open data interchange format. 
    } ).then(data => {
        
        parsedData= data["daily"]; // parsed data is used to change to convert data from one format to other. Here, json is converted into array.

        dropdown = document.getElementById('myDropdown'); //The getElementById() method returns an element with a specified value.
        console.log(data["daily"]["time"])
     
        parsedData["time"].forEach(item => {   //  forEach calls a function for each element in an array.
            const option = document.createElement('option'); //document.createElement to dynamically create an HTML element node with the specified name.
            option.value = item; // Set the value attribute
            option.text = item; // Set the text displayed to the user
            console.log(item.values);
            dropdown.appendChild(option); // this line will be adding <option> in <select>
        });

       
    }).catch((err) => {
        console.log('rejected' , err);
    });
    
function onChange( ){ 
    if (parsedData!=null){
        
        document.getElementById("result").innerHTML =  parsedData["temperature_2m_max"][parsedData["time"].indexOf(dropdown.value)]
}
}
   