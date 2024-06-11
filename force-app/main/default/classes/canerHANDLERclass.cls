public class canerHANDLERclass {
  public static boolean i=true;
    public static void canerHANDLERclass2(List<opportunity> triggerX){
        for(opportunity opp:triggerX){
        
            if(i) {i=false;
                    opportunity newOpp = new opportunity();
                    newOpp.name='trigger deneme';
                    newOpp.stageName='prospecting';
                    newOpp.closeDate=Date.today()+5;
          insert newOpp;        
 
    }
  }
 }
}