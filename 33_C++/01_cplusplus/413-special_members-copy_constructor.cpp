// Copy constructor
#include <iostream>
#include <string>
using namespace std;

//When an object is passed a named object of its own type as argument,
//its copy constructor is invoked in order to construct a copy

//class without custom copy nor move constructors defined
class MyClass {
  public:
	int a, b; string c;
};
//implicit copy constructor is provided by compiler:
//which does shallow copy only
//MyClass::MyClass(const MyClass& x) : a(x.a), b(x.b), c(x.c) {}

//copy constructor: deep copy
class Example {
	string* ptr;
  public:
	Example(const string& str) : ptr(new string(str)) {}
	~Example() {delete ptr;}
	//custom defined copy constructor:
	Example(const Example& x) : ptr(new string(x.content())) {}
	//access content:
	const string& content() const {return *ptr;}
	const string* contentPtr() const {return ptr;}
};

int main () {
	//example
	Example orig("This is original content value.");
	Example copy(orig); 
	//Example copy = orig; (same as initiation, not assignment)
	cout << "orig.contentPtr(): " << orig.contentPtr() << endl;
	cout << "orig.content(): " << orig.content() << endl;
	cout << "copy.contentPtr(): " << copy.contentPtr() << endl;
	cout << "copy.content(): " << copy.content() << endl;
		
	return 0;
}
