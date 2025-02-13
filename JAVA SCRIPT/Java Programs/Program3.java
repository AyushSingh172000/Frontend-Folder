import java.util.*;

class Palindrome {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		System.out.println("Enter the String: ");
		String s = sc.nextLine();
		boolean res = checkPalindrome(s);
		if (res) {
			System.out.println(s + "Palindrome String.");

		} else {
			System.out.println(s + "Not a Palindrome String.");
		}
	}

	public static boolean checkPalindrome(String s) {
		s = s.toLowerCase();
		String rev = "";
		for (int i = s.length() - 1; i >= 0; i--) {
			rev = rev + s.charAt(i);
		}
		return s.equals(rev);

	}
}