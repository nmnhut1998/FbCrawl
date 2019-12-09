var accessToken;

function loginFB(elmnt, clr) {
  FB.login(function (response) {
    if (response.authResponse) {
      console.log("Successfull ");
      console.log("tokennnnn " + response.authResponse.accessToken);
      let token = response.authResponse.accessToken;
      accessToken = token;
      console.log("tk", accessToken)
      // getData(token); 
    } else {
      console.log("Login failed");
    }
  }, {
    scope: 'manage_pages,pages_show_list'
  });
}

function initFB(elmnt, clr) {
  FB.init({
    appId: "708082682934143",
    autoLogAppEvents: true,
    xfbml: true,
    version: 'v5.0'
  });
}

function getData(token) {
  var url = document.getElementById("txtInput").value;
  console.log("url", url);
  FB.api("/" + url, {
      access_token: accessToken
    },
    function (response) {
      console.log("data", response);
      var node = document.createElement("P"); // Create a <li> node
      var textnode = document.createTextNode(JSON.stringify(response)); // Create a text node
      node.appendChild(textnode); // Append the text to <li>
      document.getElementById("myDIV").appendChild(node);
    }
  );
};