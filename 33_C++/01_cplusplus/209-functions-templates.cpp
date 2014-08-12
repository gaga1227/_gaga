// Function templates
#include <iostream>
using namespace std;

//templates define functions with generic types
//and the exact same body
//by declaring a new generic type
template <typename SumType>

//'SumType' can now be used as the type for parameters,
//as return type, or to declare new variables of this type. 
SumType sum (SumType a, SumType b)
{
	SumType r = a + b;
	return r;
}

//declare generic type using 'class'
template <class T, class U>
bool are_equal (T a, U b)
{
	return (a==b);
}

//Non-type template arguments: N
//N can be used like a regular function parameter
template <typename T, int N>
T fixed_multiply (T val)
{
	return val * N;
}

int main ()
{
	int x=5,y=2;
	double n=5.1,m=2.2;
	float i=5.001, j=2.002;
	string a="Good ", b="Day!";	
	
	cout << sum <int> (x,y) << '\n';
	cout << sum <double> (n,m) << '\n';
	cout << sum <float> (i,j) << '\n';
	
	//compiler is even able to deduce the data type automatically
	//without specifying types
	cout << sum (a,b) << '\n'; 
	
	//mixed typed parameters
	//automatic template parameter deduction
	//same as 'are_equal<int,double>(10,10.0)'
	if (are_equal(10,10.0))
		cout << "x and y are equal\n";
	else
		cout << "x and y are not equal\n";
	
	//using Non-type template arguments: 2 and 3
	cout << fixed_multiply<int,2>(10) << '\n';
	cout << fixed_multiply<float,3>(10.00231) << '\n';
	
	return 0;
}

