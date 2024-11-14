public class PrimeFactors {
    public static void main(String[] args) {
        int num = 6;
        for (int i = 1; i <= num; i++) {
            // if i is a factor of num
            // check if i is a factor or not
            if (num % i == 0) {
                // System.out.println(i);
                int count = 0;
                for (int j = 1; j <= i; j++) {
                    // check if i is prime or nots
                    if (i % j == 0) {
                        // if j is a factor of i
                        count++;
                        // System.out.println("Factors of " + i + " " + j);
                    }
                }
                if (count == 2) {
                    System.out.println("Prime factor of " + num + " is " + i);
                }
            }
        }
    }
}
