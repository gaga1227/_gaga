// static vs automatic storage
#include <iostream>
using namespace std;

//global scope, in static storage
int x;

int main ()
{
	//local scope, in automatic storage
	int y;
	
	//x not initialized, defaults to 0
	cout << x << '\n';
	//y not initialized, random undetermined value, 0 not guaranteed
	cout << y << '\n';
	
	return 0;
}
