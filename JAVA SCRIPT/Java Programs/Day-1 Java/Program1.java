import java.util.Scanner;
public class Program1 {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter the number: ");
        int n = sc.nextInt();
        if (n>=0)
            System.out.println(n + ": is the positive number.");
        else
            System.out.println(n + ": is not the positive number.");
    }
}