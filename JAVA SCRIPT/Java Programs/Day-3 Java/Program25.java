//package Java Programs.Day-3 Java;
//wap to count how many digit are present in a number?

import java.util.Scanner;

public class Program25 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter the value of n: ");
        int n = sc.nextInt();
        int count = 0;
        //int rem=0;
        while (n > 0) {
            int rem = n % 10;
            count++;
            n = n / 10;
        }
        System.out.println("Count of digit is: " + count);
    }
}
