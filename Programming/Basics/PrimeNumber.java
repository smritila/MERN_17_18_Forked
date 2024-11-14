public class PrimeNumber {
    public static void main(String[] args) {
        int num = 11;
        int i = 2;
        int count = 2;
        while (i <= num / 2) {
            if (num % i == 0) {
                System.out.println(i);
                count++;
            }
            i++;
        }
        System.out.println("The number of factors are: " + count);
        if (count == 2) {
            System.out.println(num + " is a prime number");
        } else {
            System.out.println(num + " is not a prime number");
        }
    }
}
