// using
#include <iostream>
using namespace std;

//define namespaces
namespace first
{
	int x = 5;
	int y = 10;
}

namespace second
{
	double x = 3.1416;
	double y = 2.7183;
}

int main () {
	{
		using namespace second;	//using in a block to switch namespaces
		cout << x << '\n'; 		//second
		cout << y << '\n'; 		//second
		cout << endl;
	}
	
	{
		using first::x;			//overrides 'using namespace second'
		using second::y;
		cout << x << '\n'; 		//first.x
		cout << y << '\n'; 		//second.y
		cout << endl;
	}
	
	{
		using namespace first;	//using in a block to switch namespaces
		cout << x << '\n'; 		//first
		cout << y << '\n'; 		//first
		cout << endl;
	}	
	
	cout << second::x << '\n'; 	//second.x
	cout << first::y << '\n'; 	//first.y
	
	return 0;
}
