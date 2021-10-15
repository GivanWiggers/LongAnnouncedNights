CREATE TABLE party (
  PartyID INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  UserID INT NOT NULL ,
  TourneyID INT DEFAULT NULL ,
  Title VARCHAR(255) DEFAULT NULL,
  Game VARCHAR(255) DEFAULT NULL,
  DateOfParty DATETIME(6) DEFAULT NULL
);  

INSERT INTO `party` (`PartyID`, `UserID`, `TourneyID`, `Title`, `Game`, `DateOfParty`) VALUES
(1, 1, 1, 'First LAN PARTY', 'Rocket League', '2021-10-15 00:00:00'),
(2, 1, 2, 'Second LAN PARTY', 'GangBeasts', '2021-10-22 00:00:00'),
(3, 2, 3, 'Third LAN PARTY', 'None', '2021-10-29 00:00:00');

CREATE TABLE tourney (
  TourneyID INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  UserID INT NOT NULL ,
  TeamID INT DEFAULT NULL,
  TypeOf VARCHAR(255) NOT NULL
);

INSERT INTO `tourney` (`TourneyID`, `UserID`, `TeamID`, `TypeOf`) VALUES
(1, 1, 1, 'FourSingle'),
(2, 1, 2, 'SixSingle'),
(3, 2, 1, 'FourDouble');

CREATE TABLE user (
  UserID INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  Name VARCHAR(255) NOT NULL,   
  Email VARCHAR(255) NOT NULL UNIQUE,
  Password VARCHAR(255) NOT NULL
);

INSERT INTO `user` (`UserID`, `Name`, `Email`, `Password`) VALUES
(1, 'User1', 'user1@gmail.com', '123'),
(2, 'User2', 'user2@gmail.com', '123'),
(3, 'User3', 'user3@gmail.com', '123'),
(4, 'User4', 'user4@gmail.com', '123');

CREATE TABLE team (
	TeamID INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	TourneyID INT NOT NULL,
  Name VARCHAR(255) DEFAULT NULL
);

INSERT INTO `team` (`TeamID`, `TourneyID`, `Name`) VALUES
(1, 1, 'Team1Tourney1'),
(2, 1, 'Team2Tourney1'),
(3, 2, 'Team1Tourney2'),
(4, 2, 'Team2Tourney2'),
(5, 3, 'Team1Tourney3'),
(6, 3, 'Team2Tourney3');

CREATE TABLE userInTeam(
    UserInTeamID INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    TeamID INT NOT NULL ,
    UserID INT NOT NULL 
);

INSERT INTO `userInTeam` (`UserInTeamID`, `TeamID`, `UserID`) VALUES
(1, 1, 1),
(2, 1, 2),
(3, 2, 3),
(4, 2, 4),
(5, 3, 1),
(6, 3, 3),
(7, 4, 2),
(8, 4, 4),
(9, 5, 1),
(10, 5, 4),
(11, 6, 2),
(12, 6, 3);

CREATE TABLE `date`(
    DateID INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    PartyID INT NOT NULL ,
    DateTime DATETIME(6) DEFAULT NULL
);

INSERT INTO `date` (`DateID`, `PartyID`, `DateTime`) VALUES
(1, 1, '2021-10-15 00:00:00'),
(2, 1, '2021-10-16 00:00:00'),
(3, 1, '2021-10-22 00:00:00'),
(4, 2, '2021-10-15 00:00:00'),
(5, 2, '2021-10-22 00:00:00'),
(6, 3, '2021-10-15 00:00:00'),
(7, 3, '2021-10-16 00:00:00'),
(8, 3, '2021-10-22 00:00:00'),
(9, 3, '2021-10-29 00:00:00');

CREATE TABLE `availability`(
    AvailabilityID INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    DateID INT NOT NULL ,
    UserID INT NOT NULL ,
    Available INT NOT NULL 
);

INSERT INTO `availability` (`AvailabilityID`, `DateID`, `UserID`, `Available`) VALUES
(1, 1, 1, 1),
(2, 2, 1, 1),
(3, 3, 1, 3),
(4, 4, 1, 1),
(5, 5, 1, 1),
(6, 6, 1, 2),
(7, 7, 1, 3),
(8, 8, 1, 2),
(9, 9, 1, 1),
(10, 1, 2, 1),
(11, 2, 2, 2),
(12, 3, 2, 1),
(13, 4, 2, 2),
(14, 5, 2, 1),
(15, 6, 2, 2),
(16, 7, 2, 2),
(17, 8, 2, 1),
(18, 9, 2, 1),
(19, 1, 3, 1),
(20, 2, 3, 3),
(21, 3, 3, 2),
(22, 4, 3, 3),
(23, 5, 3, 1),
(24, 6, 3, 3),
(25, 7, 3, 2),
(26, 8, 3, 3),
(27, 9, 3, 1),
(28, 1, 4, 1),
(29, 2, 4, 2),
(30, 3, 4, 1),
(31, 4, 4, 3),
(32, 5, 4, 1),
(33, 6, 4, 2),
(34, 7, 4, 2),
(35, 8, 4, 3),
(36, 9, 4, 1);

