trigger canerExample on Opportunity (before insert,before update,before delete,after insert,after update,after delete,after undelete) {

SWITCH on Trigger.operationType {
        WHEN BEFORE_INSERT  {  }
        WHEN BEFORE_UPDATE  { }
        WHEN BEFORE_DELETE  { }
    
        WHEN AFTER_INSERT   {
        canerHANDLERclass.canerHANDLERclass2(trigger.new);
        }
    
        WHEN AFTER_UPDATE   { }
        WHEN AFTER_DELETE   { }
        WHEN AFTER_UNDELETE { }
    }
}