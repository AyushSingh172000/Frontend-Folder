//package Java Programs.Day-1 Java;
import java.util.Scanner;
public class Program4 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter the number: ");
        int n = sc.nextInt();
        if (n==8 || n==10 || n==11)
            System.out.println("Good Morning");
        // else if (n==10) 
        //     System.out.println("Good Morning");
        // else if(n==11)
        //     System.out.println("Good Morning");
        else
            System.out.println("Wrong Input");
    }
}
