//package Java Programs.Day-3 Java;
//print palindrome btw 10 to 200?

import java.util.Scanner;

public class Program30 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter the first value: ");
        int n1 = sc.nextInt();
        System.out.println("Enter the second value: ");
        int n2 = sc.nextInt();
        System.out.println("Palindrome number b/w " + n1 + " and " + n2 + " are:");
        for (int i = n1; i < n2; i++) {
            if (isPalindrome(i)) {
                System.out.println(i + " ");
            }
        }

    }

    public static boolean isPalindrome(int n) {
        int z = n;
        int rev = 0;
        while (n > 0) {
            rev = rev * 10 + n % 10;
            n = n / 10;

        }
        return (rev == z);

    }
}
