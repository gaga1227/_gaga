package ch01;

public class AbstractModifierSubclassDemo {
	public static void main(String[] args) {
		// reference variables may be declared with an abstract type
		AbstractModifier abstractModifier = new AbstractModifierSubclass();
		abstractModifier.setInfo("some data");
		System.out.println(abstractModifier.getInfo());
	}
}
