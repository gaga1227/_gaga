//Pointers and arrays
#include <iostream>
using namespace std;

int main()
{
	//define an array and a pointer of same type
	int numbers[5];
	int * p;
	
	//assign array to pointer directly
	//without needing a reference operator '&'
	//using 'numbers' directly equals to a pointer to 'numbers[0]'
	//'p' is now the pointer for 'numbers[0]'
	p = numbers; 
	
	//update numbers[0] to 10
	*p = 10;
	cout << "numbers[0]: " << numbers[0] << endl;
		
	//assign 'p' with 'p's next adderss: numbers[1]
	p++;
	cout << "numbers[1]: "<< numbers[1] << endl;
	
	//update numbers[1] to 20
	*p = 20;
	cout << "numbers[1]: " << numbers[1] << endl;
	
	//update pointer's address to numbers[2]
	//update numbers[2] to 30
	p = &numbers[2];
	*p = 30;
	cout << "numbers[2]: " << numbers[2] << endl;
	
	//update pointer's address to numbers[3(0+3)] 
	//update numbers[3] to 40
	p = numbers + 3;
	*p = 40;
	cout << "numbers[3]: " << numbers[3] << endl;
	
	//update pointer's address back to numbers[0] 
	//update 'p's next 4th address: numbers[4(0+4)] to 50
	p = numbers; 
	*(p+4) = 50;
	cout << "numbers[4]: " << numbers[4] << endl;
	
	//print entire array
	cout << "numbers: ";
	for (int n=0; n<5; n++) {
		//offset operator: '[]' for array acts as dereferencing operator
		cout << numbers[n] << ", ";
	}
	
	return 0;
}
