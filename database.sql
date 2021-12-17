drop table reservation ;
drop table voyage ;
drop table trajet ;
drop table utilisateur ;

CREATE TABLE utilisateur (
 id SERIAL ,
 identifiant VARCHAR(45) NULL ,
 pass VARCHAR(45) NULL ,
 nom VARCHAR(45) NULL ,
 prenom VARCHAR(45) NULL ,
 avatar VARCHAR(200) NULL ,
 PRIMARY KEY (id) );


CREATE TABLE trajet (
 id SERIAL ,
 depart VARCHAR(25) NULL ,
 arrivee VARCHAR(25) NULL ,
 distance INT NULL , 
 PRIMARY KEY (id) );


CREATE TABLE voyage (
 id SERIAL ,
 conducteur INT NULL ,
 trajet INT NULL ,
 tarif INT NULL , 
 nbPlace INT NULL ,
 heureDepart INT NULL ,
 contraintes VARCHAR(500),	 
 PRIMARY KEY (id) ,
 CONSTRAINT utilisateur
 FOREIGN KEY (conducteur)
 REFERENCES utilisateur (id )
 ON DELETE NO ACTION
 ON UPDATE NO ACTION,
 CONSTRAINT trajet
 FOREIGN KEY (trajet)
 REFERENCES trajet (id )
 ON DELETE NO ACTION
 ON UPDATE NO ACTION);

CREATE TABLE reservation (
 id SERIAL ,
 voyage INT NULL ,
 voyageur INT NULL ,
 PRIMARY KEY (id) ,
 CONSTRAINT utilisateur
 FOREIGN KEY (voyageur)
 REFERENCES utilisateur (id )
 ON DELETE NO ACTION
 ON UPDATE NO ACTION,
 CONSTRAINT voyage
 FOREIGN KEY (voyage)
 REFERENCES voyage (id )
 ON DELETE NO ACTION
 ON UPDATE NO ACTION);
  
