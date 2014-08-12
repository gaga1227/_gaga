// Namespace aliasing
#include <iostream>
using namespace std;

//define namespaces
namespace first
{
	int x = 5;
	int y = 10;
}

//assign namepsace alias
namespace second = first;

int main () {
	using namespace second;
	cout << x << '\n';
	cout << y << '\n';
	
	return 0;
}
