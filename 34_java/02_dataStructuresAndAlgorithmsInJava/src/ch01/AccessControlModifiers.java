package ch01;

public class AccessControlModifiers {
	// all classes may access
	public void publicAccess() {

	}

	// Classes that are designated as subclasses can access
	// Classes that belong to the same package can access
	protected void protectedAccess() {

	}

	// other classes in the same package can access
	// but not any classes or subclasses from other packages
	void packagePrivateAccess() {

	}

	// access only from code within the class
	private void privateAccess() {

	}
}
