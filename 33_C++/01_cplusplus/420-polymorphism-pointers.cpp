// Pointers to base class
#include <iostream>
#include <string>
using namespace std;

//base
class Polygon {
  protected:
	int width, height;
  public:
	void set_values (int a, int b) {
		width=a; height=b;
	}
};

//derived
class Rectangle: public Polygon {
  public:
	int area() {
		return width*height;
	}
};
class Triangle: public Polygon {
  public:
	int area() {
		return width*height/2;
	}
};

int main () {
	//init objects	
	Rectangle rect;
	Triangle trgl;
	
	//define pointers to objects
	//pointer to a derived class is type-compatible
	//with a pointer to its base class
	//so 'rect' and 'trgl' can be referenced by type 'Polygon *'
	Polygon * polyPtr1 = &rect;
	Polygon * polyPtr2 = &trgl;
	
	//call base class member fn using pointer synatx
	//cannot call base class members only, not derived class members 
	polyPtr1->set_values(4,5);
	polyPtr2->set_values(4,5);
	
	//print
	cout << rect.area() << '\n';
	cout << trgl.area() << '\n';

	return 0;
}
