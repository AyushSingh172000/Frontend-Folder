import java.util.*;

class ASCIICalculator {
    public static void main(String[] args) {
        System.out.println("Enter the Character:");
        Scanner sc = new Scanner(System.in);
        char x = sc.next().charAt(0);

        System.out.println("The ASCII Value is: " + (x + 0));

    }

}
