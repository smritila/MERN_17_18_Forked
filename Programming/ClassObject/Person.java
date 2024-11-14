class Person {
    String name;
    String place;

    Person(String n, String p) {
        name = n;
        place = p;
    }

    public void Display() {
        System.out.println("Name: " + name);
        System.out.println("Place: " + place);
  
    }

    public static void main(String[] args) {
        Person person1 = new Person("Ramu", "Delhi");
        person1.Display();
        Person person2 = new Person("Shamu", "Bangalore");
        person2.Display();

    }
}
