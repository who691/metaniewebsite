if( religion.length>0  ){
       queryCondition=and(  where('religion' , '==' , religion)  );

       if(child.length>0){
              queryCondition=and(  where('religion' , '==' , religion),
              where('haveChild' , '==' , child) 
               ); 

               if(selectedState.length>0){
                     queryCondition=and(  where('religion' , '==' , religion) ,
              where('country' , '==' , selectedState),    
              where('haveChild' , '==' , child)   
                       ); 


                       if(classState.length>0){
                            queryCondition=and(  where('religion' , '==' , religion) ,
                            where('haveclass' , '==' , classState) ,  
                            where('country' , '==' , selectedState),    
                            where('haveChild' , '==' , child)   
                                     ); 

                                     if(expState.length>0){
                                          queryCondition=and(  where('religion' , '==' , religion) ,
                                          where('haveExpireance' , '==' , expState),  
                                          where('haveclass' , '==' , classState) ,  
                                          where('country' , '==' , selectedState),  
                                   where('haveChild' , '==' , child)   
                                            ); 

                                            if(language.length>0){
                                                 queryCondition=and(  where('religion' , '==' , religion) ,
                                                 where('language' , '==' , language) ,
                                                 where('haveExpireance' , '==' , expState), 
                                                 where('haveclass' , '==' , classState) ,  
                                                 where('country' , '==' , selectedState),  
                                          where('haveChild' , '==' , child)   
                                                   ); 

                                                  if(empState.length>0 ){
                                                        queryCondition=and(  where('religion' , '==' , religion) ,
                                                        where('isPartime' , '==' , empState) ,
                                                        where('language' , '==' , language) ,
                                                        where('haveExpireance' , '==' , expState), 
                                                        where('haveclass' , '==' , classState) ,  
                                                        where('country' , '==' , selectedState),  
                                                 where('haveChild' , '==' , child)   
                                                          ); 


                                                          if(live.length>0 ){
                                                               queryCondition=and(  where('religion' , '==' , religion) ,
                                                               where('liveIn' , '==' , live) , 
                                                               where('isPartime' , '==' , empState) ,
                                                               where('language' , '==' , language) ,
                                                               where('haveExpireance' , '==' , expState), 
                                                               where('haveclass' , '==' , classState) ,  
                                                               where('country' , '==' , selectedState),  
                                                        where('haveChild' , '==' , child)   
                                                                 ); 


                                                                 if(selectedArea.length>0 ){
                                                                      queryCondition=and(  where('religion' , '==' , religion) ,
                                                                      where('cityId' , '==' , selectedArea), 
                                                                      where('liveIn' , '==' , live) , 
                                                                      where('isPartime' , '==' , empState) ,
                                                                      where('language' , '==' , language) ,
                                                                      where('haveExpireance' , '==' , expState), 
                                                                      where('haveclass' , '==' , classState) ,  
                                                                      where('country' , '==' , selectedState),  
                                                               where('haveChild' , '==' , child)   
                                                                        ); 




                                                                      if(salaryState.length>0 ){
                                                                             queryCondition=and(  where('religion' , '==' , religion) ,
                                                                             where('salary' , '==' , salaryState),
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
                                                                                    queryCondition=and(  where('religion' , '==' , religion) ,
                                                                                    where('workType' , 'array-contains-any' , [  { label: serviceState, value: serviceState }] ),   
                                                                                    where('salary' , '==' , salaryState),
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
                                                                                           queryCondition=and(  where('religion' , '==' , religion) ,
                                                                                           where('age' , '>=' , minimumAge) , where('age' , '<=' , maxAge) ,
                                                                                           where('workType' , 'array-contains-any' , [  { label: serviceState, value: serviceState }] ),  
                                                                                           where('salary' , '==' , salaryState),
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


}