package ch02;

/**
 * Notes:
 * - A widening conversion occurs when a type T is converted into a “wider” type U
 * - Widening conversions are automatically performed to store the result of an expression into a variable, without the need for an explicit cast
 * - A narrowing conversion occurs when a type T is converted into a “narrower” type S
 * - a narrowing conversion of reference types requires an explicit cast
 * - the correctness of a narrowing conversion may not be verifiable by the compiler, its validity should be tested by the Java runtime environment during program execution
 */


public class Casting implements CastingInterface {
	Casting() {
	}

	public static void main(String[] args) {
		Casting casting;
		SubCasting subCasting;
		CastingInterface castingInterface;
		SubCastingInterface subCastingInterface;
		CastingInterface subCastingInterfaceImpl = new SubCastingInterfaceImpl();

		// widening conversion
		// T and U are class types and U is a superclass of T
		casting = new SubCasting();
		// T and U are interface types and U is a superinterface of T
		castingInterface = subCastingInterfaceImpl;
		// T is a class that implements interface U
		castingInterface = new Casting();

		// narrowing conversion
		// T and S are class types and S is a subclass of T
		subCasting = (SubCasting) casting;
		// T and S are interface types and S is a subinterface of T
		castingInterface = (CastingInterface) subCastingInterfaceImpl;
		// T is an interface implemented by class S
		subCastingInterface = (SubCastingInterface) subCastingInterfaceImpl;
	}
}

class SubCasting extends Casting {
	SubCasting() {
	}
}

class SubCastingInterfaceImpl implements SubCastingInterface {
	SubCastingInterfaceImpl() {
	}
}

interface CastingInterface {
}

interface SubCastingInterface extends CastingInterface {
}


