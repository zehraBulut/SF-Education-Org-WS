public class Baliklar EXTENDS Canlilar{
/*    public void Solunum(){
        system.debug('Baliklar solunum yapar.');
    }
    public void Hareket(){
        system.debug('Baliklar hareket eder.');
    }
*/
// override edilmez ve beslenme methodu kullanılmaz ise 
// Class Baliklar must implement the abstract method: String Canlilar.Beslenme(String)
    OVERRIDE 
    public String Beslenme(String Besin){
        system.debug('Baliklar ' + Besin+ ' ile beslenir.');
        return besin;
    }
    public void pul(){
        system.debug('Baliklar vucudu pul ile kaplidir.');
    } 
}