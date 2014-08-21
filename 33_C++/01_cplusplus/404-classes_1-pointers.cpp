// Pointers to classes
#include <iostream>
using namespace std;

//circle class
class Circle {
    double radius;
  public:
    Circle(double r) : radius(r) {}
    double area() {return radius*radius*3.14159265;}
};

int main () {
	//init objs
	Circle c1(3);
	
	//define pointers for circle objs
	Circle * cptr1, * cptr2, * cptr3;
	
	//ref cptr to c1
	cptr1 = &c1;
	//assign cptr2,3 with new
	cptr2 = new Circle(4);
	cptr3 = new Circle[2] { 5, 6 };
	
	//print
	cout << "cptr1's area: " << (*cptr1).area() << endl;
	cout << "cptr2's area: " << cptr2->area() << endl;
	cout << "cptr3[0]'s area: " << cptr3[0].area() << endl;
	cout << "cptr3[1]'s area: " << (*(cptr3+1)).area() << endl;
	
	//clear mem blocks for cptr2,3
	delete cptr2;
	delete[] cptr3;
	cptr2 = cptr3 = nullptr;
		
	return 0;
}
