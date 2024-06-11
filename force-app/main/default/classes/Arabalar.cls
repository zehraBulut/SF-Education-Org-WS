public class Arabalar {

  public  string  marka='volvo';
   public string renk='yeşil';
   public   integer yil=2023;
    
    public Arabalar (string arabaRengi){
       this.renk=arabaRengi; 
        
    }    
  public  Arabalar(string arabaMarka,string arabaRengi) {
        
       this.marka=arabaMarka;
        this.renk=arabaRengi;
    
    }
   
  public  Arabalar(string arabaMarka,string arabaRengi,integer arabaYili){
        
    this.marka=arabaMarka;
    this.renk=arabaRengi;
    this.yil=arabaYili;
  }
}