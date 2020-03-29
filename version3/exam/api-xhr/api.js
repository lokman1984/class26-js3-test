const xhr = new XMLHttpRequest();

// listen for `onload` event
xhr.onload = () => {
    // process response
    if (xhr.status == 200) {
        // parse JSON data
        let data = JSON.parse(xhr.response);
        // console.log(data);
        callback(data);
    } else {
        console.error('Error!');
    }
   
};

function callback(data){

    console.log(data);
   
  
   
    data.forEach(element => {
        let ul = document.createElement('ul')
       
        if(element.id<=1){
            document.body.appendChild(ul)  
          ul.innerHTML=`<li><h3>user name:${element.name}</h3></li>
                        <li><h3>E-mail:${element.email}</h3></li>
                        <li> <h3>city:${element.address.city}</h3></li>`
                        console.log(ul)
          
            
       
       
                       

        }
        
       
    });
    
    
 }

// create a `GET` request
xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');

// send request
xhr.send();