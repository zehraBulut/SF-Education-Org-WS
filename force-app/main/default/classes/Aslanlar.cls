public class Aslanlar EXTENDS   Dortayaklilar{
    public void kesiciDis(){
        system.debug('Aslanların kesici dişleri vardır.');
    }
   
    //OVERRIDE
    public String Beslenme(String Besin){
        system.debug('Aslanlar ' + Besin+ ' ile beslenir.');
        return besin;
    }    
}