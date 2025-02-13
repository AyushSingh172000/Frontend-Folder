//package Java Programs.Day-2 Java;

import java.util.Scanner;

public class Program19 {
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        System.out.println("Enter the number: ");
        int n=sc.nextInt();
        while (n>0) {
            int rem=n%10;
            if (rem%2==1) {
                System.out.println("Odd digit is: "+rem); 
            }
            n=n/10;
            
        }
    }
}
