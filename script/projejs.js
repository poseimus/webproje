
            
            $(document).ready(function(){
                var h1 = document.getElementById("my-h1-class");

                h1.addEventListener("mouseover", mouseOver);
                h1.addEventListener("mouseout", mouseOut);

                function mouseOver(){
                    h1.style.color = 'red';
                }
                
                function mouseOut(){
                    h1.style.color = 'white';
                }
                
                $(".iclink").click(function(){
                    alert(" Sayfaya Yönlendiriliyorsunuz!"); 
                });
            });