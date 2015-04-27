

<!--navbar code-->

   <nav>
                <a id="current-link" href="index.php">Home</a>
                <a href="login.php">Login</a>  
                <a href="register.php">sign up
                    <a href="logout-user.php">logout
              </a>
            </nav>
            


<!--this lets everything show up when you first run the project-->
    <?php
       require_once (__DIR__ . "/controller/login-verify.php");
       require_once (__DIR__."/view/header.php"); 
       if(authenticateUser()){
       require_once (__DIR__."/view/navigation.php");
       }
       require_once (__DIR__."/controller/create-db.php");       
       require_once (__DIR__."/controller/read-posts.php");
       require_once (__DIR__."/view/footer.php"); 
   ?> 