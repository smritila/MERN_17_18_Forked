public class ReverseNumber {
    public static void main(String[] args) {
        int num = 2002;
        int reverse = 0;
        int org = num;
        while (num != 0) {
            int last = num % 10;
            reverse = reverse * 10 + last;
            num = num / 10;
            System.out.println(num);
        }
        if (org == reverse) {
            System.out.println("The number is a palindrome");
        } else {
            System.out.println("The number is not a palindrome");
        }
        System.out.println("The reverse is: " + reverse);
    }
}

// WAP to find whether a number is a pallindrome
// 2002 ==> rev = 2002