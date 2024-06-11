public class Atlar EXTENDS Canlilar IMPLEMENTS Otcullar, Etciller {
    public class myInnerClass{
        public void innerClassmethod(){
        system.debug('inner class örneği için oluşturulmuştur.');
    }   
    }
    public void ogutucuDis(){
        system.debug('Atlarrın öğütücü dişleri vardır.');
    }
   //OVERRIDE
    public String Beslenme(String Besin){
        system.debug('Atlar ' + Besin+ ' ile beslenir.');
        return besin;
    }  
    public string kosma(){
        string kos = 'Atlar dort nala kosar';
        system.debug(kos);
        return kos;
    }
    public void yeleli(){
        system.Debug('Atların güzel yeleleri olur.');
    } 

}