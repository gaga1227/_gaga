package ch02;

// Class for photographs that can be sold
public class Photograph implements Sellable {

	private String description; // description of this photo
	private int listPrice; // the price we are setting
	private boolean isColor; // true if photo is in color

	// constructor
	public Photograph(String description, int listPrice, boolean isColor) {
		this.description = description;
		this.listPrice = listPrice;
		this.isColor = isColor;
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

	// In addition, it adds a method specialized for Photograph objects
	public boolean isColor() {
		return isColor;
	}
}
