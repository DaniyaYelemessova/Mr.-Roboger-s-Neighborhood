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
