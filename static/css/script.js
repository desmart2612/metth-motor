let drop = 0;
let card;

function lamborghini() {
    if (drop == 0){
        card = document.createElement('div');
        let div1 = document.createElement('div');
        let div2 = document.createElement('div');
        let div3 = document.createElement('div');
        let pic1 = document.createElement('img');
        let pic2 = document.createElement('img');
        let pic3 = document.createElement('img');

        pic1.setAttribute("src", "../static/images/WhatsApp Image 4.jpg");
        pic2.setAttribute("src", "../static/images/TG LAMBO230309_0013.jpg");
        pic3.setAttribute("src", "../static/images/Lamborghini Huracan STO web.webp");
        card.setAttribute("id", "container");

        // Text below each image
        let text1 = document.createElement('p');
        text1.textContent = "Lamborghini Urus  Selling @ only 40M";
        let description1 = document.createElement('p');
        description1.textContent = "Vehicle Type: front-engine, all-wheel-drive, 5-passenger, 4-door wagon. twin-turbocharged and intercooled DOHC 32-valve V-8, aluminum block and heads, direct fuel injection Displacement: 244 in3, 3996 cm3 Power: 657 hp @ 6000 rpm Torque: 627 lb-ft @ 2300 rpm";

        let text2 = document.createElement('p');
        text2.textContent = "Lamborghini Revuelto";
        let description2 = document.createElement('p');
        description2.textContent = "Engine Type	V12 NA 6.5l Engine Displacement	6498 cc Max Power	814bhp@9250rpm Emission Norm Compliance	BS VI 2.0 Max Torque	725Nm@6750rpm";

        let text3 = document.createElement('p');
        text3.textContent = "Lamborghini Hurracan";
        let description3 = document.createElement('p');
        description3.textContent = "Engine TypeV ,Type Petrol EngineDisplacement (cc)5204Max Power640bhp@8000rpmMax Torque600Nm@6500rpmNo. of cylinder10";

        div1.appendChild(pic1);
        div1.appendChild(text1); // Append text below Image 1
        div1.appendChild(description1);
        div2.appendChild(pic2);
        div2.appendChild(text2); // Append text below Image 2
        div2.appendChild(description2);
        div3.appendChild(pic3);
        div3.appendChild(text3); // Append text below Image 3
        div3.appendChild(description3);

        card.appendChild(div1);
        card.appendChild(div2);
        card.appendChild(div3);

        document.getElementById("content").appendChild(card);

        drop = 1;
    }
    else{
        document.getElementById("content").removeChild(card);
        drop = 0;
    }
}


function bmw() {
    if (drop == 0){
        card = document.createElement('div');
        let div1 = document.createElement('div');
        let div2 = document.createElement('div');
        let div3 = document.createElement('div');
        let pic1 = document.createElement('img');
        let pic2 = document.createElement('img');
        let pic3 = document.createElement('img');

        pic1.setAttribute("src", "../static/images/cars1.jpg");
        pic2.setAttribute("src", "../static/images/IMG-20231121-WA0034.jpg");
        pic3.setAttribute("src", "../static/images/IMG-20231121-WA0032.jpg");
        card.setAttribute("id", "container");

        card.style.borderColor = "white";
        card.style.borderRadius = "20px";

        // Text below each image
        let text1 = document.createElement('p');
        text1.textContent = "";

        let text2 = document.createElement('p');
        text2.textContent = "";

        let text3 = document.createElement('p');
        text3.textContent = "";

        div1.appendChild(pic1);
        div1.appendChild(text1); // Append text below Image 1
        div2.appendChild(pic2);
        div2.appendChild(text2); // Append text below Image 2
        div3.appendChild(pic3);
        div3.appendChild(text3); // Append text below Image 3

        card.appendChild(div1);
        card.appendChild(div2);
        card.appendChild(div3);

        document.getElementById("content").appendChild(card);

        drop = 1;
    }
    else{
        document.getElementById("content").removeChild(card);
        drop = 0;
    }
}


function mercedes() {
    if (drop === 0) {
        card = document.createElement('div');
        let div1 = document.createElement('div');
        let div2 = document.createElement('div');
        let div3 = document.createElement('div');
        let pic1 = document.createElement('img');
        let pic2 = document.createElement('img');
        let pic3 = document.createElement('img');

        pic1.setAttribute("src", "../static/images/WhatsApp Image 3.jpg");
        pic2.setAttribute("src", "../static/images/IMG-20231121-WA0030.jpg");
        pic3.setAttribute("src", "../static/images/IMG-20231121-WA0031.jpg");
        card.setAttribute("id", "container");

        card.style.borderColor = "white";
        card.style.borderRadius = "20px";

        // Text below each image
        let text1 = document.createElement('p');
        text1.textContent = "";

        let text2 = document.createElement('p');
        text2.textContent = "";

        let text3 = document.createElement('p');
        text3.textContent = "";

        div1.appendChild(pic1);
        div1.appendChild(text1); // Append text below Image 1
        div2.appendChild(pic2);
        div2.appendChild(text2); // Append text below Image 2
        div3.appendChild(pic3);
        div3.appendChild(text3); // Append text below Image 3

        card.appendChild(div1);
        card.appendChild(div2);
        card.appendChild(div3);

        document.getElementById("content").appendChild(card);

        drop = 1;
    } else {
        document.getElementById("content").removeChild(card);
        drop = 0;
    }
}
function bugatti() {
    if (drop == 0){
        // Create an iframe element
        card = document.createElement('div');
        let div1 = document.createElement('div');
        let div2 = document.createElement('div');
        let div3 = document.createElement('div');
        let pic1 = document.createElement('img');
        let pic2 = document.createElement('img');
        let pic3 = document.createElement('img');

        pic1.setAttribute("src", "../static/images/WhatsApp Image 2023-11-21 at 14.40.55_73b6a2d0.jpg");
        pic1.setAttribute("class","pic");
        pic2.setAttribute("src", "../static/images/WhatsApp Image 2023-11-21 at 13.06.55_6acc44ab.jpg");
        pic3.setAttribute("src", "../static/images/WhatsApp Image 2023-11-21 at 14.40.12_53ed2300.jpg");
        card.setAttribute("id", "container");

        card.style.borderColor = "white";
        card.style.borderRadius = "20px";

        // Text below each image
        let text1 = document.createElement('p');
        text1.textContent = "";
        text1.setAttribute("class","details");

        let text2 = document.createElement('p');
        text2.textContent = "";

        let text3 = document.createElement('p');
        text3.textContent = "";

        div1.appendChild(pic1);
        div1.appendChild(text1); // Append text below Image 1
        div2.appendChild(pic2);
        div2.appendChild(text2); // Append text below Image 2
        div3.appendChild(pic3);
        div3.appendChild(text3); // Append text below Image 3

        card.appendChild(div1);
        card.appendChild(div2);
        card.appendChild(div3);

        document.getElementById("content").appendChild(card);

        drop = 1;
    }
    else{
        document.getElementById("content").removeChild(card);
        drop = 0;
    }
}
function Rangerover() {
    if (drop == 0){
        // Create an iframe element
        card = document.createElement('div');
        let div1 = document.createElement('div');
        let div2 = document.createElement('div');
        let div3 = document.createElement('div');
        let pic1 = document.createElement('img');
        let pic2 = document.createElement('img');
        let pic3 = document.createElement('img');

        pic1.setAttribute("src", "../static/images/range1.jpg");
        pic2.setAttribute("src", "../static/images/range2.jpg");
        pic3.setAttribute("src", "../static/images/range3.jpg");
        card.setAttribute("id", "container");

        card.style.borderColor = "white";
        card.style.borderRadius = "20px";

        // Text below each image
        let text1 = document.createElement('p');
        text1.textContent = "";
        text1.setAttribute("class","details");

        let text2 = document.createElement('p');
        text2.textContent = "";

        let text3 = document.createElement('p');
        text3.textContent = "";

        div1.appendChild(pic1);
        div1.appendChild(text1); // Append text below Image 1
        div2.appendChild(pic2);
        div2.appendChild(text2); // Append text below Image 2
        div3.appendChild(pic3);
        div3.appendChild(text3); // Append text below Image 3

        card.appendChild(div1);
        card.appendChild(div2);
        card.appendChild(div3);

        document.getElementById("content2").appendChild(card);

        drop = 1;
    }
    else{
        document.getElementById("content2").removeChild(card);
        drop = 0;
    }
}
function Ferrarri() {
    if (drop == 0){
        // Create an iframe element
        card = document.createElement('div');
        let div1 = document.createElement('div');
        let div2 = document.createElement('div');
        let div3 = document.createElement('div');
        let pic1 = document.createElement('img');
        let pic2 = document.createElement('img');
        let pic3 = document.createElement('img');

        pic1.setAttribute("src", "../static/images/ferrarri1.jpg");
        pic2.setAttribute("src", "../static/images/ferrarri2.jpg");
        pic3.setAttribute("src", "../static/images/ferrarri3.jpg");
        card.setAttribute("id", "container");

        card.style.borderColor = "white";
        card.style.borderRadius = "20px";

        // Text below each image
        let text1 = document.createElement('p');
        text1.textContent = "";
        text1.setAttribute("class","details");

        let text2 = document.createElement('p');
        text2.textContent = "Description for Image 2";

        let text3 = document.createElement('p');
        text3.textContent = "Description for Image 3";

        div1.appendChild(pic1);
        div1.appendChild(text1); // Append text below Image 1
        div2.appendChild(pic2);
        div2.appendChild(text2); // Append text below Image 2
        div3.appendChild(pic3);
        div3.appendChild(text3); // Append text below Image 3

        card.appendChild(div1);
        card.appendChild(div2);
        card.appendChild(div3);

        document.getElementById("content2").appendChild(card);

        drop = 1;
    }
    else{
        document.getElementById("content2").removeChild(card);
        drop = 0;
    }
}
function mazda() {
    if (drop == 0){
        // Create an iframe element
        card = document.createElement('div');
        let div1 = document.createElement('div');
        let div2 = document.createElement('div');
        let div3 = document.createElement('div');
        let pic1 = document.createElement('img');
        let pic2 = document.createElement('img');
        let pic3 = document.createElement('img');

        pic1.setAttribute("src", "../static/images/mazda1.jpg");
        pic2.setAttribute("src", "../static/images/mazda2.jpg");
        pic3.setAttribute("src", "../static/images/mazda3.jpg");
        card.setAttribute("id", "container");

        card.style.borderColor = "white";
        card.style.borderRadius = "20px";

        // Text below each image
        let text1 = document.createElement('p');
        text1.textContent = "";
        text1.setAttribute("class","details");

        let text2 = document.createElement('p');
        text2.textContent = "Description for Image 2";

        let text3 = document.createElement('p');
        text3.textContent = "Description for Image 3";

        div1.appendChild(pic1);
        div1.appendChild(text1); // Append text below Image 1
        div2.appendChild(pic2);
        div2.appendChild(text2); // Append text below Image 2
        div3.appendChild(pic3);
        div3.appendChild(text3); // Append text below Image 3

        card.appendChild(div1);
        card.appendChild(div2);
        card.appendChild(div3);

        document.getElementById("content2").appendChild(card);

        drop = 1;
    }
    else{
        document.getElementById("content2").removeChild(card);
        drop = 0;
    }
}
function audi() {
    if (drop == 0){
        // Create an iframe element
        card = document.createElement('div');
        let div1 = document.createElement('div');
        let div2 = document.createElement('div');
        let div3 = document.createElement('div');
        let pic1 = document.createElement('img');
        let pic2 = document.createElement('img');
        let pic3 = document.createElement('img');

        pic1.setAttribute("src", "../static/images/audi1.jpg");
        pic2.setAttribute("src", "../static/images/audi2.jpg");
        pic3.setAttribute("src", "../static/images/audi3.jpg");
        card.setAttribute("id", "container");

        card.style.borderColor = "white";
        card.style.borderRadius = "20px";

        // Text below each image
        let text1 = document.createElement('p');
        text1.textContent = "";
        text1.setAttribute("class","details");

        let text2 = document.createElement('p');
        text2.textContent = "Description for Image 2";

        let text3 = document.createElement('p');
        text3.textContent = "Description for Image 3";

        div1.appendChild(pic1);
        div1.appendChild(text1); // Append text below Image 1
        div2.appendChild(pic2);
        div2.appendChild(text2); // Append text below Image 2
        div3.appendChild(pic3);
        div3.appendChild(text3); // Append text below Image 3

        card.appendChild(div1);
        card.appendChild(div2);
        card.appendChild(div3);

        document.getElementById("content2").appendChild(card);

        drop = 1;
    }
    else{
        document.getElementById("content2").removeChild(card);
        drop = 0;
    }
}