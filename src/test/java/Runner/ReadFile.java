package Runner;


import java.io.BufferedReader;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.URL;
 

import org.omg.CORBA.PUBLIC_MEMBER;

public class ReadFile {

 public static void main(String[] args) throws IOException {
   
    URL url = new URL("https://www.yahoo.com/ads.txt");
        BufferedReader read = new BufferedReader(
        new InputStreamReader(url.openStream()));
        String i;
        int m = 0;
        int g = 0;
        
        while ((i = read.readLine()) != null){
           if (i.contains("pubmatic.com")){
        	   if (i.contains("DIRECT")){
        		   m++;
        	   }
        	   else if(i.contains("RESELLER")){
        		   g++;
        	   }       	        		   
        	   
           }
        
           }
        System.out.println("pubmatic.com Direct Count="+m);
        System.out.println("pubmatic.com RESELLER Count="+g);
        read.close();  
}
}
