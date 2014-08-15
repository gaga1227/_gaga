//Pointers to functions
#include <iostream>
using namespace std;

//functions
int addition (int a, int b)
{
	return (a+b);
}
int subtraction (int a, int b)
{ 
	return (a-b);
}

//function with function pointer as argument
int operation (int x, int y, int (*fn)(int,int))
{
	int result;
	result = (*fn)(x,y);
	return result;
}

//function with function identifier as argument
int operation2 (int x, int y, int fn(int,int))
{
	int result;
	result = fn(x,y);
	return result;
}

int main()
{
	//vars
	int m, n, x, y;
	
	//pointer to function: 'subtraction'
	int (*minus)(int,int) = subtraction;
	
	//pass in function as argument
	m = operation (7, 5, addition);
	
	//minus is pointer to subtraction,
	//It is directly initialized
	//int (* minus)(int,int) = subtraction
	n = operation (20, m, minus); 
	
	cout << "operation: " << n << endl; //8
	
	x = operation2 (7, 5, addition);
	y = operation2 (20, m, subtraction);
	 
	cout << "operation2: " << n; //8
	
	return 0;
}
