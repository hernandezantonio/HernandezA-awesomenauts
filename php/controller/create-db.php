<?php

require_once(__DIR__ . "/../model/config.php");




$query = $_SESSION["connection"]->query("CREATE TABLE users ("
        ."id int(11) NOT NULL AUTO_INCREMENT,"
        ."username varchar(30) NOT NULL,"
        ."email varchar(50) NOT NULL,"
        ."password char(128) NOT NULL,"
        ."salt char(128) NOT NULL,"
         ."exp init(4),"
         ."exp1 init(4),"
         ."exp2 init(4),"
         ."exp3 init(4),"
         ."exp4 init(4),"
        ."PRIMARY KEY (id))"); 



 