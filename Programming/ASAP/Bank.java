
public abstract class Bank {
    String AccNo;
    String IFSC;

    abstract public void InterestRate();

    abstract public void Loans();

    public void BankBranch() {
        System.out.println("Bank Branch is in Delhi");
    }
}
