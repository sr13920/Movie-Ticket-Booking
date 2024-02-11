package org.example.remp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@SpringBootApplication
public class RempApplication {

public static void main(String[] args) {
	SpringApplication.run(RempApplication.class, args);
	
	
	List<Integer> l = new ArrayList<>();
	l.addAll(Arrays.asList(5, 6, 3, 4));
	l.sort((a,b)-> a.compareTo(b));
	System.out.println("Ascending : " + l);
	l.sort((a,b)->b.compareTo(a));
	System.out.println("Desc ending : " + l);
}
}
