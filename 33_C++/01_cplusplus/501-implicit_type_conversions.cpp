// Implicit conversion
#include <iostream>
#include <typeinfo>
using namespace std;

//classes
class A {};

class B {
  public:
	// conversion from A (constructor):
	B (const A& x) {}
	// conversion from A (assignment):
	B& operator= (const A& x) {return *this;}
	// conversion to A (type-cast operator)
	operator A() {return A();}
};

int main () {
	//Implicit conversions are automatically performed
	//when a value is copied to a compatible type
	short a=2000;
	int b;
	b=a;
	cout << "a: " << a << " type: " << typeid(a).name() << endl;
	cout << "b: " << b << " type: " << typeid(b).name() << endl;
	
	//Implicit conversions with classes
	A a1, a2, a3;
	B b1 = a1;    // calls constructor
	b1 = a2;      // calls assignment
	a3 = b1;      // calls type-cast operator

	return 0;
}
