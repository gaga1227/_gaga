import com.oracle.tools.packager.Log;

import javax.swing.*;
import java.applet.Applet;
import java.applet.AppletContext;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.awt.event.ComponentEvent;
import java.awt.event.ComponentListener;
import java.net.MalformedURLException;
import java.net.URL;

public class LinkRotator extends JApplet implements Runnable, ActionListener {

	// vars
	int current = 0;
	int totalPages = 6;

	String[] pageTitle = new String[totalPages];

	URL[] pageLink = new URL[totalPages];
	Color butterscotch = new Color(255, 204, 158);

	Thread runner;
	long sleepInterval = 1000;

	/**
	 * Called by the browser or applet viewer to inform
	 * this applet that it has been loaded into the system. It is always
	 * called before the first time that the <code>start</code> method is
	 * called.
	 * <p>
	 * A subclass of <code>Applet</code> should override this method if
	 * it has initialization to perform. For example, an applet with
	 * threads would use the <code>init</code> method to create the
	 * threads and the <code>destroy</code> method to kill them.
	 * <p>
	 * The implementation of this method provided by the
	 * <code>Applet</code> class does nothing.
	 *
	 * @see Applet#destroy()
	 * @see Applet#start()
	 * @see Applet#stop()
	 */
	@Override
	public void init() {
		super.init();

		// populate title and URLs
		pageTitle = new String[] {
			"Sun’s Java site",
			"Cafe au Lait",
			"JavaWorld",
			"Java in 24 Hours",
			"Sams Publishing",
			"Workbench"
		};
		pageLink[0] = getURL("http://java.sun.com");
		pageLink[1] = getURL("http://www.ibiblio.org/javafaq");
		pageLink[2] = getURL("http://www.javaworld.com");
		pageLink[3] = getURL("http://www.java24hours.com");
		pageLink[4] = getURL("http://www.samspublishing.com");
		pageLink[5] = getURL("http://workbench.cadenhead.org");

		// button view
		Button goButton = new Button("Go");
		goButton.addActionListener(this);
		add(goButton);

		// add layout and
		FlowLayout flow = new FlowLayout();
		setLayout(flow);
	}

	/**
	 * Called by the browser or applet viewer to inform
	 * this applet that it should start its execution. It is called after
	 * the <code>init</code> method and each time the applet is revisited
	 * in a Web page.
	 * <p>
	 * A subclass of <code>Applet</code> should override this method if
	 * it has any operation that it wants to perform each time the Web
	 * page containing it is visited. For example, an applet with
	 * animation might want to use the <code>start</code> method to
	 * resume animation, and the <code>stop</code> method to suspend the
	 * animation.
	 * <p>
	 * Note: some methods, such as <code>getLocationOnScreen</code>, can only
	 * provide meaningful results if the applet is showing.  Because
	 * <code>isShowing</code> returns <code>false</code> when the applet's
	 * <code>start</code> is first called, methods requiring
	 * <code>isShowing</code> to return <code>true</code> should be called from
	 * a <code>ComponentListener</code>.
	 * <p>
	 * The implementation of this method provided by the
	 * <code>Applet</code> class does nothing.
	 *
	 * @see Applet#destroy()
	 * @see Applet#init()
	 * @see Applet#stop()
	 * @see Component#isShowing()
	 * @see ComponentListener#componentShown(ComponentEvent)
	 */
	@Override
	public void start() {
		super.start();

		// start thread if not already on applet start
		if (runner == null) {
			runner = new Thread(this);
			runner.start();
		}
	}

	/**
	 * Called by the browser or applet viewer to inform
	 * this applet that it should stop its execution. It is called when
	 * the Web page that contains this applet has been replaced by
	 * another page, and also just before the applet is to be destroyed.
	 * <p>
	 * A subclass of <code>Applet</code> should override this method if
	 * it has any operation that it wants to perform each time the Web
	 * page containing it is no longer visible. For example, an applet
	 * with animation might want to use the <code>start</code> method to
	 * resume animation, and the <code>stop</code> method to suspend the
	 * animation.
	 * <p>
	 * The implementation of this method provided by the
	 * <code>Applet</code> class does nothing.
	 *
	 * @see Applet#destroy()
	 * @see Applet#init()
	 */
	@Override
	public void stop() {
		super.stop();

		// stop thread if not already on applet stop
		if (runner != null) {
			runner = null;
		}
	}

	/**
	 * Invoked when an action occurs.
	 *
	 * @param e
	 */
	@Override
	public void actionPerformed(ActionEvent e) {
		// stop thread if not already
		if (runner != null) {
			runner = null;
		}

		// load page url if valid
		AppletContext browser = getAppletContext();
		if (pageLink[current] != null) {
			browser.showDocument(pageLink[current]);
		}
	}

	/**
	 * When an object implementing interface <code>Runnable</code> is used
	 * to create a thread, starting the thread causes the object's
	 * <code>run</code> method to be called in that separately executing
	 * thread.
	 * <p>
	 * The general contract of the method <code>run</code> is that it may
	 * take any action whatsoever.
	 *
	 * @see Thread#run()
	 */
	@Override
	public void run() {
		// get current thread
		Thread thisThread = Thread.currentThread();

		// do stuff if is the right thread
		// the loop happens here
		while (runner == thisThread) {
			// increment page
			current++;

			// reset to top if reaching pages limit
			if (current > totalPages - 1) {
				current = 0;
			}

			// update view
			repaint();

			// update thread on interval
			try {
				Thread.sleep(sleepInterval);
			} catch (InterruptedException e) {
				// do nothing
			}
		}
	}

	/**
	 * Paints the container. This forwards the paint to any lightweight
	 * components that are children of this container. If this method is
	 * reimplemented, super.paint(g) should be called so that lightweight
	 * components are properly rendered. If a child component is entirely
	 * clipped by the current clipping setting in g, paint() will not be
	 * forwarded to that child.
	 *
	 * @param screen the specified Graphics window
	 * @see Component#update(Graphics)
	 */
	@Override
	public void paint(Graphics screen) {
		super.paint(screen);

		// cast screen to screen2D
		Graphics2D screen2D = (Graphics2D)screen;

		// draw content bg
		screen2D.setColor(butterscotch);
		screen2D.fillRect(0, 0, getSize().width, getSize().height);

		// draw content text
		screen2D.setColor(Color.black);
		screen2D.drawString(pageTitle[current], 5, 60);
		screen2D.drawString("" + pageLink[current], 5, 80);
	}

	/**
	 * Converts url text to URL object
	 * @param urlText - input url text
	 * @return pageURL object
	 */
	private URL getURL(String urlText) {
		URL pageURL = null;
		try {
			pageURL = new URL(getDocumentBase(), urlText);
		} catch (MalformedURLException m) {
			// ignore
		}
		return pageURL;
	}
}
