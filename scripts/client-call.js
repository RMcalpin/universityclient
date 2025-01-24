async function getData() {
    var deptget = document.querySelector("#dept").value;
    const url = "http://localhost:3000/departments/";
    var urlanddept = url + deptget;
    
    try {
        const response = await fetch(urlanddept, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
            }
        });
  
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }
        
        const json = await response.json();
        console.log(json);
        var query = document.querySelector("h3");
        if (query) {
            query.textContent = JSON.stringify(json, null, 2);
        } else {
            console.error("Element not found");
        }
    } catch (error) {
        if (error.message.includes('Network response was not ok')) {
        
        switch (error.message.split(': ')[1]) {
            case '0':
                console.error('Request failed. Possible network issue.');
                break;
            case '404':
                console.error('Resource not found.');
                break;
        }
        } else {
            console.error('Error:', error);
        }
    }
}
