public class WhileLoop {
    public static void main(String[] args) {
        int i = 1;
        int count = 0;
        while (i <= 15) {
            if (i % 2 == 0) {
                System.out.println(i);
                count++;
            }
            i++;
        }
        System.out.println("Count is: " + count);
    }
}
