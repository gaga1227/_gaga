// Abstract base classes
#include <iostream>
using namespace std;

//Abstract base classes are classes that can only be used as base classes
//allowed to have virtual member functions without definition (pure virtual functions)
//such functions have defination as '=0'

//Classes that contain at least one pure virtual function 
//are known as abstract base classes

//Abstract base classes cannot be used to instantiate objects
//it can be used to create pointers to it, and take advantage
//of all its polymorphic abilities

//base
class Polygon {
  protected:
    int width, height;
  public:
    void set_values (int a, int b)
      { width=a; height=b; }
    //abstract virtual member fn defined
	virtual int area () = 0;
};
class Rectangle: public Polygon {
  public:
    //virtual member fn redefined
	int area ()
      { return width * height; }
};
class Triangle: public Polygon {
  public:
    //virtual member fn redefined
	int area ()
      { return (width * height / 2); }
};

int main () {
	//objs
	Rectangle rect;
	Triangle trgl;
	
	//pointers
	Polygon * ppoly1 = &rect;
	Polygon * ppoly2 = &trgl;
	
	//call base class member with pointer syntax
	ppoly1->set_values (4,5);
	ppoly2->set_values (4,5);
	
	//call virtual members with pointer syntax
	cout << ppoly1->area() << '\n';
	cout << ppoly2->area() << '\n';

	//demo 2
	
	//create base class type pointers in dynamic memery
	//and assign derived class objects
	Polygon * polyPtr1 = new Rectangle;
	Polygon * polyPtr2 = new Triangle;
	
	//call pure virtual fn
	polyPtr1->set_values(6,6);
	polyPtr2->set_values(6,6);
	
	//print
	cout << polyPtr1->area() << '\n';
	cout << polyPtr2->area() << '\n';
	
	//clear memory location
	delete polyPtr1;
	delete polyPtr2;
	polyPtr1 = nullptr;
	polyPtr2 = nullptr;

	return 0;
}
