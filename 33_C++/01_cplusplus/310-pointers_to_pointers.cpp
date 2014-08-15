//Pointers to pointers
#include <iostream>
using namespace std;

//define var and levels of pointers
char data = 'a';
char * ptr = &data;
char ** ptrptr = &ptr;

int main()
{
	//print values
	cout << "data: " << data << endl;
	cout << "ptr: (lv1) val: " << *ptr << endl;
	cout << "ptr: (lv2) val: " << **ptrptr << endl;
	
	//compare pointers
	cout << "Compare pointers: " << (*ptr == **ptrptr) << endl;
	
	return 0;
}
