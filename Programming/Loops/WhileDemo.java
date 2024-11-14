class WhileDemo {
    public static void main(String[] args) {
        int num = 12;
        int i = 1;
        while (i <= num) {
            if (num % i == 0) {
                System.out.println(i + " is a factor of " + num);
            }
            i++;
        }
    }
}
// count the number of factors of 12