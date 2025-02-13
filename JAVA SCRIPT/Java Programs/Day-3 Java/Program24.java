//package Java Programs.Day-3 Java;
// Swap without using third variable?

import java.util.Scanner;

public class Program24 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter the value of a: ");
        int a = sc.nextInt();
        System.out.println("Enter the value of b: ");
        int b = sc.nextInt();
        a = a + b;
        b = a - b;
        a = a - b;
        System.out.println("Value of a is: " + a);
        System.out.println("Value of b is: " + b);

    }
}
