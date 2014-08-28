// Const member functions
#include <iostream>
using namespace std;

//define normal class
class MyClass {
  public:
	int x;
	MyClass(int val) : x(val) {}
	
	// const member function
	//The member functions of a const object can only be called
	//if they are themselves specified as const members
	//const members shall not modify the state of an object
	//const objects are limited to access only members marked as const
	int get() const {return x;}
};

int main () {
	const MyClass foo(10);
	
	//not valid: x cannot be modified
	//foo.x = 20;

	//ok: data member x can be read
	cout << "foo.x: " << foo.x << '\n';
	
	//demo const get member fn
	cout << "foo.get(): " << foo.get() << '\n'; 
		
	return 0;
}
