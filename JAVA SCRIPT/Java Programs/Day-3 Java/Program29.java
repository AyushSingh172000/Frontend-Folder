//package Java Programs.Day-3 Java;
// Check whether the no. is palindrome or not?

import java.util.Scanner;

public class Program29 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter the number: ");
        int n = sc.nextInt();
        if (checkPalindrome(n)) {
            System.out.println("It is a Palindrome Number.");
        } else
            System.out.println("It is not a Palindrome Numeber");
    }

    public static boolean checkPalindrome(int n) {
        int z = n;
        int rev = 0;
        while (n > 0) {
            rev = rev * 10 + n % 10;
            n = n / 10;

        }
        return (rev == z);

    }
}
