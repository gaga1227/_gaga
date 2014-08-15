//void pointers
#include <iostream>
using namespace std;

void increase (void* data, int psize)
{
	if (psize == sizeof(char)) {
		char* pchar;
		pchar = (char*) data; //convert type from 'void*' to 'char*'
		++*pchar; //++a, y
	}
	else if (psize == sizeof(int)) {
		int* pint;
		pint = (int*) data; //convert type from 'void*' to 'int*'
		++*pint; //++b, 1603
	}
}

int main()
{
	char a = 'x';
	int b = 1602;
	
	increase (&a, sizeof(a));
	increase (&b, sizeof(b));
	
	cout << a << ", " << b << '\n';
	
	return 0;
}
