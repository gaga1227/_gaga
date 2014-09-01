// Default constructor
#include <iostream>
#include <string>
using namespace std;

//class without constructor def:
//compiler assumes the class to have an
//implicitly defined default constructor
class Example {
  public:
	int total = 0;
	//this is implicitly defined by compiler
	//as default constructor
	//Example () {};
	void accumulate (int x) { total += x; }
};

//constructor taking parameters explicitly declared
//compiler no longer provides an implicit default constructor
//no longer allows the declaration of new objects without arguments
//unless overloaded with default constructor without arguments
class Example2 {
  public:
	int total = 0;
	Example2 (int initial_value) : total(initial_value) {};
	//this is normally implicitly defined for all classes
	//that have no other constructors
	Example2 () {};
	void accumulate (int x) { total += x; };
};

int main () {
	//Example
	Example ex;
	ex.accumulate(2);
	ex.accumulate(6);
	cout << "ex.total: " << ex.total << endl; 
	
	//Example2a
	Example2 ex2a(10);
	ex2a.accumulate(2);
	ex2a.accumulate(6);
	cout << "ex2a.total: " << ex2a.total << endl; 
	
	//Example2b
	Example2 ex2b;
	ex2b.accumulate(2);
	ex2b.accumulate(6);
	cout << "ex2b.total: " << ex2b.total << endl; 
	
	return 0;
}
