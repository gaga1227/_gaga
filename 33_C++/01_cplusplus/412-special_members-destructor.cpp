// destructors
#include <iostream>
#include <string>
using namespace std;

class Example {
	string* ptr;
  public:
	//constructors:
	//init ptr with new allocated string pointer
	Example() : ptr(new string("Default class content value")) {}
	Example(const string& str) : ptr(new string(str)) {}
	//destructor:
	~Example() {delete ptr;}
	//access content:
	const string& content() const {return *ptr;}
	const string* contentPtr() const {return ptr;}
};

int main () {
	//example
	Example ex1;
	Example ex2("This is ex2's content value.");
	cout << "ex1.contentPtr(): " << ex1.contentPtr() << endl;
	cout << "ex1.content(): " << ex1.content() << endl;
	cout << "ex2.contentPtr(): " << ex2.contentPtr() << endl;
	cout << "ex2.content(): " << ex2.content() << endl;
		
	return 0;
	//this is where the destructors of ex1, 2 are called
}
