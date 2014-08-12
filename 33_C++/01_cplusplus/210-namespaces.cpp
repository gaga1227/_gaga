// Namespaces
#include <iostream>
using namespace std;

//'std' namespace
string a="Good ", b="Day!", r;
string sum () {
	r = a + b;
	return r;
}

//'namespaceA' namespace
namespace namespaceA
{
	int a=999, b=333, r;
	int sum () {
		r = a - b;
		return r;
	}
}

//'namespaceB' namespace
namespace namespaceB
{
	float a=1.001, b=2.002, r;
	float sum () {
		r = a * b;
		return r;
	}
}

int main ()
{
	cout << sum() << endl;
	cout << namespaceA::sum() << endl;
	cout << namespaceB::sum() << endl;
	
	return 0;
}

