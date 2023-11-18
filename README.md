## <div align="center">Mr. Roboger's Neighborhood Number Replacement</div>

#### <div align="center">💻 _Learning project for practicing Arrays and Looping in JavaScript  11/07/2023_ </div>

**_<p align="right">By Daniya Yelemessova_**</p>

<p align="center">
  <img src="images/js.png" alt="js" width="30"/>
</p>

![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)

## <div align="center"> 🛠️ _Technologies used:_

- HTML
- CSS
- JavaScript
- Visual Studio Code
- GIT

![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)

### <div align="center"> 🤔 _Description:_

The "Mr. Roboger's Neighborhood number replacement" is a web application that takes a user-inputted number and generates a list of values from 0 to the provided number, each with unique substitutions:

* Numbers containing the digit 1 will have all their digits replaced with "Beep!"
(e.g., 109, 11, or 1 become "Beep!")

* Numbers containing the digit 2 will have all their digits replaced with "Boop!"
(e.g., 2, 24, or 2099 become "Boop!")

* Numbers containing the digit 3 will have all their digits replaced with "Won't you be my neighbor?"
(e.g., 39, 3, or 8763 become "Won't you be my neighbor?")


![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)

## <div align="center"> 🚥 _Installation_

<details>
To set up this project locally for development or testing purposes, follow these steps:

To get started, you'll need to clone this repository to your local machine. Open your terminal or command prompt and use the following command to do so:
1. git clone https://github.com/DaniyaYelemessova/Mr.-Roboger-s-Neighborhood.git
2. Navigate to the Project Directory, using **cd**
3. Open the project using **code .**
</details>

![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)


## <div align="center"> ⌨️ _Tests_

```
Describe: beepBoop()

Test: "It should return an array of numbers from 0 to the user's inputted number"
Code: beepBoop(5);
Expected Output: [0, 1, 2, 3, 4, 5]

Test: "It should replace numbers that contain a "1" with "Beep"
Code: beepBoop(1)
Expected Output: [0,"Beep"]

Test: "It should replace numbers that contain a "2" with "Boop"
Code: beepBoop(2)
Expected Output: [0, "Beep", "Boop"]

Test: "It should replace numbers that contain a "3" with "Won't you be my neighbor?"
Code: beepBoop(3)
Expected Output: [0, "Beep", "Boop", "Won't you be my neighbor?]

Test: "test for Hierarchy of Substitutions. The number 12 should be replaced with "Boop!"."
Code: beepBoop(12)
Expected Output: [0, 'Beep', 'Boop!', "Won't you be my neighbor?", 4, 5, 6, 7, 8, 9, 'Beep', 'Beep', 'Boop!']

Test: "test for Hierarchy of Substitutions. The number 13 should be replaced with "Won't you be my neighbor?"."
Code: beepBoop(13)
Expected Output: [0, 'Beep', 'Boop!', "Won't you be my neighbor?", 4, 5, 6, 7, 8, 9, 'Beep', 'Beep', 'Boop!', "Won't you be my neighbor?"]

Test: "test for Hierarchy of Substitutions. The number 123 should be replaced with "Won't you be my neighbor?"."
Code: beepBoop(123)
Expected Output: [0, 'Beep', 'Boop!', "Won't you be my neighbor?", 4, 5, 6, 7, 8, 9, 'Beep', 'Beep', 'Boop!', "Won't you be my neighbor?".........123: "Won't you be my neighbor?"]

Test: "test for number 8"
Code: beepBoop(8)
Expected Output: [0, 'Beep', 'Boop!', "Won't you be my neighbor?", 4, 5, 6, 7, 8]

```

![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)

## <div align="center"> <img src="images/github.png" alt="github icon" width="30px"> _Link to site on Github Pages:_

- [GitHub page link](https://github.com/DaniyaYelemessova/Mr.-Roboger-s-Neighborhood.git)

![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)

## <div align="center"> _Known Issues_

-no known issues at this time.

## <div align="center"> 📬 _Contact Information_

#### For any questions _[LinkedIn](www.linkedin.com/in/daniya-collings)_

## <div align="center"> 📘 _License and copyright:_

> **_© Daniya Yelemessova, 2023_**  
> ⚖️ _[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)_



