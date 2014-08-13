//Pointer arithmetics
#include <iostream>
using namespace std;

int main()
{
	//define vars and pointers
	char mychar = 'a';
	short myshort = 1;
	long mylong = 1000;
	
	char *mycharptr = &mychar;
	short *myshortptr = &myshort;
	long *mylongptr = &mylong;

	//print original addresses
	cout << mycharptr << endl;
	cout << myshortptr << endl;
	cout << mylongptr << endl;

	//move pointers forward	and print
	cout << ++mycharptr << endl;
	cout << ++myshortptr << endl;
	cout << ++mylongptr << endl;
	
	//move pointers forward	and print dereferenced vals
	//'*pointer++' = '*(pointer++)'
	cout << *mycharptr++ << endl;
	cout << *myshortptr++ << endl;
	cout << *mylongptr++ << endl;
	
	//notes
	int a = 1, b = 2;
	int * p = &a, * q = &b;
	
	*p++;   // same as *(p++): increment pointer, and dereference unincremented address
	*++p;   // same as *(++p): increment pointer, and dereference incremented address
	++*p;   // same as ++(*p): dereference pointer, and increment the value it points to
	(*p)++; // dereference pointer, and post-increment the value it points to 
	
	//this is equal to the ...
	*p++ = *q++;
	//... following block
	*p = *q;
	++p;
	++q;
	
	return 0;
}
