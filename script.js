import{getJSON} from "https://cdn.jsdelivr.net/gh/jscroot/lib@0.2.0/api.js";
import{renderHTML} from "https://cdn.jsdelivr.net/gh/jscroot/lib@0.2.0/element.js";

getJSON("https://t.if.co.id/714240034/",null,null,responseFunction);
renderHTML("root", "home.html");

function renderDatadariJson() {

    getJSON("https://t.if.co.id/json/iyan.json", "aja", "enak", responseFunction);
}

console.log("Calling renderDatadariJson");

renderDatadariJson();

function responseFunction(response){
    if (response.status === 200) {
        console.log(`HTTP status:`, response.status);
        console.log(`Response data:`, response.data);

    
        // Misalnya, render data ke halaman jika diperlukan
        // renderHTML("root", response.data);
    } else {
        console.error("Error fetching data:", response.status);
    }
}

