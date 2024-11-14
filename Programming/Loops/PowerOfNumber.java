
public class PowerOfNumber {
    public static void main(String[] args) {
        int base = 5;
        int exp = 3;
        int power = 1;
        int i = 1;
        while (i <= exp) {
            power = power * base;
            i++;
        }
        System.out.println(power);
    }
}
