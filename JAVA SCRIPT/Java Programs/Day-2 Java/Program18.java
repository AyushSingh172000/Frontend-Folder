//package Java Programs.Day-2 Java;

import java.util.Scanner;

public class Program18 {
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        System.out.println("Enter the number: ");
        int n=sc.nextInt();
        //int rev=0;
        while (n>0) {
            //rev=rev*10+n%10;
           int rem=n%10;
            if (rem%2==0) 
                System.out.println("Even digit is: "+rem);
            
            n=n/10;
        }
    }
}
