import java.util.Random;
import java.util.Scanner;

class GuessMyNumber {

    private final int MIN;
    private final int MAX;

    private int guessnumber = 0;
    private int guessestaken = 0;

    public GuessMyNumber(int min, int max) {
        MIN = min;
        MAX = max;

        guessnumber = generateNewNumber();

        int guess;

        do {
            guessestaken++;

            guess = getUserInput();

        } while (!checkUserGuess(guess));
    }

    private int getUserInput() {
        Scanner input = new Scanner(System.in);
        String userinput;
        do {
            System.out.print("Guess a number between 1 and 100: ");
            userinput = input.nextLine();
        } while (!isInteger(userinput));
        return Integer.parseInt(userinput);
    }

    private int generateNewNumber() {
        Random random = new Random();
        return random.nextInt(MAX - MIN + 1) + MIN;
    }

    private boolean checkUserGuess(int guess) {
        if (guess == guessnumber) {
            System.out.println("Well done! " + guessnumber + " was my number! You guessed it in " + guessestaken + " guesses.");
            return true;
        } else {
            if (guess > guessnumber) {
                System.out.println("My number is less than " + guess + ".");
            } else {
                System.out.println("My number is greater than " + guess + ".");
            }
        }
        return false;

    }

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
