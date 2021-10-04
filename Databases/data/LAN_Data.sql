CREATE TABLE party (
  PartyID INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  UserID INT NOT NULL ,
  TourneyID INT NOT NULL ,
  Title VARCHAR(255) DEFAULT NULL,
  Game VARCHAR(255) DEFAULT NULL,
  DateOfParty DATETIME(6) DEFAULT NULL
);  

CREATE TABLE tourney (
  TourneyID INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  UserID INT NOT NULL ,
  Winner VARCHAR(255) DEFAULT NULL,
  TypeOf VARCHAR(255) NOT NULL
);

CREATE TABLE user (
  UserID INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  Name VARCHAR(255) NOT NULL,   
  Email VARCHAR(255) NOT NULL UNIQUE,
  Password VARCHAR(255) NOT NULL
);

CREATE TABLE team (
	TeamID INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	TourneyID INT NOT NULL ,
    Name VARCHAR(255) DEFAULT NULL
);

CREATE TABLE userInTeam(
    UserInTeamID INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    TeamID INT NOT NULL ,
    UserID INT NOT NULL 
);

CREATE TABLE `date`(
    DateID INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    PartyID INT NOT NULL ,
    DateTime DATETIME(6) DEFAULT NULL
);

CREATE TABLE `availability`(
    AvailabilityID INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    DateID INT NOT NULL ,
    UserID INT NOT NULL ,
    Available INT NOT NULL 
);