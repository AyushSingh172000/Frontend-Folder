//package Java Programs.Day-3 Java;
// Wap to find the logic for swapping of two number?

import java.util.Scanner;

public class Program23 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter the value of a: ");
        int a = sc.nextInt();
        System.out.println("Enter the value of b: ");
        int b = sc.nextInt();
        int temp;
        temp = a;
        a = b;
        b = temp;
        System.out.println("Value of a is: " + a);
        System.out.println("Value of b is: " + b);

    }
}
