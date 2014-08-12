// Functions - Default values in parameters
#include <iostream>
using namespace std;

int divide (int a, int b=2)
{
	int r;
	r=a/b;
	return (r);
}

int main ()
{
	cout << "6 divide by 3 is: " << divide(6, 3) << endl;
	cout << "24 divide by 2(default) is: " << divide(24) << endl;
	
	return 0;
}


