import React from 'react';
import XMLData from './blogposts.xml';


let body = [];
let titles = [];
let image = [];

document.addEventListener('DOMContentLoaded', ()=>{
    //fetch the data as soon as the page has loaded
    fetch(XMLData)
    .then(response=>response.text())
    .then(data=>{
        let parser = new DOMParser();
        let xml = parser.parseFromString(data, "application/xml");
        titles = xml.getElementsByTagName('title');
        let date = xml.getElementsByTagName('date');
        let author = xml.getElementsByTagName('author');
        image = xml.getElementsByTagName('image_path');
        let text = xml.getElementsByTagName('text');
        body = xml.getElementsByTagName('body');
        
        document.getElementById("title1").innerHTML = titles[0].firstChild.nodeValue;
        document.getElementById("date1").innerHTML = date[0].firstChild.nodeValue;
        document.getElementById("author1").innerHTML = author[0].firstChild.nodeValue;
        document.getElementById("summary1").innerHTML = text[0].firstChild.nodeValue;
        const img1 = document.createElement('img');
        img1.setAttribute('src', image[0].firstChild.nodeValue);
        const box = document.getElementById('image1');
        box.appendChild(img1);

        document.getElementById("title2").innerHTML = titles[1].firstChild.nodeValue;
        document.getElementById("date2").innerHTML = date[1].firstChild.nodeValue;
        document.getElementById("author2").innerHTML = author[1].firstChild.nodeValue;
        document.getElementById("summary2").innerHTML = text[1].firstChild.nodeValue;
        const img2 = document.createElement('img');
        img2.setAttribute('src', image[1].firstChild.nodeValue);
        const box2 = document.getElementById('image2');
        box2.appendChild(img2);
        
        document.getElementById("title3").innerHTML = titles[2].firstChild.nodeValue;
        document.getElementById("date3").innerHTML = date[2].firstChild.nodeValue;
        document.getElementById("author3").innerHTML = author[2].firstChild.nodeValue;
        document.getElementById("summary3").innerHTML = text[2].firstChild.nodeValue;
        const img3 = document.createElement('img');
        img3.setAttribute('src', image[2].firstChild.nodeValue);
        const box3 = document.getElementById('image3');
        box3.appendChild(img3);
    });
})

const handleClick = () => {
    const bodyImg = document.createElement("img");
    bodyImg.setAttribute('src', image[0].firstChild.nodeValue);
    document.getElementById("bodyimg").appendChild(bodyImg);
    document.getElementById("bodytitle").innerHTML = titles[0].firstChild.nodeValue;
    document.getElementById("fullpost").innerHTML = body[0].firstChild.nodeValue;

}
const handleClick1 = () => {
    const bodyImg = document.createElement("img");
    bodyImg.setAttribute('src', image[1].firstChild.nodeValue);
    document.getElementById("bodyimg").appendChild(bodyImg);
    document.getElementById("bodytitle").innerHTML = titles[1].firstChild.nodeValue;
    document.getElementById("fullpost").innerHTML = body[1].firstChild.nodeValue;
}
const handleClick2 = () => {
    const bodyImg = document.createElement("img");
    bodyImg.setAttribute('src', image[2].firstChild.nodeValue);
    document.getElementById("bodyimg").appendChild(bodyImg);
    document.getElementById("bodytitle").innerHTML = titles[2].firstChild.nodeValue;
    document.getElementById("fullpost").innerHTML = body[2].firstChild.nodeValue;
}
const Main = () => {

    const myStyle2 = {
        listStyleType: 'none',
    }

    return (
        <div>
            <div id="bodyimg"></div>
            <h3 id="bodytitle"></h3>
            <div id="fullpost">
                <ul style={myStyle2}>
                    <li onClick={handleClick}><h1 id="title1"></h1></li>
                        <ul style={myStyle2}>
                            <li id='date1'></li>
                            <li id='author1'></li>
                            <li id='image1'></li> 
                            <li id='summary1'></li>
                            <li>&nbsp;</li>
                        </ul>
                        <li onClick={handleClick1}><h1 id="title2"></h1></li>
                        <ul style={myStyle2}>
                            <li id='date2'></li>
                            <li id='author2'></li>
                            <li id='image2'></li> 
                            <li id='summary2'></li>
                            <li>&nbsp;</li>
                        </ul>
                        <li onClick={handleClick2}><h1 id="title3"></h1></li>
                        <ul style={myStyle2}>
                            <li id='date3'></li>
                            <li id='author3'></li>
                            <li id='image3'></li> 
                            <li id='summary3'></li>
                        </ul>
                </ul>
            </div>  
        </div>
    );
}

export default Main;