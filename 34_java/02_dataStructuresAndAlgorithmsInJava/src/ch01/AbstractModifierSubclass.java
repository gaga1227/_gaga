package ch01;

public class AbstractModifierSubclass extends AbstractModifier {
	private String data;

	public AbstractModifierSubclass() {

	}

	@Override
	public void setInfo(String data) {
		this.data = data;
	}

	@Override
	public String getInfo() {
		return data;
	}
}
