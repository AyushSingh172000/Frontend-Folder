// WAP To calculate sum of even digit in a number?

import java.util.Scanner;

public class Program21 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter the value of n: ");
        int n = sc.nextInt();
        int sum = 0;
        int rem = 0;
        while (n > 0) {
            rem = n % 10;
            if (rem % 2 == 0)
                sum = sum + rem;
            n = n / 10;
        }
        System.out.println("The sum of even numbers is: " + sum);
    }

}