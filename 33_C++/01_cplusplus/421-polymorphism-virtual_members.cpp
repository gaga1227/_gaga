// Virtual members
#include <iostream>
#include <string>
using namespace std;

//A virtual member is a member function 
//that can be redefined in a derived class

//base
class Polygon {
  protected:
    int width, height;
  public:
    void set_values (int a, int b)
      { width=a; height=b; }
    //virtual member fn defined
	virtual int area ()
      { return 0; }
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

//now pointers to derived objects with base class type
//can access virtual members of base class

int main () {
	//objs
	Rectangle rect;
	Triangle trgl;
	//Polygon poly;
	
	//pointers
	Polygon * ppoly1 = &rect;
	Polygon * ppoly2 = &trgl;
	//Polygon * ppoly3 = &poly;
	
	//call base class member with pointer syntax
	ppoly1->set_values (4,5);
	ppoly2->set_values (4,5);
	//ppoly3->set_values (4,5);
	
	//call virtual members with pointer syntax
	cout << ppoly1->area() << '\n';
	cout << ppoly2->area() << '\n';
	//cout << ppoly3->area() << '\n';

	return 0;
}
