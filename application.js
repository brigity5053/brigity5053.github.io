import java.util.Random;
 import java.util.Scanner;

 public class NumberGuess {

    public static void main(String[] args) {

        Scanner scan = new Scanner(System.in);
        Random rand = new Random();

        System.out.println("Im thinking of a number from 1 to 10");
        int number = scan.nextInt(10);
         //Generates a random number from 1 to 10
        int number2 = rand.nextInt(10)+1;
        System.out.println("you enter the number" + " " + number);


        for (int counter = -1; counter < 3; counter ++ ){
             if(number!= number2)
               System.out.println("and your random number is:" + " " + number2 + " " + "please try again"); 
             else 
                 System.out.println("your guess number is equal to the random number Good job guessing");

             break;
         }

    }
  } 
