// Copy assignment
#include <iostream>
#include <string>
using namespace std;

//Objects can not only be copied on construction (when initialized)
//also can be copied on any assignment operation
class MyClass {
  public:
	//defined implicitly by compiler if no 
	//custom copy assignment operator defined
	MyClass& operator= (const MyClass& orig) {
		return *this;
	};
};

int main () {
	MyClass foo;
	MyClass bar (foo);	// object initialization: copy constructor called
	MyClass baz = foo;	// object initialization: copy constructor called
	foo = bar;			// object already initialized: copy assignment called 
		
	return 0;
}
