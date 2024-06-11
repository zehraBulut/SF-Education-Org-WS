public class Encapsulation {

    string Name='kim';
   public string LastName='bilir';
    
    public string getName() {
        return Name;
        
    } 
    public string setName(string newName){
        this.Name=newName +' nem';
        return Name;
    }
    
}