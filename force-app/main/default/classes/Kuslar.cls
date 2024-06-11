public class Kuslar EXTENDS Canlilar{
   /* public void Solunum(){
        system.debug('Kuslar solunum yapar.');
    }
    public void Hareket(){
        system.debug('Kuslar hareket eder.');
    }
*/
    OVERRIDE
    public String Beslenme(String Besin){
        system.debug('Kuslar ' + Besin+ ' ile beslenir.');
        return besin;
    }

    public void tuy(){
        system.debug('Kuslar vucudu tüy ile kaplidir.');
    } 
}