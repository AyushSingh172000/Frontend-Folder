//package Java Programs;

    // Online Java Compiler
// Use this editor to write, compile and run your Java code online
import java.util.*;
public class P1 {
}
public static boolean isPrime(int l1){
    if(l1<2)
       return false;
   for(int i=2; i*i<=l1; i++){
       if(l1%i==0){
           return false;
   }}
   return true;
}
    public static void main(String[] args) {
        List <Integer> l1= new ArrayList();
        // l1.add(12);
        // l1.add(23);
        // l1.add(20);
        // l1.add(11);

     if(isPrime(l1)){
        System.out.println("Prime Number");
    }else{
        System.out.println("Not Prime Number");
    }
   
       
         
     
    

}
