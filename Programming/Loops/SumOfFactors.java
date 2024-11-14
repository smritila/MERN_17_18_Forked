
import java.util.Scanner;

public class SumOfFactors {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter a number");
        int n = sc.nextInt();
        int sum = 0;
        int i = 1;
        while (i <= n) {
            if (n % i == 0) {
                sum = sum + i;
            }
            i++;
        }
        System.out.println("Sum of factors of " + n + " is " + sum);

    }
}
