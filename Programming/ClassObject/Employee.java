class Employee {
    String name;
    String EmpId;
    static String Company = "ABC Company";

    public static void main(String[] args) {
        System.out.println("Hi I am main()");
        System.out.println("Everyone works for: " + Company);
        // Object creation
        Employee emp1 = new Employee();
        emp1.name = "Raja";
        emp1.EmpId = "Emp101";
        System.out.println("Employee Name: " + emp1.name);
        System.out.println("Employee ID: " + emp1.EmpId);

        Employee emp2 = new Employee();
        emp2.name = "Ramu";
        emp2.EmpId = "Emp102";
        System.out.println("Employee Name: " + emp2.name);
        System.out.println("Employee Name: " + emp2.EmpId);
    }
}