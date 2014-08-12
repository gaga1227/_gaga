// Arrays
#include <iostream>
using namespace std;

//define and initialise array
int array_fixed[5] = {1,2,3,4,5};

//using universal initialization,
//no equal sign, only in C++11
int array_open[] {}; 

int main ()
{
	array_open[1001] = array_fixed[array_open[0]];
	cout << array_open[1001];
	
	return 0;
}
