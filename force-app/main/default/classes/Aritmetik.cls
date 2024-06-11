public class Aritmetik {
//public orgtaki herkes ulaşsın.
// return data type integer olacak (constructor da return type olmaz, obje dönüyor.)
// method ismi class ismi ile aynı olmak zorunda değildir. 
// işlenecek kullanıcak verilerimin date type integer ve adını x girilir.
    public String cevre (integer kareninBirKenari){
        string kareCevre= 'Bir kenar uzunluğu ' + kareninBirKenari+ ' olan karenin çevresi ' + 4*kareninBirKenari;
        system.debug(kareCevre);
        return kareCevre;
    }
    public String cevre (integer kenar1, integer kenar2){// farklı sayıda parametre 
        string dikdortgenCevre= 'Kenar uzunlukları ' + kenar1+ ', ' + kenar2+ ' olan dikdortgen cevresi ' + 2*(kenar1 + kenar2);
        system.debug(dikdortgenCevre);
        return dikdortgenCevre;
    }    
    
    public static integer toplam (integer x, integer y){
        integer sonuc = x + y;
        return sonuc;
    }
    public integer carpma (integer x, integer y){
        integer sonuc = x * y;
        return sonuc;
    }
    public static string alanKare (integer x){
        integer alan = x*x;
        string sonuc = 'Bir kenar uzunluğu ' + x + ' olan karenin alanı ' + alan;  
        return sonuc;
    }
    public static void message() {
        system.debug('Herkese iyi bayramlar!!!');// system.debug herhangi bir data return etmez. boş döner. 
    }
    static integer privateKasa  = 10;
//private static integer privateKasa  = 10;
    public static integer staticKasa  = 10;
    public integer nonStaticKasa      = 10;
    public void artma (integer x){
        staticKasa    +=x;// kasa = kasa+ x;
        nonStaticKasa--;// kasa = kasa+ x;
    }
    public static integer getPrivateKasa() {
        return privateKasa;
    }
    public static integer setPrivateKasa(integer x) {
        privateKasa = x;
        return privateKasa;
    }
    public void azalma (integer x){
        staticKasa    -=2*x;// kasa = kasa+ x;
        nonStaticKasa--;// kasa = kasa+ x;
    }
    public final decimal Pi = 3.141592653589793238462643383279502884197169399375;
    public decimal cemberCevre (decimal r){
       decimal sonuc = 2* Pi * r;
        return sonuc;
    }
    
}