
public class Student {
    String name;
    String ID;
    String contact;

    Student(String n, String id, String con) {
        name = n;
        ID = id;
        contact = con;
    }

    void Display() {
        System.out.println("Name: " + name);
        System.out.println("ID: " + ID);
        System.out.println("Contact: " + contact);
    }

    public static void main(String[] args) {
        Student s1 = new Student("Rakesh", "RAK100", "981232323");
        s1.Display();

        Student s2 = new Student("Ramesh", "Ram123", "1234567890");
        s2.Display();
    }
}
