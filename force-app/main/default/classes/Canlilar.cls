public VIRTUAL class Canlilar {// VIRTUAL class ın parent özellik verir.
    public void Solunum(){// non-abstract veya CONCRETE method virtual method
        system.debug('Canliar solunum yapar.');
    }
    public void Hareket(){// non-abstract veya CONCRETE method virtual method
        system.debug('Canlilar hareket eder.');
    }
    /*
    //Defining type for abstract methods must be declared as abstract
    public ABSTRACT String Beslenme(String Besin); // {BODY YOK}
*/
}