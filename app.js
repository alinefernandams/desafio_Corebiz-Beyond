$(document).ready(function(){
  var urlAPI = 'https://corebiz-test.herokuapp.com/api/v1/products';
  var contentHTML = "";
  $.get(urlAPI, function(res){
      var items = res;
      console.log(res);

      items.forEach(function(prod){     
          var url = prod;
     	
          contentHTML += `
              <div class="item">
                  <a href="${url}" target="_blank">
                      <img src="${prod.imageUrl}">
                  </a>
                  <h3 class="title">${prod.productName}</h3>

                  <h4 class="listprice">de ${prod.listPrice}</h4>
                  <h5 class="price">por ${prod.price} </h5>

                  </div>
          `;
      });
      $('#prateleira-row').html(contentHTML);
  })
})