// Functions - Default values in parameters
#include <iostream>
using namespace std;

//declare function prototype before main() 
//so it can be called in main()
//but function body is defined after main()
int divide (int a, int b=2);

//also declare function prototype is useful
//when multiple functions are calling each other
void odd (int x);
void even (int x);

int main ()
{
	cout << "6 divide by 3 is: " << divide(6, 3) << endl;
	cout << "24 divide by 2(default) is: " << divide(24) << endl;
	
	int i;
	do {
		cout << "Please, enter number (0 to exit): ";
		cin >> i;
		odd (i);
	} while (i!=0);
	
	return 0;
}

int divide (int a, int b)
{
	int r;
	r=a/b;
	return (r);
}

void odd (int x)
{
	if ((x%2)!=0) cout << "It is odd.\n";
	else if ((x)==0) cout << "It is 0. Exiting... \n";
	else even (x);
}

void even (int x)
{
	if ((x%2)==0) cout << "It is even.\n";
	else if ((x)==0) cout << "It is 0. Exiting... \n";
	else odd (x);
}
