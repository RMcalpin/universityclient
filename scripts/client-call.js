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
        var query = document.querySelector("#results1");
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

async function getDataAll() {
    var deptget = document.querySelector("#deptAll").value;
    const url = "http://localhost:3000/departments/All/";
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
        var query = document.querySelector("#results2");
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

async function getDataDepartmentInstructor() {
    var deptget = document.querySelector("#deptInst").value;
    const url = "http://localhost:3000/departments/department_instructor/";
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
        var query = document.querySelector("#results3");
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

