//package Java Programs.Day-1 Java;
import java.util.Scanner;
public class Program2 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter the age : ");
        int age = sc.nextInt();
        if (age>=18)
            System.out.println("He is Eligible to Marry.");
        else
            System.out.println("He is not Eligible to Marry.");
    }
}
