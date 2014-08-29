// Template specialization
#include <iostream>
#include <string>
using namespace std;

//template specialization:
//define different implementations for a template 
//for specific types are passed as template argument

//class template
template <class T>
class mycontainer {
	T element;
  public:
	mycontainer(T arg) {element=arg;}
	T increase() {return ++element;}
	string type() {return "T";}
};

// class template specialization:
// this class is a new class psecialized for <char>,
// it has no member of 'increase'
// and 'uppercase' only available for <char> instances
// there is no "inheritance" of members from
// the generic template to the specialization.
template <>
class mycontainer<char> {
	char element;
  public:
	mycontainer(char arg) {element=arg;}
	char uppercase() {
		if ((element>='a')&&(element<='z')) {
			element += 'A'-'a';
			return element;
		}
    }
    string type() {return "char";}
};

int main () {
	mycontainer<int> myint(7);
	mycontainer<char> mychar('j');
	
	cout << "myint.increase(): " << myint.increase() << endl;
	cout << "mychar.uppercase(): " << mychar.uppercase() << endl;
	cout << "myint.type(): " << myint.type() << endl;
	cout << "mychar.type(): " << mychar.type() << endl;
	
	return 0;
}
