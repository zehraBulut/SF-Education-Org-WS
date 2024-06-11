public with sharing class AccountOlusturLwcile {
  @AuraEnabled
  public static string accountOlustur(String accName){
    try {
        
        Account acc = new Account();
        acc.Name=accName;
        insert acc;


        if(acc.id != null ){

            return 'MALADETS';
            }else{
                return 'IZVINI';
            }

    } catch (Exception e) {
        throw new AuraHandledException(e.getMessage());
    }
  }
}