// The keyword this
#include <iostream>
using namespace std;

//this represents a pointer to the object 
//whose member function is being executed

//class def
class Dummy {
  public:
  	int x, y;
  	//constrcutor
  	Dummy(int a, int b) : x(a), y(b) {}
    //public method
    Dummy operator= (const Dummy &param);
	bool isitme(Dummy &param);
};

//member function implementation
//ref: 203-functions-args_by_reference.cpp
bool Dummy::isitme(Dummy &param) {
	return (&param == this) ? true : false;
}

//overloading operator function of Dummy
Dummy Dummy::operator= (const Dummy &param) {
	x = param.x;
	y = param.y;
	//return this obj
	return *this;
}

int main () {
	//create Dummy instance and its pointer
	Dummy a(1,2), b(3,4);
	
	//this demo
	Dummy * aptr = &a;
	if ( a.isitme(a) ) cout << "Yes, a == a \n";
	if ( aptr->isitme(a) ) cout << "Yes, aptr == &a \n";
	
	//using operator overloaded function
	cout << "b(before=a): " << b.x << ", " << b.y << endl;
	b = a;
	cout << "b(after=a): " << b.x << ", " << b.y << endl;
		
	return 0;
}
