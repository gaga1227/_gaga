// Move constructor and assignment
#include <iostream>
#include <string>
using namespace std;

//Moving only happens when the source of the value
//is an unnamed object: function return values or type-casts

//Move constructor is called when an object is initialized 
//on construction using an unnamed temporary

//Move assignment is called when an object is assigned
//the value of an unnamed temporary

//function returning a MyClass object
//MyClass fn();

//default constructor	
//MyClass foo;	

//copy constructor
//MyClass bar = foo;

//copy assignment		
//foo = bar;	
			
//move constructor
//MyClass baz = fn();
	
//move assignment 	
//baz = MyClass();		

//Example
class Example {
    string* ptr;
  public:
	Example (const string& str) : ptr(new string(str)) {}
	~Example () {delete ptr;}
	//move constructor
	Example (Example&& x) : ptr(x.ptr) {x.ptr=nullptr;}
	//move assignment
	Example& operator= (Example&& x) {
		delete ptr;		//delete current ptr
		ptr = x.ptr;	//assign x.ptr val to ptr
		x.ptr = nullptr;//delete x.ptr after moved to ptr
		return *this;
	}
	//access content:
	const string& content() const {return *ptr;}
	//addition:
	Example operator+ (const Example& rhs) {
		return Example(content() + rhs.content());
	}
};

int main () {
	//default construction
	Example foo ("Exam");
	//move-construction
	Example bar = Example("ple");
	//move-assignment
	foo = (foo + bar);
	
	cout << "foo's content: " << foo.content() << '\n';
		
	return 0;
}
