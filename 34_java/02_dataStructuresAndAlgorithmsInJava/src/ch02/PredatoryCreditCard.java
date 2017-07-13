package ch02;

import ch01.CreditCard;

public class PredatoryCreditCard extends CreditCard {
	// Additional instance variable to parent class
	// annual percentage rate
	private double apr;

	// Constructors are never inherited in Java
	// responsible for properly initializing the fields defined in the superclass
	// if subclass does not make explicit call to super, then an implicit call to super() is made
	public PredatoryCreditCard(
			String customer,
			String bank,
			String account,
			int limit,
			double balance,
			double rate) {

		// initialize superclass attributes
		super(customer, bank, account, limit, balance);
		apr = rate;
	}

	// Overriding the charge method defined in the superclass
	@Override
	public boolean charge(double price) {
		// call inherited method
		boolean isChargeSuccess = super.charge(price);
		if (!isChargeSuccess) {
			balance += 5D;
		}
		return isChargeSuccess;
	}

	// A new method for assessing monthly interest charges
	public void processMonth() {
		if (balance > 0D) {
			double monthlyFactor = Math.pow(1 + apr, 1 / 12);
			balance *= monthlyFactor;
		}
	}
}
