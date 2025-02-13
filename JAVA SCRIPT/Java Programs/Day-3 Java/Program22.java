//package Java Programs.Day-3 Java;
// Wap to calculate the sum of odd digit in a number?

import java.util.Scanner;

public class Program22 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter the value of n: ");
        int n = sc.nextInt();
        int sum = 0;
        int rem = 0;
        while (n > 0) {
            rem = n % 10;
            if (rem % 2 == 1) {
                sum = sum + rem;
            }
            n = n / 10;
        }
        System.out.println("The Total value of Odd Element is: " + sum);
    }
}
