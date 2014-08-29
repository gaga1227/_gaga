// Class templates
#include <iostream>
using namespace std;

//class templates, allowing classes to have members
//that use template parameters as types
template <class T>
class mypair {
	T a, b;
  public:
	mypair(T first, T second) {
	  a=first; b=second;
	}
	T getmax();
};

//implement member fn outside of class
template <class A>
A mypair<A>::getmax() {
	A max;
	max = a>b ? a : b;
	return max;
}

int main () {
	mypair<int> 	myints(115, 36);
	mypair<double>  myfloats(3.0, 2.18);
	cout << "myints.getmax(): " << myints.getmax() << endl;
	cout << "myfloats.getmax(): " << myfloats.getmax() << endl;
		
	return 0;
}
