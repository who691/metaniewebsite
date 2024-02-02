if(salaryState.length>0  ){
    queryCondition=and(  where('salary' , '==' , salaryState)  );

    if(child.length>0){
           queryCondition=and(  where('salary' , '==' , salaryState),
           where('haveChild' , '==' , child) 
            ); 

            if(selectedState.length>0){
                  queryCondition=and(  where('salary' , '==' , salaryState) ,
           where('country' , '==' , selectedState),    
           where('haveChild' , '==' , child)   
                    ); 


                    if(classState.length>0){
                         queryCondition=and(  where('salary' , '==' , salaryState) ,
                         where('haveclass' , '==' , classState) ,  
                         where('country' , '==' , selectedState),    
                         where('haveChild' , '==' , child)   
                                  ); 

                                  if(expState.length>0){
                                       queryCondition=and(  where('salary' , '==' , salaryState) ,
                                       where('haveExpireance' , '==' , expState),  
                                       where('haveclass' , '==' , classState) ,  
                                       where('country' , '==' , selectedState),  
                                where('haveChild' , '==' , child)   
                                         ); 

                                         if(language.length>0){
                                              queryCondition=and(  where('salary' , '==' , salaryState) ,
                                              where('language' , '==' , language) ,
                                              where('haveExpireance' , '==' , expState), 
                                              where('haveclass' , '==' , classState) ,  
                                              where('country' , '==' , selectedState),  
                                       where('haveChild' , '==' , child)   
                                                ); 

                                               if(empState.length>0 ){
                                                     queryCondition=and(  where('salary' , '==' , salaryState) ,
                                                     where('isPartime' , '==' , empState) ,
                                                     where('language' , '==' , language) ,
                                                     where('haveExpireance' , '==' , expState), 
                                                     where('haveclass' , '==' , classState) ,  
                                                     where('country' , '==' , selectedState),  
                                              where('haveChild' , '==' , child)   
                                                       ); 


                                                       if(live.length>0 ){
                                                            queryCondition=and(  where('salary' , '==' , salaryState) ,
                                                            where('liveIn' , '==' , live) , 
                                                            where('isPartime' , '==' , empState) ,
                                                            where('language' , '==' , language) ,
                                                            where('haveExpireance' , '==' , expState), 
                                                            where('haveclass' , '==' , classState) ,  
                                                            where('country' , '==' , selectedState),  
                                                     where('haveChild' , '==' , child)   
                                                              ); 


                                                              if(selectedArea.length>0 ){
                                                                   queryCondition=and(  where('salary' , '==' , salaryState) ,
                                                                   where('cityId' , '==' , selectedArea), 
                                                                   where('liveIn' , '==' , live) , 
                                                                   where('isPartime' , '==' , empState) ,
                                                                   where('language' , '==' , language) ,
                                                                   where('haveExpireance' , '==' , expState), 
                                                                   where('haveclass' , '==' , classState) ,  
                                                                   where('country' , '==' , selectedState),  
                                                            where('haveChild' , '==' , child)   
                                                                     ); 




                                                                   if(religion.length>0 ){
                                                                          queryCondition=and(  where('salary' , '==' , salaryState) ,
                                                                          where('religion' , '==' , religion),
                                                                          where('cityId' , '==' , selectedArea), 
                                                                          where('liveIn' , '==' , live) , 
                                                                          where('isPartime' , '==' , empState) ,
                                                                          where('language' , '==' , language) ,
                                                                          where('haveExpireance' , '==' , expState), 
                                                                          where('haveclass' , '==' , classState) ,  
                                                                          where('country' , '==' , selectedState),  
                                                                   where('haveChild' , '==' , child)   
                                                                            ); 



                                                                          if( serviceState.length>0   ){
                                                                                 queryCondition=and(  where('salary' , '==' , salaryState) ,
                                                                                 where('workType' , 'array-contains-any' , [  { label: serviceState, value: serviceState }] ),   
                                                                                 where('religion' , '==' , religion),
                                                                                 where('cityId' , '==' , selectedArea), 
                                                                                 where('liveIn' , '==' , live) , 
                                                                                 where('isPartime' , '==' , empState) ,
                                                                                 where('language' , '==' , language) ,
                                                                                 where('haveExpireance' , '==' , expState), 
                                                                                 where('haveclass' , '==' , classState) ,  
                                                                                 where('country' , '==' , selectedState),  
                                                                          where('haveChild' , '==' , child)   
                                                                                   ); 


                                                                                  if( age.length>0   ){
                                                                                        queryCondition=and(  where('salary' , '==' , salaryState) ,
                                                                                        where('age' , '>=' , minimumAge) , where('age' , '<=' , maxAge) ,
                                                                                        where('workType' , 'array-contains-any' , [  { label: serviceState, value: serviceState }] ),  
                                                                                        where('religion' , '==' , religion),
                                                                                        where('cityId' , '==' , selectedArea), 
                                                                                        where('liveIn' , '==' , live) , 
                                                                                        where('isPartime' , '==' , empState) ,
                                                                                        where('language' , '==' , language) ,
                                                                                        where('haveExpireance' , '==' , expState), 
                                                                                        where('haveclass' , '==' , classState) ,  
                                                                                        where('country' , '==' , selectedState),  
                                                                                 where('haveChild' , '==' , child)   
                                                                                          ); 
    
                                                                           }   


                                                                   
                                                                           }
                                                                      

                                                                    }


                                                             }

                                               }

                                              }
                                       }
                                }
                         }

                  }



  }




















































  

  else if(selectedState.length>0 ){
    queryCondition=and(  where('salary' , '==' , salaryState) ,
    where('country' , '==' , selectedState),      
             );   
                         
             if(child.length>0){
                queryCondition=and(  where('salary' , '==' , salaryState) ,
         where('country' , '==' , selectedState),    
         where('haveChild' , '==' , child)   
                  ); 


                  if(classState.length>0){
                       queryCondition=and(  where('salary' , '==' , salaryState) ,
                       where('haveclass' , '==' , classState) ,  
                       where('country' , '==' , selectedState),    
                       where('haveChild' , '==' , child)   
                                ); 

                                if(expState.length>0){
                                     queryCondition=and(  where('salary' , '==' , salaryState) ,
                                     where('haveExpireance' , '==' , expState),  
                                     where('haveclass' , '==' , classState) ,  
                                     where('country' , '==' , selectedState),  
                              where('haveChild' , '==' , child)   
                                       ); 

                                       if(language.length>0){
                                            queryCondition=and(  where('salary' , '==' , salaryState) ,
                                            where('language' , '==' , language) ,
                                            where('haveExpireance' , '==' , expState), 
                                            where('haveclass' , '==' , classState) ,  
                                            where('country' , '==' , selectedState),  
                                     where('haveChild' , '==' , child)   
                                              ); 

                                             if(empState.length>0 ){
                                                   queryCondition=and(  where('salary' , '==' , salaryState) ,
                                                   where('isPartime' , '==' , empState) ,
                                                   where('language' , '==' , language) ,
                                                   where('haveExpireance' , '==' , expState), 
                                                   where('haveclass' , '==' , classState) ,  
                                                   where('country' , '==' , selectedState),  
                                            where('haveChild' , '==' , child)   
                                                     ); 


                                                     if(live.length>0 ){
                                                          queryCondition=and(  where('salary' , '==' , salaryState) ,
                                                          where('liveIn' , '==' , live) , 
                                                          where('isPartime' , '==' , empState) ,
                                                          where('language' , '==' , language) ,
                                                          where('haveExpireance' , '==' , expState), 
                                                          where('haveclass' , '==' , classState) ,  
                                                          where('country' , '==' , selectedState),  
                                                   where('haveChild' , '==' , child)   
                                                            ); 


                                                            if(selectedArea.length>0 ){
                                                                 queryCondition=and(  where('salary' , '==' , salaryState) ,
                                                                 where('cityId' , '==' , selectedArea), 
                                                                 where('liveIn' , '==' , live) , 
                                                                 where('isPartime' , '==' , empState) ,
                                                                 where('language' , '==' , language) ,
                                                                 where('haveExpireance' , '==' , expState), 
                                                                 where('haveclass' , '==' , classState) ,  
                                                                 where('country' , '==' , selectedState),  
                                                          where('haveChild' , '==' , child)   
                                                                   ); 




                                                                 if(religion.length>0 ){
                                                                        queryCondition=and(  where('salary' , '==' , salaryState) ,
                                                                        where('religion' , '==' , religion),
                                                                        where('cityId' , '==' , selectedArea), 
                                                                        where('liveIn' , '==' , live) , 
                                                                        where('isPartime' , '==' , empState) ,
                                                                        where('language' , '==' , language) ,
                                                                        where('haveExpireance' , '==' , expState), 
                                                                        where('haveclass' , '==' , classState) ,  
                                                                        where('country' , '==' , selectedState),  
                                                                 where('haveChild' , '==' , child)   
                                                                          ); 



                                                                        if( serviceState.length>0   ){
                                                                               queryCondition=and(  where('salary' , '==' , salaryState) ,
                                                                               where('workType' , 'array-contains-any' , [  { label: serviceState, value: serviceState }] ),   
                                                                               where('religion' , '==' , religion),
                                                                               where('cityId' , '==' , selectedArea), 
                                                                               where('liveIn' , '==' , live) , 
                                                                               where('isPartime' , '==' , empState) ,
                                                                               where('language' , '==' , language) ,
                                                                               where('haveExpireance' , '==' , expState), 
                                                                               where('haveclass' , '==' , classState) ,  
                                                                               where('country' , '==' , selectedState),  
                                                                        where('haveChild' , '==' , child)   
                                                                                 ); 


                                                                                if( age.length>0   ){
                                                                                      queryCondition=and(  where('salary' , '==' , salaryState) ,
                                                                                      where('age' , '>=' , minimumAge) , where('age' , '<=' , maxAge) ,
                                                                                      where('workType' , 'array-contains-any' , [  { label: serviceState, value: serviceState }] ),  
                                                                                      where('religion' , '==' , religion),
                                                                                      where('cityId' , '==' , selectedArea), 
                                                                                      where('liveIn' , '==' , live) , 
                                                                                      where('isPartime' , '==' , empState) ,
                                                                                      where('language' , '==' , language) ,
                                                                                      where('haveExpireance' , '==' , expState), 
                                                                                      where('haveclass' , '==' , classState) ,  
                                                                                      where('country' , '==' , selectedState),  
                                                                               where('haveChild' , '==' , child)   
                                                                                        ); 
  
                                                                         }   


                                                                 
                                                                         }
                                                                    

                                                                  }


                                                           }

                                             }

                                            }
                                     }
                              }
                       }

                }   

                else if(classState.length>0){

                }

                else if ( expState.length>0  ){
                    
                }
                
                
                else if( language.length>0   ){
                  
                }

                
                else if( empState.length>0  ){
                   
                }
                
                
                else if( live.length>0  ){
                    
                }
                
              
                
                else if(  selectedArea.length>0  ){
                  
                }
                
                
                else if(  religion.length>0   ){
            
                }
                
            
                
                else if(   serviceState.length>0     ){
                    
                }
                
                
                else if( age.length>0 ){
                
                }



}







  
  else if(classState.length>0  ){
    queryCondition=and(  where('salary' , '==' , salaryState) ,  
        where('haveclass' , '==' , classState) ,
             );


             if(child.length>0){

             }

           else  if(selectedState.length>0){

             }

             else if ( expState.length>0  ){
                 
             }
             
             
             else if( language.length>0   ){
               
             }

             
             else if( empState.length>0  ){
                
             }
             
             
             else if( live.length>0  ){
                 
             }
             
           
             
             else if(  selectedArea.length>0  ){
               
             }
             
             
             else if(  religion.length>0   ){
         
             }
             
         
             
             else if(   serviceState.length>0     ){
                 
             }
             
             
             else if( age.length>0 ){
             
             }

             
}



else if ( expState.length>0  ){
    queryCondition=and(  where('salary' , '==' , salaryState) ,
    where('haveExpireance' , '==' , expState), 
             );

             
             if(child.length>0){

             }

           else  if(selectedState.length>0){
             }

             else if(classState.length>0){

             }

             else if ( expState.length>0  ){
                 
             }
             
             
             else if( language.length>0   ){
               
             }

             
             else if( empState.length>0  ){
                
             }
             
             
             else if( live.length>0  ){
                 
             }
             
           
             
             else if(  selectedArea.length>0  ){
               
             }
             
             
             else if(  religion.length>0   ){
         
             }
             
         
             
             else if(   serviceState.length>0     ){
                 
             }
             
             
             else if( age.length>0 ){
             
             }
}


else if( language.length>0   ){
    queryCondition=and(  where('salary' , '==' , salaryState),
    where('language' , '==' , language) ,
             );
}





else if( empState.length>0  ){
    queryCondition=and(  where('salary' , '==' , salaryState) ,
    where('isPartime' , '==' , empState) 
             );
}





else if( live.length>0  ){
    queryCondition=and(  where('salary' , '==' , salaryState) ,
    where('liveIn' , '==' , live) ,    
             );
}






else if(  selectedArea.length>0  ){
    queryCondition=and(  where('salary' , '==' , salaryState) ,
    where('cityId' , '==' , selectedArea), 
             );
}





else if(  religion.length>0   ){
    queryCondition=and(  where('salary' , '==' , salaryState) ,
    where('religion' , '==' , religion),
             );
}






else if(   serviceState.length>0     ){
    queryCondition=and(  where('salary' , '==' , salaryState) ,
    where('workType' , 'array-contains-any' , [  { label: serviceState, value: serviceState }] ),      
             );
}





else if( age.length>0 ){
    queryCondition=and(  where('salary' , '==' , salaryState) ,
    where('age' , '>=' , minimumAge) , where('age' , '<=' , maxAge)    
             );
}





}