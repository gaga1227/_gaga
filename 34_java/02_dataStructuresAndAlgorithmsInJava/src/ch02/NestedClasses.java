package ch02;

public class NestedClasses {
	InnerClass innerClass;

	// constructor
	public NestedClasses() {
		// create non static inner class
		innerClass = new InnerClass();
	}

	public static class UtilClass {
		private UtilClass() {
		}
		public static void help() {
			System.out.println("Help from UtilClass");
		}
	}

	private class InnerClass {
		InnerClass() {
			System.out.println("Inner Class Constructed!");
		}
		void help() {
			System.out.println("Help from InnerClass");
		}
	}

	public static void main(String[] args) {
		// directly access static inner class and member
		NestedClasses.UtilClass.help();

		// access non static inner class and member
		NestedClasses nestedClasses = new NestedClasses();
		nestedClasses.innerClass.help();
	}
}
