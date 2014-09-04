// Multiple inheritance
#include <iostream>
#include <string>
using namespace std;

//base classes
class Polygon {
  protected:
	int width, height;
  public:
	//defined constructor
	Polygon(int a, int b) : width(a), height(b) {}
};

class Output {
  public:
	static void print(int i);
};
void Output::print(int i) {
	cout << i << '\n';
}

//derived class from multiple base classes
class Rectangle : public Polygon, public Output {
  public:
  	//constructor, also defines which
	//base class constructor to call
	Rectangle(int a, int b) : Polygon(a,b) {}
	int area () {
		return width * height;
	}
};
class Triangle : public Polygon, public Output {
  public:
	Triangle(int a, int b) : Polygon(a,b) {}
	int area () {
		return width * height / 2;
	}
};

int main () {
	Rectangle rect(8,8);
	Triangle trgl(8,8);
	rect.print(rect.area());
	//calling class member
	Triangle::print(trgl.area());

	return 0;
}
