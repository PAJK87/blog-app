import React from 'react';

function API() {
    function success() {
        var i;
        const allTitles = [];
        var data = JSON.parse(this.responseText);
        for(i=0; i <= 5; i++){
            allTitles[i] = data.articles[i].title;
        }
        let titles = allTitles[1] + "<br>" + "<br>" + allTitles[2] + "<br>" + "<br>" + allTitles[3] + "<br>" + "<br>" + allTitles[4] + "<br>" + "<br>" + allTitles[5];
        document.getElementById("news").innerHTML = titles;
    }
    
    function error(err){
        console.log('Request Failed', err);
    }
    
    var xhr = new XMLHttpRequest();
    xhr.onload = success;
    xhr.onerror = error;
    xhr.open('GET', 'https://newsapi.org/v2/top-headlines?country=us&apiKey=eb28e9e5a11e47c39191ba2b13309091' )
    xhr.send();
}
window.onload = function () {
    API();
    setInterval(function () {
      API();
    }, 60000);
  }

const Side = () => {
    const myStyle = {
        backgroundColor: "black",
        color: "white",
        padding: "14px 25px",
        textDecoration: "none",
        display: "inline-block",
        fontSize: "35px", 
    }
    const myStyle2 = {
        color: 'black',
    }
    return (
        <div style={{textAlign: "center"}}>
            <a style={myStyle} href='/public/index.html'>Go Home</a>
            <h4 style={myStyle2}>Top Headlines</h4>
            <div style={myStyle2} id="news"></div>
        </div>

    );
}

export default Side;