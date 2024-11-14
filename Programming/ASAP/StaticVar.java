
public class StaticVar {
    // static variables are variables which can be accessed whole throughtout the
    // program execution

    static String myname = "Sachin";

    public static void Display() {
        myname = "Ganguly";
        System.out.println("my name inside Display(): " + myname);
    }

    public static void main(String[] args) {
        System.out.println("myname inside main(): " + myname);
        Display();
    }
}
