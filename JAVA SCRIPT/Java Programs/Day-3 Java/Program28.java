
//package Java Programs.Day-3 Java;
import java.util.Scanner;
//Wap to reverse the number?
public class Program28 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter the number: ");
        int n = sc.nextInt();
        int rev = 0;
        while (n > 0) {

            rev = rev * 10 + n % 10;
            n = n / 10;

        }
        System.out.println("Reverse Number is: " + rev);
    }
}
