
              var coll = document.getElementsByClassName("content1");
              var i;
              
              for (i = 0; i < coll.length; i++) {
                coll[i].addEventListener("click", function() {
                  this.classList.toggle("active");
                  var content = this.nextElementSibling;
                   {
                    content.style.display = "list-item";
                  }
                });
              }
              var coll = document.getElementsByClassName("content");
              var i;
              
              for (i = 0; i < coll.length; i++) {
                coll[i].addEventListener("click", function() {
                  this.classList.toggle("active");
                  var content = this.nextElementSibling;
                   {
                    content.style.display = "none";
                  }
                });
              }