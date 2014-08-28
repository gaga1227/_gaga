// Static members
#include <iostream>
using namespace std;

//static data members (data or functions) of a class
//are also known as "class variables", which is common
//to all objects from that class

//static counter member example
class Dummy {
  public:
  	//static members have the same properties as non-member variables
	//hence cannot be initialized directly in the class
	static int n;
	static bool iseven();
	static bool isodd();
	//constructor
	Dummy() { n++; }; 
	//deconstructor
	~Dummy() { n--; }; 
};

//init static member outside of class
//but enjoys the class cospe: 'Dummy::'
//basically, it just like a non-member variable but
//with a name that requires to be accessed like a member of a class 
int Dummy::n = 0;

//implement static member functions outside of class
//cannot access non-static members (object vars), nor 'this'
bool Dummy::iseven() {
	return (n%2) > 0 ? false : true;
};
bool Dummy::isodd() {
	return (n%2) > 0 ? true : false;	
};

int main () {
	Dummy a, b, c;
	Dummy d[3];
	Dummy * e = new Dummy;
	
	cout << "Total Dummies: " << e->n << endl;
	cout << "Total Dummies (odd): " << a.isodd() << endl;
	cout << "Total Dummies (even): " << b.iseven() << endl;
	
	delete e;
	
	cout << "-- After delete --" << endl;
	cout << "Total Dummies: " << Dummy::n << endl;
	cout << "Total Dummies (odd): " << c.isodd() << endl;
	cout << "Total Dummies (even): " << d[3].iseven() << endl;
		
	return 0;
}
