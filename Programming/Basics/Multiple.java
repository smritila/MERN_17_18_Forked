
public class Multiple {
    public static void main(String[] args) {
        int num = 5;
        int result = 0;
        int i = 1;
        while (i <= 10) {
            result = num * i;
            if (result % 3 == 0) {
                System.out.println(result);
            }
            i++;
        }
    }
}
