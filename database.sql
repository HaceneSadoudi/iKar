-- ----------------------------
-- Sequence structure for reservation_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "reservation_id_seq";
CREATE SEQUENCE "reservation_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 9223372036854775807
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for trajet_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "trajet_id_seq";
CREATE SEQUENCE "trajet_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 9223372036854775807
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for utilisateur_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "utilisateur_id_seq";
CREATE SEQUENCE "utilisateur_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 9223372036854775807
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for voyage_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "voyage_id_seq";
CREATE SEQUENCE "voyage_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 9223372036854775807
START 1
CACHE 1;


DROP TABLE IF EXISTS "utilisateur";
DROP TABLE IF EXISTS "trajet";
DROP TABLE IF EXISTS "voyage";
DROP TABLE IF EXISTS "reservation";

CREATE TABLE "utilisateur" (
  "id" int4 NOT NULL DEFAULT nextval('utilisateur_id_seq'::regclass),
  "identifiant" varchar(45) COLLATE "pg_catalog"."default",
  "pass" varchar(45) COLLATE "pg_catalog"."default",
  "nom" varchar(45) COLLATE "pg_catalog"."default",
  "prenom" varchar(45) COLLATE "pg_catalog"."default",
  "avatar" varchar(200) COLLATE "pg_catalog"."default"
)
;
-- ----------------------------
-- Primary Key structure for table utilisateur
-- ----------------------------
ALTER TABLE "utilisateur" ADD CONSTRAINT "utilisateur_pkey" PRIMARY KEY ("id");
CREATE TABLE "trajet" (
  "id" int4 NOT NULL DEFAULT nextval('trajet_id_seq'::regclass),
  "depart" varchar(25) COLLATE "pg_catalog"."default",
  "arrivee" varchar(25) COLLATE "pg_catalog"."default",
  "distance" int4
)
;
-- ----------------------------
-- Primary Key structure for table trajet
-- ----------------------------
ALTER TABLE "trajet" ADD CONSTRAINT "trajet_pkey" PRIMARY KEY ("id");
CREATE TABLE "voyage" (
  "id" int4 NOT NULL DEFAULT nextval('voyage_id_seq'::regclass),
  "conducteur" int4,
  "trajet" int4,
  "tarif" int4,
  "nbplace" int4,
  "heuredepart" int4,
  "contraintes" varchar(500) COLLATE "pg_catalog"."default"
)
;
-- ----------------------------
-- Primary Key structure for table voyage
-- ----------------------------
ALTER TABLE "voyage" ADD CONSTRAINT "voyage_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Foreign Keys structure for table voyage
-- ----------------------------
ALTER TABLE "voyage" ADD CONSTRAINT "trajet" FOREIGN KEY ("trajet") REFERENCES "trajet" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE "voyage" ADD CONSTRAINT "utilisateur" FOREIGN KEY ("conducteur") REFERENCES "utilisateur" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
CREATE TABLE "reservation" (
  "id" int4 NOT NULL DEFAULT nextval('reservation_id_seq'::regclass),
  "voyage" int4,
  "voyageur" int4
)
;
-- ----------------------------
-- Primary Key structure for table reservation
-- ----------------------------
ALTER TABLE "reservation" ADD CONSTRAINT "reservation_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Foreign Keys structure for table reservation
-- ----------------------------
ALTER TABLE "reservation" ADD CONSTRAINT "utilisateur" FOREIGN KEY ("voyageur") REFERENCES "utilisateur" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE "reservation" ADD CONSTRAINT "voyage" FOREIGN KEY ("voyage") REFERENCES "voyage" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;