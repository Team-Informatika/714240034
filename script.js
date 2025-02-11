import { getJSON } from "https://cdn.jsdelivr.net/gh/jscroot/lib@0.2.0/api.js"
import { renderHTML, setInner } from "https://cdn.jsdelivr.net/gh/jscroot/lib@0.2.0/element.js"
import { getHash, onHashChange } from "https://cdn.jsdelivr.net/gh/jscroot/lib@0.2.0/url.js"

onHashChange(muncul);
getJSON("https://t.if.co.id/json/iyan.json", null, null, responseFunction);
renderHTML('root', 'home.html')
// renderHTML('cardbenar', 'home.html')

function responseFunction(response) {
    // Logging data untuk debugging
    console.log('HTTP Status:', response.status);
    console.log('Response Data:', response.data);

    // Render avatar
    const avatarSrc = response.data.card.avatar.src;
    const avatarHTML = `<img src="${avatarSrc}" alt="${response.data.card.avatar.alt}">`;
    document.getElementById('avatar').innerHTML = avatarHTML;

    // Render nama
    document.getElementById('nama').textContent = response.data.card.details.name;

    // Render occupation
    document.getElementById('occupation').textContent = response.data.card.details.occupation;

    // Render quote
    const quote = response.data.card.details.quote || "No quote available";
    document.getElementById('quote').textContent = `"${quote}"`;

    // Render about
    const container = document.getElementById('item-list');
    let dataitem = response.data.card.details.about;
    dataitem.forEach((item) => {
        const itemContainer = document.createElement("div");
        itemContainer.className = "item";
        const isiValue = document.createElement("span");
        isiValue.className = "value";
        isiValue.textContent = item.value;
        const isiLabel = document.createElement("span");
        isiLabel.className = "label";
        isiLabel.textContent = item.label;
        itemContainer.appendChild(isiValue);
        itemContainer.appendChild(isiLabel);
        container.appendChild(itemContainer);
    });

    // Render hourly rate
    document.getElementById('harga').textContent = response.data.card.details.rate_hour.price;
    document.getElementById('rate').textContent = response.data.card.details.rate_hour.rate;

    // Render skill description
    document.getElementById('isi').textContent = response.data.card.details.skills.deskripsi;
}