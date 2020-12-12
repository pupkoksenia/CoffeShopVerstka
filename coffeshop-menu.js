let xhr = new XMLHttpRequest();
xhr.open('GET', "https://dshamak-bh.ey.r.appspot.com/coffee-products");
xhr.responseType = 'json';
xhr.send();
xhr.onload = function() {
    if (xhr.status != 200) { 
      alert(`Ошибка ${xhr.status}: ${xhr.statusText}`); // Например, 404: Not Found
    } else { 
        let responseObj = xhr.response;
        var res="";

        for(let i=0;i<responseObj.length;i++){
            if(responseObj[i].currency==="usd") responseObj[i].currency="$";
            else responseObj[i].currency="€";
            res+="<div>"+responseObj[i].title+"<span>"+responseObj[i].price+"<span>"+responseObj[i].currency+"</span>"+"</span>"+"</div>";
        }
        
        document.getElementsByClassName("t3")[0].innerHTML=res;

    }
  };
  