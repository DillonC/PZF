package src.game.game;

import java.awt.Canvas;
import java.awt.Cursor;
import java.awt.Dimension;
import java.awt.Point;
import java.awt.Toolkit;
import java.awt.image.BufferedImage;

import javax.swing.JFrame;

public class Game extends Canvas implements Runnable {

	private static final long serialVersionUID = 1L;
	public boolean Running = false;
	public static String TITLE = "Game v1.0";
	public static final int SCALE = 2;
	public static final int WIDTH = 800;
	public static final int HEIGHT = WIDTH / 2 * 3 / 2;
	
	public Game(){
		Dimension size = new Dimension(WIDTH, HEIGHT);
		setPreferredSize(size);
		setMinimumSize(size);
		setMaximumSize(size);
	}
	public synchronized void start(){
		if (Running)
			return;
		Running = true;
	}

	public void Stop(){
		Running = false;
	}

	public void run() {
		if(Running){
			
		}
		
	}
	
	public static void main(String[] args){
		Game game = new Game();
		JFrame frame = new JFrame();
		BufferedImage cursor = new BufferedImage(16, 16, BufferedImage.TYPE_INT_ARGB);
		Cursor blank = Toolkit.getDefaultToolkit().createCustomCursor(cursor, new Point(0, 0), "blank");
		frame.add(game);
		frame.getContentPane().setCursor(blank);
		frame.setTitle(TITLE);
		frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		frame.setLocationRelativeTo(null);
		frame.setResizable(false);
		frame.setVisible(true);
		frame.pack();
		game.start();
	}

}
