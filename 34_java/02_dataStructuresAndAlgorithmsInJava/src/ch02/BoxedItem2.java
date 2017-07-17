package ch02;

public class BoxedItem2 implements Insurable {
	private String description; // description of this item
	private int listPrice; // list price in cents
	private int weight; // weight in grams
	private boolean isHazardous; // true if object is hazardous

	private int width = 0; // box height in centimeters
	private int height = 0; // box width in centimeters
	private int depth = 0; // box depth in centimeters

	// Constructor
	public BoxedItem2(
			String description,
			int listPrice,
			int weight,
			boolean isHazardous,
			int width,
			int height,
			int depth) {

		this.listPrice = listPrice;
		this.description = description;
		this.weight = weight;
		this.isHazardous = isHazardous;
		this.width = width;
		this.height = height;
		this.depth = depth;
	}

	// must implements each of the methods of the Transportable interface
	@Override
	public int weight() {
		return weight;
	}

	@Override
	public boolean isHazardous() {
		return isHazardous;
	}

	// must implements each of the methods of the Sellable interface
	@Override
	public String description() {
		return description;
	}

	@Override
	public int listPrice() {
		return listPrice;
	}

	@Override
	public int lowestPrice() {
		return listPrice / 2;
	}

	// must implements each of the methods of the Insurable interface
	public int insuredValue() {
		return listPrice * 2;
	}

	// additional methods
	public void setBox(int w, int h, int d) {
		width = w;
		height = h;
		depth = d;
	}
}
