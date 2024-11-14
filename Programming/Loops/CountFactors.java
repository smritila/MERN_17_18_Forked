public class CountFactors {
    public static void main(String[] args) {
        int num = 12;
        int i = 1;
        int count = 0;
        while (i <= num) {
            if (num % i == 0) {
                count++;
            }
            i++;
        }
        System.out.println(count);
        if (count == 2) {
            System.out.println("The number is a prime number");
        } else {
            System.out.println("The number is not a prime number");
        }

    }
}
