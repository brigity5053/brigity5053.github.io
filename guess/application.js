import java.util.Random;
import java.util.Scanner;

class GuessMyNumber {

    // Min and Max values of number generated
    private final int MIN;
    private final int MAX;

    //The number in which to guess
    private int guessnumber = 0;
    //Total guesses taken
    private int guessestaken = 0;

    public GuessMyNumber(int min, int max) {
        MIN = min;
        MAX = max;

        //Assign a new random number to guessnumber
        guessnumber = generateNewNumber();

        int guess;

        do {
            guessestaken++;

            // Get the user input whilst guess is wrong
            guess = getUserInput();

            //Check user input
        } while (!checkUserGuess(guess));
    }

    // Gets an integer value from user
    private int getUserInput() {
        Scanner input = new Scanner(System.in);
        String userinput;
        do {
            System.out.print("Guess a number between 1 and 100: ");
            // Make the user input a value while input is not an integer
            userinput = input.nextLine();
        } while (!isInteger(userinput));
        //Returns the input parsed as an integer
        return Integer.parseInt(userinput);
    }

    //Generate a new value between MIN and MAX
    private int generateNewNumber() {
        Random random = new Random();
        return random.nextInt(MAX - MIN + 1) + MIN;
    }

    private boolean checkUserGuess(int guess) {
        if (guess == guessnumber) {
            //If the user guesses right return true
            System.out.println("Well done! " + guessnumber + " was my number! You guessed it in " + guessestaken + " guesses.");
            return true;
        } else {
            // Return false with appropriate output to console
            if (guess > guessnumber) {
                System.out.println("My number is less than " + guess + ".");
            } else {
                System.out.println("My number is greater than " + guess + ".");
            }
        }
        return false;

    }

    //Returns true when input string is a valid integer
    public static boolean isInteger(String s) {
        try {
            Integer.parseInt(s);
        } catch (NumberFormatException e) {
            return false;
        }
        return true;
    }

    public static void main(String args[]) {
        new GuessMyNumber(0, 100);
    }
}
