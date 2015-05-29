(function(){
  'use strict';

  $(document).ready(function(){
    $.ajax({
      url: "https://api.github.com/users/badview08",
    }).then(function(user) {
      console.log(user);
      window.user = user;
    });
  })
})();
