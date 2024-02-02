let queryCondition;


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


}
else if(age.length>0  ){
       queryCondition=and(  where('age' , '>=' , minimumAge) , where('age' , '<=' , maxAge) , );

       if(child.length>0){
              queryCondition=and(  where('age' , '>=' , minimumAge) , where('age' , '<=' , maxAge),
              where('haveChild' , '==' , child) 
               ); 

               if(selectedState.length>0){
                     queryCondition=and(  where('age' , '>=' , minimumAge) , where('age' , '<=' , maxAge) ,
              where('country' , '==' , selectedState),    
              where('haveChild' , '==' , child)   
                       ); 


                       if(classState.length>0){
                            queryCondition=and(  where('age' , '>=' , minimumAge) , where('age' , '<=' , maxAge) ,
                            where('haveclass' , '==' , classState) ,  
                            where('country' , '==' , selectedState),    
                            where('haveChild' , '==' , child)   
                                     ); 

                                     if(expState.length>0){
                                          queryCondition=and(  where('age' , '>=' , minimumAge) , where('age' , '<=' , maxAge) ,
                                          where('haveExpireance' , '==' , expState),  
                                          where('haveclass' , '==' , classState) ,  
                                          where('country' , '==' , selectedState),  
                                   where('haveChild' , '==' , child)   
                                            ); 

                                            if(language.length>0){
                                                 queryCondition=and(  where('age' , '>=' , minimumAge) , where('age' , '<=' , maxAge) ,
                                                 where('language' , '==' , language) ,
                                                 where('haveExpireance' , '==' , expState), 
                                                 where('haveclass' , '==' , classState) ,  
                                                 where('country' , '==' , selectedState),  
                                          where('haveChild' , '==' , child)   
                                                   ); 

                                                  if(empState.length>0 ){
                                                        queryCondition=and(  where('age' , '>=' , minimumAge) , where('age' , '<=' , maxAge) ,
                                                        where('isPartime' , '==' , empState) ,
                                                        where('language' , '==' , language) ,
                                                        where('haveExpireance' , '==' , expState), 
                                                        where('haveclass' , '==' , classState) ,  
                                                        where('country' , '==' , selectedState),  
                                                 where('haveChild' , '==' , child)   
                                                          ); 


                                                          if(live.length>0 ){
                                                               queryCondition=and(  where('age' , '>=' , minimumAge) , where('age' , '<=' , maxAge) ,
                                                               where('liveIn' , '==' , live) , 
                                                               where('isPartime' , '==' , empState) ,
                                                               where('language' , '==' , language) ,
                                                               where('haveExpireance' , '==' , expState), 
                                                               where('haveclass' , '==' , classState) ,  
                                                               where('country' , '==' , selectedState),  
                                                        where('haveChild' , '==' , child)   
                                                                 ); 


                                                                 if(selectedArea.length>0 ){
                                                                      queryCondition=and(  where('age' , '>=' , minimumAge) , where('age' , '<=' , maxAge) ,
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
                                                                             queryCondition=and(  where('age' , '>=' , minimumAge) , where('age' , '<=' , maxAge) ,
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
                                                                                    queryCondition=and(  where('age' , '>=' , minimumAge) , where('age' , '<=' , maxAge) ,
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


                                                                                     if( salaryState.length>0   ){
                                                                                           queryCondition=and(  where('salary' , '==' , salaryState),
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


}
else if(serviceState.length>0  ){
 queryCondition=and(  where('workType' , 'array-contains-any' , [  { label: serviceState, value: serviceState }] ) , );

 if(child.length>0){
        queryCondition=and(  where('workType' , 'array-contains-any' , [  { label: serviceState, value: serviceState }] ) ,
        where('haveChild' , '==' , child) 
         ); 

         if(selectedState.length>0){
               queryCondition=and(  where('workType' , 'array-contains-any' , [  { label: serviceState, value: serviceState }] ) ,
        where('country' , '==' , selectedState),    
        where('haveChild' , '==' , child)   
                 ); 


                 if(classState.length>0){
                      queryCondition=and(  where('workType' , 'array-contains-any' , [  { label: serviceState, value: serviceState }] ) ,
                      where('haveclass' , '==' , classState) ,  
                      where('country' , '==' , selectedState),    
                      where('haveChild' , '==' , child)   
                               ); 

                               if(expState.length>0){
                                    queryCondition=and(  where('workType' , 'array-contains-any' , [  { label: serviceState, value: serviceState }] ) ,
                                    where('haveExpireance' , '==' , expState),  
                                    where('haveclass' , '==' , classState) ,  
                                    where('country' , '==' , selectedState),  
                             where('haveChild' , '==' , child)   
                                      ); 

                                      if(language.length>0){
                                           queryCondition=and(  where('workType' , 'array-contains-any' , [  { label: serviceState, value: serviceState }] ) ,
                                           where('language' , '==' , language) ,
                                           where('haveExpireance' , '==' , expState), 
                                           where('haveclass' , '==' , classState) ,  
                                           where('country' , '==' , selectedState),  
                                    where('haveChild' , '==' , child)   
                                             ); 

                                            if(empState.length>0 ){
                                                  queryCondition=and(  where('workType' , 'array-contains-any' , [  { label: serviceState, value: serviceState }] ) ,
                                                  where('isPartime' , '==' , empState) ,
                                                  where('language' , '==' , language) ,
                                                  where('haveExpireance' , '==' , expState), 
                                                  where('haveclass' , '==' , classState) ,  
                                                  where('country' , '==' , selectedState),  
                                           where('haveChild' , '==' , child)   
                                                    ); 


                                                    if(live.length>0 ){
                                                         queryCondition=and(  where('workType' , 'array-contains-any' , [  { label: serviceState, value: serviceState }] ) ,
                                                         where('liveIn' , '==' , live) , 
                                                         where('isPartime' , '==' , empState) ,
                                                         where('language' , '==' , language) ,
                                                         where('haveExpireance' , '==' , expState), 
                                                         where('haveclass' , '==' , classState) ,  
                                                         where('country' , '==' , selectedState),  
                                                  where('haveChild' , '==' , child)   
                                                           ); 


                                                           if(selectedArea.length>0 ){
                                                                queryCondition=and(  where('workType' , 'array-contains-any' , [  { label: serviceState, value: serviceState }] ) ,
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
                                                                       queryCondition=and(  where('workType' , 'array-contains-any' , [  { label: serviceState, value: serviceState }] ) ,
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



                                                                       if( salaryState.length>0   ){
                                                                              queryCondition=and(  
                                                                              where('workType' , 'array-contains-any' , [  { label: serviceState, value: serviceState }] ),  
                                                                              where('salary' , '==' , salaryState), 
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
                                                                                     queryCondition=and(  where('salary' , '==' , salaryState),
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


}
else if(selectedArea.length>0  ){
queryCondition=and(  where('cityId' , '==' , selectedArea)  , );

if(child.length>0){
      queryCondition=and(  where('cityId' , '==' , selectedArea)  ,
      where('haveChild' , '==' , child) 
       ); 

       if(selectedState.length>0){
             queryCondition=and(  where('cityId' , '==' , selectedArea)  ,
      where('country' , '==' , selectedState),    
      where('haveChild' , '==' , child)   
               ); 


               if(classState.length>0){
                    queryCondition=and(  where('cityId' , '==' , selectedArea)  ,
                    where('haveclass' , '==' , classState) ,  
                    where('country' , '==' , selectedState),    
                    where('haveChild' , '==' , child)   
                             ); 

                             if(expState.length>0){
                                  queryCondition=and(  where('cityId' , '==' , selectedArea)  ,
                                  where('haveExpireance' , '==' , expState),  
                                  where('haveclass' , '==' , classState) ,  
                                  where('country' , '==' , selectedState),  
                           where('haveChild' , '==' , child)   
                                    ); 

                                    if(language.length>0){
                                         queryCondition=and(  where('cityId' , '==' , selectedArea)  ,
                                         where('language' , '==' , language) ,
                                         where('haveExpireance' , '==' , expState), 
                                         where('haveclass' , '==' , classState) ,  
                                         where('country' , '==' , selectedState),  
                                  where('haveChild' , '==' , child)   
                                           ); 

                                          if(empState.length>0 ){
                                                queryCondition=and(  where('cityId' , '==' , selectedArea)  ,
                                                where('isPartime' , '==' , empState) ,
                                                where('language' , '==' , language) ,
                                                where('haveExpireance' , '==' , expState), 
                                                where('haveclass' , '==' , classState) ,  
                                                where('country' , '==' , selectedState),  
                                         where('haveChild' , '==' , child)   
                                                  ); 


                                                  if(live.length>0 ){
                                                       queryCondition=and(  where('cityId' , '==' , selectedArea)  ,
                                                       where('liveIn' , '==' , live) , 
                                                       where('isPartime' , '==' , empState) ,
                                                       where('language' , '==' , language) ,
                                                       where('haveExpireance' , '==' , expState), 
                                                       where('haveclass' , '==' , classState) ,  
                                                       where('country' , '==' , selectedState),  
                                                where('haveChild' , '==' , child)   
                                                         ); 


                                                         if(salaryState.length>0 ){
                                                              queryCondition=and(  where('cityId' , '==' , selectedArea)  ,
                                                              where('salary' , '==' , salaryState),                                                        
                                                              where('liveIn' , '==' , live) , 
                                                              where('isPartime' , '==' , empState) ,
                                                              where('language' , '==' , language) ,
                                                              where('haveExpireance' , '==' , expState), 
                                                              where('haveclass' , '==' , classState) ,  
                                                              where('country' , '==' , selectedState),  
                                                       where('haveChild' , '==' , child)   
                                                                ); 




                                                              if(religion.length>0 ){
                                                                     queryCondition=and(  
                                                                     where('salary' , '==' , salaryState),
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
                                                                            queryCondition=and(  where('cityId' , '==' , selectedArea)  ,
                                                                            where('salary' , '==' , salaryState),
                                                                            where('religion' , '==' , religion),
                                                                            where('workType' , 'array-contains-any' , [  { label: serviceState, value: serviceState }] ),
                                                                            where('liveIn' , '==' , live) , 
                                                                            where('isPartime' , '==' , empState) ,
                                                                            where('language' , '==' , language) ,
                                                                            where('haveExpireance' , '==' , expState), 
                                                                            where('haveclass' , '==' , classState) ,  
                                                                            where('country' , '==' , selectedState),  
                                                                     where('haveChild' , '==' , child)   
                                                                              ); 


                                                                             if( age.length>0   ){
                                                                                   queryCondition=and(  where('salary' , '==' , salaryState),
                                                                                   where('age' , '>=' , minimumAge) , where('age' , '<=' , maxAge) ,
                                                                                   where('cityId' , '==' , selectedArea) ,  
                                                                                   where('religion' , '==' , religion),
                                                                                   where('workType' , 'array-contains-any' , [  { label: serviceState, value: serviceState }] ),
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
else if(selectedState.length>0  ){
queryCondition=and(  where('country' , '==' , selectedState)   );

if(child.length>0){
      queryCondition=and(  where('country' , '==' , selectedState) ,
      where('haveChild' , '==' , child) 
       ); 

       if(salaryState.length>0){
             queryCondition=and(  where('salary' , '==' , salaryState)  ,
      where('country' , '==' , selectedState),    
      where('haveChild' , '==' , child)   
               ); 


               if(classState.length>0){
                    queryCondition=and(  where('country' , '==' , selectedState)  ,
                    where('haveclass' , '==' , classState) ,  
                    where('salary' , '==' , salaryState) ,   
                    where('haveChild' , '==' , child)   
                             ); 

                             if(expState.length>0){
                                  queryCondition=and(  where('country' , '==' , selectedState)  ,
                                  where('haveExpireance' , '==' , expState),  
                                  where('haveclass' , '==' , classState) ,  
                                  where('salary' , '==' , salaryState) ,
                           where('haveChild' , '==' , child)   
                                    ); 

                                    if(language.length>0){
                                         queryCondition=and(  where('country' , '==' , selectedState)  ,
                                         where('language' , '==' , language) ,
                                         where('haveExpireance' , '==' , expState), 
                                         where('haveclass' , '==' , classState) ,  
                                         where('salary' , '==' , salaryState) , 
                                  where('haveChild' , '==' , child)   
                                           ); 

                                          if(empState.length>0 ){
                                                queryCondition=and(  where('country' , '==' , selectedState)  ,
                                                where('isPartime' , '==' , empState) ,
                                                where('language' , '==' , language) ,
                                                where('haveExpireance' , '==' , expState), 
                                                where('haveclass' , '==' , classState) ,  
                                                where('salary' , '==' , salaryState) ,  
                                         where('haveChild' , '==' , child)   
                                                  ); 


                                                  if(live.length>0 ){
                                                       queryCondition=and(  where('country' , '==' , selectedState)  ,
                                                       where('liveIn' , '==' , live) , 
                                                       where('isPartime' , '==' , empState) ,
                                                       where('language' , '==' , language) ,
                                                       where('haveExpireance' , '==' , expState), 
                                                       where('haveclass' , '==' , classState) ,  
                                                       where('salary' , '==' , salaryState) ,
                                                where('haveChild' , '==' , child)   
                                                         ); 


                                                         if(selectedArea.length>0 ){
                                                              queryCondition=and(  where('country' , '==' , selectedState)  ,
                                                              where('cityId' , '==' , selectedArea), 
                                                              where('liveIn' , '==' , live) , 
                                                              where('isPartime' , '==' , empState) ,
                                                              where('language' , '==' , language) ,
                                                              where('haveExpireance' , '==' , expState), 
                                                              where('haveclass' , '==' , classState) ,  
                                                              where('salary' , '==' , salaryState) ,
                                                       where('haveChild' , '==' , child)   
                                                                ); 




                                                              if(religion.length>0 ){
                                                                     queryCondition=and(  where('country' , '==' , selectedState)  ,
                                                                     where('religion' , '==' , religion),
                                                                     where('cityId' , '==' , selectedArea), 
                                                                     where('liveIn' , '==' , live) , 
                                                                     where('isPartime' , '==' , empState) ,
                                                                     where('language' , '==' , language) ,
                                                                     where('haveExpireance' , '==' , expState), 
                                                                     where('haveclass' , '==' , classState) ,  
                                                                     where('salary' , '==' , salaryState) ,
                                                              where('haveChild' , '==' , child)   
                                                                       ); 



                                                                     if( serviceState.length>0   ){
                                                                            queryCondition=and(  where('country' , '==' , selectedState)  ,
                                                                            where('workType' , 'array-contains-any' , [  { label: serviceState, value: serviceState }] ),   
                                                                            where('religion' , '==' , religion),
                                                                            where('cityId' , '==' , selectedArea), 
                                                                            where('liveIn' , '==' , live) , 
                                                                            where('isPartime' , '==' , empState) ,
                                                                            where('language' , '==' , language) ,
                                                                            where('haveExpireance' , '==' , expState), 
                                                                            where('haveclass' , '==' , classState) ,  
                                                                            where('salary' , '==' , salaryState) ,
                                                                     where('haveChild' , '==' , child)   
                                                                              ); 


                                                                             if( age.length>0   ){
                                                                                   queryCondition=and(  where('country' , '==' , selectedState)  ,
                                                                                   where('age' , '>=' , minimumAge) , where('age' , '<=' , maxAge) ,
                                                                                   where('workType' , 'array-contains-any' , [  { label: serviceState, value: serviceState }] ),  
                                                                                   where('religion' , '==' , religion),
                                                                                   where('cityId' , '==' , selectedArea), 
                                                                                   where('liveIn' , '==' , live) , 
                                                                                   where('isPartime' , '==' , empState) ,
                                                                                   where('language' , '==' , language) ,
                                                                                   where('haveExpireance' , '==' , expState), 
                                                                                   where('haveclass' , '==' , classState) ,  
                                                                                   where('salary' , '==' , salaryState) ,
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

else if(classState.length>0  ){
queryCondition=and(   where('haveclass' , '==' , classState)    );

if(child.length>0){
      queryCondition=and(   where('haveclass' , '==' , classState)  ,
      where('haveChild' , '==' , child) 
       ); 

       if(selectedState.length>0){
             queryCondition=and(   where('haveclass' , '==' , classState)   ,
      where('country' , '==' , selectedState),    
      where('haveChild' , '==' , child)   
               ); 


               if(salaryState.length>0){
                    queryCondition=and(   where('haveclass' , '==' , classState)   ,
                    where('salary' , '==' , salaryState) , 
                    where('country' , '==' , selectedState),    
                    where('haveChild' , '==' , child)   
                             ); 

                             if(expState.length>0){
                                  queryCondition=and(   where('haveclass' , '==' , classState)   ,
                                  where('haveExpireance' , '==' , expState),  
                                  where('salary' , '==' , salaryState) ,  
                                  where('country' , '==' , selectedState),  
                           where('haveChild' , '==' , child)   
                                    ); 

                                    if(language.length>0){
                                         queryCondition=and(   where('haveclass' , '==' , classState)   ,
                                         where('language' , '==' , language) ,
                                         where('haveExpireance' , '==' , expState), 
                                         where('salary' , '==' , salaryState) ,  
                                         where('country' , '==' , selectedState),  
                                  where('haveChild' , '==' , child)   
                                           ); 

                                          if(empState.length>0 ){
                                                queryCondition=and(   where('haveclass' , '==' , classState)   ,
                                                where('isPartime' , '==' , empState) ,
                                                where('language' , '==' , language) ,
                                                where('haveExpireance' , '==' , expState), 
                                                where('salary' , '==' , salaryState) , 
                                                where('country' , '==' , selectedState),  
                                         where('haveChild' , '==' , child)   
                                                  ); 


                                                  if(live.length>0 ){
                                                       queryCondition=and(   where('haveclass' , '==' , classState)   ,
                                                       where('liveIn' , '==' , live) , 
                                                       where('isPartime' , '==' , empState) ,
                                                       where('language' , '==' , language) ,
                                                       where('haveExpireance' , '==' , expState), 
                                                       where('salary' , '==' , salaryState) ,  
                                                       where('country' , '==' , selectedState),  
                                                where('haveChild' , '==' , child)   
                                                         ); 


                                                         if(selectedArea.length>0 ){
                                                              queryCondition=and(   where('haveclass' , '==' , classState)   ,
                                                              where('cityId' , '==' , selectedArea), 
                                                              where('liveIn' , '==' , live) , 
                                                              where('isPartime' , '==' , empState) ,
                                                              where('language' , '==' , language) ,
                                                              where('haveExpireance' , '==' , expState), 
                                                              where('salary' , '==' , salaryState) ,   
                                                              where('country' , '==' , selectedState),  
                                                       where('haveChild' , '==' , child)   
                                                                ); 




                                                              if(religion.length>0 ){
                                                                     queryCondition=and(   where('haveclass' , '==' , classState)   ,
                                                                     where('religion' , '==' , religion),
                                                                     where('cityId' , '==' , selectedArea), 
                                                                     where('liveIn' , '==' , live) , 
                                                                     where('isPartime' , '==' , empState) ,
                                                                     where('language' , '==' , language) ,
                                                                     where('haveExpireance' , '==' , expState), 
                                                                     where('salary' , '==' , salaryState) ,  
                                                                     where('country' , '==' , selectedState),  
                                                              where('haveChild' , '==' , child)   
                                                                       ); 



                                                                     if( serviceState.length>0   ){
                                                                            queryCondition=and(   where('haveclass' , '==' , classState)   ,
                                                                            where('workType' , 'array-contains-any' , [  { label: serviceState, value: serviceState }] ),   
                                                                            where('religion' , '==' , religion),
                                                                            where('cityId' , '==' , selectedArea), 
                                                                            where('liveIn' , '==' , live) , 
                                                                            where('isPartime' , '==' , empState) ,
                                                                            where('language' , '==' , language) ,
                                                                            where('haveExpireance' , '==' , expState), 
                                                                            where('salary' , '==' , salaryState) , 
                                                                            where('country' , '==' , selectedState),  
                                                                     where('haveChild' , '==' , child)   
                                                                              ); 


                                                                             if( age.length>0   ){
                                                                                   queryCondition=and(   where('haveclass' , '==' , classState)   ,
                                                                                   where('age' , '>=' , minimumAge) , where('age' , '<=' , maxAge) ,
                                                                                   where('workType' , 'array-contains-any' , [  { label: serviceState, value: serviceState }] ),  
                                                                                   where('religion' , '==' , religion),
                                                                                   where('cityId' , '==' , selectedArea), 
                                                                                   where('liveIn' , '==' , live) , 
                                                                                   where('isPartime' , '==' , empState) ,
                                                                                   where('language' , '==' , language) ,
                                                                                   where('haveExpireance' , '==' , expState), 
                                                                                   where('salary' , '==' , salaryState) ,  
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

else if(child.length>0  ){
queryCondition=and(  where('haveChild' , '==' , child)  );

if(salaryState.length>0){
      queryCondition=and(  where('haveChild' , '==' , child),
      where('salary' , '==' , salaryState)
       ); 

       if(selectedState.length>0){
             queryCondition=and(  where('haveChild' , '==' , child) ,
      where('country' , '==' , selectedState),    
      where('salary' , '==' , salaryState)
               ); 


               if(classState.length>0){
                    queryCondition=and(  where('haveChild' , '==' , child) ,
                    where('haveclass' , '==' , classState) ,  
                    where('country' , '==' , selectedState),    
                    where('salary' , '==' , salaryState) 
                             ); 

                             if(expState.length>0){
                                  queryCondition=and(  where('haveChild' , '==' , child) ,
                                  where('haveExpireance' , '==' , expState),  
                                  where('haveclass' , '==' , classState) ,  
                                  where('country' , '==' , selectedState),  
                                  where('salary' , '==' , salaryState)  
                                    ); 

                                    if(language.length>0){
                                         queryCondition=and(  where('haveChild' , '==' , child) ,
                                         where('language' , '==' , language) ,
                                         where('haveExpireance' , '==' , expState), 
                                         where('haveclass' , '==' , classState) ,  
                                         where('country' , '==' , selectedState),  
                                         where('salary' , '==' , salaryState)
                                           ); 

                                          if(empState.length>0 ){
                                                queryCondition=and(  where('haveChild' , '==' , child) ,
                                                where('isPartime' , '==' , empState) ,
                                                where('language' , '==' , language) ,
                                                where('haveExpireance' , '==' , expState), 
                                                where('haveclass' , '==' , classState) ,  
                                                where('country' , '==' , selectedState),  
                                                where('salary' , '==' , salaryState) 
                                                  ); 


                                                  if(live.length>0 ){
                                                       queryCondition=and(  where('haveChild' , '==' , child) ,
                                                       where('liveIn' , '==' , live) , 
                                                       where('isPartime' , '==' , empState) ,
                                                       where('language' , '==' , language) ,
                                                       where('haveExpireance' , '==' , expState), 
                                                       where('haveclass' , '==' , classState) ,  
                                                       where('country' , '==' , selectedState),  
                                                       where('salary' , '==' , salaryState)  
                                                         ); 


                                                         if(selectedArea.length>0 ){
                                                              queryCondition=and(  where('haveChild' , '==' , child) ,
                                                              where('cityId' , '==' , selectedArea), 
                                                              where('liveIn' , '==' , live) , 
                                                              where('isPartime' , '==' , empState) ,
                                                              where('language' , '==' , language) ,
                                                              where('haveExpireance' , '==' , expState), 
                                                              where('haveclass' , '==' , classState) ,  
                                                              where('country' , '==' , selectedState),  
                                                              where('salary' , '==' , salaryState)  
                                                                ); 




                                                              if(religion.length>0 ){
                                                                     queryCondition=and(  where('haveChild' , '==' , child) ,
                                                                     where('religion' , '==' , religion),
                                                                     where('cityId' , '==' , selectedArea), 
                                                                     where('liveIn' , '==' , live) , 
                                                                     where('isPartime' , '==' , empState) ,
                                                                     where('language' , '==' , language) ,
                                                                     where('haveExpireance' , '==' , expState), 
                                                                     where('haveclass' , '==' , classState) ,  
                                                                     where('country' , '==' , selectedState),  
                                                                     where('salary' , '==' , salaryState)  
                                                                       ); 



                                                                     if( serviceState.length>0   ){
                                                                            queryCondition=and(  where('haveChild' , '==' , child) ,
                                                                            where('workType' , 'array-contains-any' , [  { label: serviceState, value: serviceState }] ),   
                                                                            where('religion' , '==' , religion),
                                                                            where('cityId' , '==' , selectedArea), 
                                                                            where('liveIn' , '==' , live) , 
                                                                            where('isPartime' , '==' , empState) ,
                                                                            where('language' , '==' , language) ,
                                                                            where('haveExpireance' , '==' , expState), 
                                                                            where('haveclass' , '==' , classState) ,  
                                                                            where('country' , '==' , selectedState),  
                                                                            where('salary' , '==' , salaryState)
                                                                              ); 


                                                                             if( age.length>0   ){
                                                                                   queryCondition=and(  where('haveChild' , '==' , child) ,
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
                                                                                   where('salary' , '==' , salaryState)  
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

else if(expState.length>0  ){
queryCondition=and(   where('haveExpireance' , '==' , expState)  );

if(child.length>0){
      queryCondition=and(   where('haveExpireance' , '==' , expState),
      where('haveChild' , '==' , child) 
       ); 

       if(selectedState.length>0){
             queryCondition=and(   where('haveExpireance' , '==' , expState) ,
      where('country' , '==' , selectedState),    
      where('haveChild' , '==' , child)   
               ); 


               if(classState.length>0){
                    queryCondition=and(   where('haveExpireance' , '==' , expState) ,
                    where('haveclass' , '==' , classState) ,  
                    where('country' , '==' , selectedState),    
                    where('haveChild' , '==' , child)   
                             ); 

                             if(salaryState.length>0){
                                  queryCondition=and(   where('haveExpireance' , '==' , expState) ,
                                  where('salary' , '==' , salaryState) ,
                                  where('haveclass' , '==' , classState) ,  
                                  where('country' , '==' , selectedState),  
                           where('haveChild' , '==' , child)   
                                    ); 

                                    if(language.length>0){
                                         queryCondition=and(   where('haveExpireance' , '==' , expState) ,
                                         where('language' , '==' , language) ,
                                         where('salary' , '==' , salaryState) ,
                                         where('haveclass' , '==' , classState) ,  
                                         where('country' , '==' , selectedState),  
                                  where('haveChild' , '==' , child)   
                                           ); 

                                          if(empState.length>0 ){
                                                queryCondition=and(   where('haveExpireance' , '==' , expState) ,
                                                where('isPartime' , '==' , empState) ,
                                                where('language' , '==' , language) ,
                                                where('salary' , '==' , salaryState) ,
                                                where('haveclass' , '==' , classState) ,  
                                                where('country' , '==' , selectedState),  
                                         where('haveChild' , '==' , child)   
                                                  ); 


                                                  if(live.length>0 ){
                                                       queryCondition=and(   where('haveExpireance' , '==' , expState) ,
                                                       where('liveIn' , '==' , live) , 
                                                       where('isPartime' , '==' , empState) ,
                                                       where('language' , '==' , language) ,
                                                       where('salary' , '==' , salaryState) ,
                                                       where('haveclass' , '==' , classState) ,  
                                                       where('country' , '==' , selectedState),  
                                                where('haveChild' , '==' , child)   
                                                         ); 


                                                         if(selectedArea.length>0 ){
                                                              queryCondition=and(   where('haveExpireance' , '==' , expState) ,
                                                              where('cityId' , '==' , selectedArea), 
                                                              where('liveIn' , '==' , live) , 
                                                              where('isPartime' , '==' , empState) ,
                                                              where('language' , '==' , language) ,
                                                              where('salary' , '==' , salaryState) ,
                                                              where('haveclass' , '==' , classState) ,  
                                                              where('country' , '==' , selectedState),  
                                                       where('haveChild' , '==' , child)   
                                                                ); 




                                                              if(religion.length>0 ){
                                                                     queryCondition=and(   where('haveExpireance' , '==' , expState) ,
                                                                     where('religion' , '==' , religion),
                                                                     where('cityId' , '==' , selectedArea), 
                                                                     where('liveIn' , '==' , live) , 
                                                                     where('isPartime' , '==' , empState) ,
                                                                     where('language' , '==' , language) ,
                                                                     where('salary' , '==' , salaryState) ,
                                                                     where('haveclass' , '==' , classState) ,  
                                                                     where('country' , '==' , selectedState),  
                                                              where('haveChild' , '==' , child)   
                                                                       ); 



                                                                     if( serviceState.length>0   ){
                                                                            queryCondition=and(   where('haveExpireance' , '==' , expState) ,
                                                                            where('workType' , 'array-contains-any' , [  { label: serviceState, value: serviceState }] ),   
                                                                            where('religion' , '==' , religion),
                                                                            where('cityId' , '==' , selectedArea), 
                                                                            where('liveIn' , '==' , live) , 
                                                                            where('isPartime' , '==' , empState) ,
                                                                            where('language' , '==' , language) ,
                                                                            where('salary' , '==' , salaryState) ,
                                                                            where('haveclass' , '==' , classState) ,  
                                                                            where('country' , '==' , selectedState),  
                                                                     where('haveChild' , '==' , child)   
                                                                              ); 


                                                                             if( age.length>0   ){
                                                                                   queryCondition=and(   where('haveExpireance' , '==' , expState) ,
                                                                                   where('age' , '>=' , minimumAge) , where('age' , '<=' , maxAge) ,
                                                                                   where('workType' , 'array-contains-any' , [  { label: serviceState, value: serviceState }] ),  
                                                                                   where('religion' , '==' , religion),
                                                                                   where('cityId' , '==' , selectedArea), 
                                                                                   where('liveIn' , '==' , live) , 
                                                                                   where('isPartime' , '==' , empState) ,
                                                                                   where('language' , '==' , language) ,
                                                                                   where('salary' , '==' , salaryState) ,
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

else if( language.length>0  ){
queryCondition=and(  where('language' , '==' , language)   );

if(child.length>0){
      queryCondition=and(  where('language' , '==' , language) ,
      where('haveChild' , '==' , child) 
       ); 

       if(selectedState.length>0){
             queryCondition=and(  where('language' , '==' , language)  ,
      where('country' , '==' , selectedState),    
      where('haveChild' , '==' , child)   
               ); 


               if(classState.length>0){
                    queryCondition=and(  where('language' , '==' , language)  ,
                    where('haveclass' , '==' , classState) ,  
                    where('country' , '==' , selectedState),    
                    where('haveChild' , '==' , child)   
                             ); 

                             if(expState.length>0){
                                  queryCondition=and(  where('language' , '==' , language)  ,
                                  where('haveExpireance' , '==' , expState),  
                                  where('haveclass' , '==' , classState) ,  
                                  where('country' , '==' , selectedState),  
                           where('haveChild' , '==' , child)   
                                    ); 

                                    if(salaryState.length>0){
                                         queryCondition=and(  where('language' , '==' , language)  ,
                                         where('salary' , '==' , salaryState),
                                         where('haveExpireance' , '==' , expState), 
                                         where('haveclass' , '==' , classState) ,  
                                         where('country' , '==' , selectedState),  
                                  where('haveChild' , '==' , child)   
                                           ); 

                                          if(empState.length>0 ){
                                                queryCondition=and(  where('language' , '==' , language)  ,
                                                where('isPartime' , '==' , empState) ,
                                                where('salary' , '==' , salaryState),
                                                where('haveExpireance' , '==' , expState), 
                                                where('haveclass' , '==' , classState) ,  
                                                where('country' , '==' , selectedState),  
                                         where('haveChild' , '==' , child)   
                                                  ); 


                                                  if(live.length>0 ){
                                                       queryCondition=and(  where('language' , '==' , language)  ,
                                                       where('liveIn' , '==' , live) , 
                                                       where('isPartime' , '==' , empState) ,
                                                       where('salary' , '==' , salaryState),
                                                       where('haveExpireance' , '==' , expState), 
                                                       where('haveclass' , '==' , classState) ,  
                                                       where('country' , '==' , selectedState),  
                                                where('haveChild' , '==' , child)   
                                                         ); 


                                                         if(selectedArea.length>0 ){
                                                              queryCondition=and(  where('language' , '==' , language)  ,
                                                              where('cityId' , '==' , selectedArea), 
                                                              where('liveIn' , '==' , live) , 
                                                              where('isPartime' , '==' , empState) ,
                                                              where('salary' , '==' , salaryState),
                                                              where('haveExpireance' , '==' , expState), 
                                                              where('haveclass' , '==' , classState) ,  
                                                              where('country' , '==' , selectedState),  
                                                       where('haveChild' , '==' , child)   
                                                                ); 




                                                              if(religion.length>0 ){
                                                                     queryCondition=and(  where('language' , '==' , language)  ,
                                                                     where('religion' , '==' , religion),
                                                                     where('cityId' , '==' , selectedArea), 
                                                                     where('liveIn' , '==' , live) , 
                                                                     where('isPartime' , '==' , empState) ,
                                                                     where('salary' , '==' , salaryState),
                                                                     where('haveExpireance' , '==' , expState), 
                                                                     where('haveclass' , '==' , classState) ,  
                                                                     where('country' , '==' , selectedState),  
                                                              where('haveChild' , '==' , child)   
                                                                       ); 



                                                                     if( serviceState.length>0   ){
                                                                            queryCondition=and(  where('language' , '==' , language)  ,
                                                                            where('workType' , 'array-contains-any' , [  { label: serviceState, value: serviceState }] ),   
                                                                            where('religion' , '==' , religion),
                                                                            where('cityId' , '==' , selectedArea), 
                                                                            where('liveIn' , '==' , live) , 
                                                                            where('isPartime' , '==' , empState) ,
                                                                            where('salary' , '==' , salaryState),
                                                                            where('haveExpireance' , '==' , expState), 
                                                                            where('haveclass' , '==' , classState) ,  
                                                                            where('country' , '==' , selectedState),  
                                                                     where('haveChild' , '==' , child)   
                                                                              ); 


                                                                             if( age.length>0   ){
                                                                                   queryCondition=and(  where('language' , '==' , language)  ,
                                                                                   where('age' , '>=' , minimumAge) , where('age' , '<=' , maxAge) ,
                                                                                   where('workType' , 'array-contains-any' , [  { label: serviceState, value: serviceState }] ),  
                                                                                   where('religion' , '==' , religion),
                                                                                   where('cityId' , '==' , selectedArea), 
                                                                                   where('liveIn' , '==' , live) , 
                                                                                   where('isPartime' , '==' , empState) ,
                                                                                   where('salary' , '==' , salaryState),
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

else if( empState.length>0  ){
queryCondition=and(  where('isPartime' , '==' , empState)   );

if(child.length>0){
      queryCondition=and(  where('isPartime' , '==' , empState) ,
      where('haveChild' , '==' , child) 
       ); 

       if(selectedState.length>0){
             queryCondition=and(  where('isPartime' , '==' , empState)  ,
      where('country' , '==' , selectedState),    
      where('haveChild' , '==' , child)   
               ); 


               if(classState.length>0){
                    queryCondition=and(  where('isPartime' , '==' , empState)  ,
                    where('haveclass' , '==' , classState) ,  
                    where('country' , '==' , selectedState),    
                    where('haveChild' , '==' , child)   
                             ); 

                             if(expState.length>0){
                                  queryCondition=and(  where('isPartime' , '==' , empState)  ,
                                  where('haveExpireance' , '==' , expState),  
                                  where('haveclass' , '==' , classState) ,  
                                  where('country' , '==' , selectedState),  
                           where('haveChild' , '==' , child)   
                                    ); 

                                    if(language.length>0){
                                         queryCondition=and(  where('isPartime' , '==' , empState)  ,
                                         where('language' , '==' , language) ,
                                         where('haveExpireance' , '==' , expState), 
                                         where('haveclass' , '==' , classState) ,  
                                         where('country' , '==' , selectedState),  
                                  where('haveChild' , '==' , child)   
                                           ); 

                                          if(salaryState.length>0 ){
                                                queryCondition=and(  where('isPartime' , '==' , empState)  ,
                                                where('salary' , '==' , salaryState) ,
                                                where('language' , '==' , language) ,
                                                where('haveExpireance' , '==' , expState), 
                                                where('haveclass' , '==' , classState) ,  
                                                where('country' , '==' , selectedState),  
                                         where('haveChild' , '==' , child)   
                                                  ); 


                                                  if(live.length>0 ){
                                                       queryCondition=and(  where('isPartime' , '==' , empState)  ,
                                                       where('liveIn' , '==' , live) , 
                                                       where('salary' , '==' , salaryState) ,
                                                       where('language' , '==' , language) ,
                                                       where('haveExpireance' , '==' , expState), 
                                                       where('haveclass' , '==' , classState) ,  
                                                       where('country' , '==' , selectedState),  
                                                where('haveChild' , '==' , child)   
                                                         ); 


                                                         if(selectedArea.length>0 ){
                                                              queryCondition=and(  where('isPartime' , '==' , empState)  ,
                                                              where('cityId' , '==' , selectedArea), 
                                                              where('liveIn' , '==' , live) , 
                                                              where('salary' , '==' , salaryState) ,
                                                              where('language' , '==' , language) ,
                                                              where('haveExpireance' , '==' , expState), 
                                                              where('haveclass' , '==' , classState) ,  
                                                              where('country' , '==' , selectedState),  
                                                       where('haveChild' , '==' , child)   
                                                                ); 




                                                              if(religion.length>0 ){
                                                                     queryCondition=and(  where('isPartime' , '==' , empState)  ,
                                                                     where('religion' , '==' , religion),
                                                                     where('cityId' , '==' , selectedArea), 
                                                                     where('liveIn' , '==' , live) , 
                                                                     where('salary' , '==' , salaryState) ,
                                                                     where('language' , '==' , language) ,
                                                                     where('haveExpireance' , '==' , expState), 
                                                                     where('haveclass' , '==' , classState) ,  
                                                                     where('country' , '==' , selectedState),  
                                                              where('haveChild' , '==' , child)   
                                                                       ); 



                                                                     if( serviceState.length>0   ){
                                                                            queryCondition=and(  where('isPartime' , '==' , empState)  ,
                                                                            where('workType' , 'array-contains-any' , [  { label: serviceState, value: serviceState }] ),   
                                                                            where('religion' , '==' , religion),
                                                                            where('cityId' , '==' , selectedArea), 
                                                                            where('liveIn' , '==' , live) , 
                                                                            where('salary' , '==' , salaryState) ,
                                                                            where('language' , '==' , language) ,
                                                                            where('haveExpireance' , '==' , expState), 
                                                                            where('haveclass' , '==' , classState) ,  
                                                                            where('country' , '==' , selectedState),  
                                                                     where('haveChild' , '==' , child)   
                                                                              ); 


                                                                             if( age.length>0   ){
                                                                                   queryCondition=and(  where('isPartime' , '==' , empState)  ,
                                                                                   where('age' , '>=' , minimumAge) , where('age' , '<=' , maxAge) ,
                                                                                   where('workType' , 'array-contains-any' , [  { label: serviceState, value: serviceState }] ),  
                                                                                   where('religion' , '==' , religion),
                                                                                   where('cityId' , '==' , selectedArea), 
                                                                                   where('liveIn' , '==' , live) , 
                                                                                   where('salary' , '==' , salaryState) ,
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


else if( live.length>0  ){
queryCondition=and(  where('liveIn' , '==' , live)  );

if(child.length>0){
      queryCondition=and(  where('liveIn' , '==' , live),
      where('haveChild' , '==' , child) 
       ); 

       if(selectedState.length>0){
             queryCondition=and(  where('liveIn' , '==' , live) ,
      where('country' , '==' , selectedState),    
      where('haveChild' , '==' , child)   
               ); 


               if(classState.length>0){
                    queryCondition=and(  where('liveIn' , '==' , live) ,
                    where('haveclass' , '==' , classState) ,  
                    where('country' , '==' , selectedState),    
                    where('haveChild' , '==' , child)   
                             ); 

                             if(expState.length>0){
                                  queryCondition=and(  where('liveIn' , '==' , live) ,
                                  where('haveExpireance' , '==' , expState),  
                                  where('haveclass' , '==' , classState) ,  
                                  where('country' , '==' , selectedState),  
                           where('haveChild' , '==' , child)   
                                    ); 

                                    if(language.length>0){
                                         queryCondition=and(  where('liveIn' , '==' , live) ,
                                         where('language' , '==' , language) ,
                                         where('haveExpireance' , '==' , expState), 
                                         where('haveclass' , '==' , classState) ,  
                                         where('country' , '==' , selectedState),  
                                  where('haveChild' , '==' , child)   
                                           ); 

                                          if(empState.length>0 ){
                                                queryCondition=and(  where('liveIn' , '==' , live) ,
                                                where('isPartime' , '==' , empState) ,
                                                where('language' , '==' , language) ,
                                                where('haveExpireance' , '==' , expState), 
                                                where('haveclass' , '==' , classState) ,  
                                                where('country' , '==' , selectedState),  
                                         where('haveChild' , '==' , child)   
                                                  ); 


                                                  if(salaryState.length>0 ){
                                                       queryCondition=and(  where('liveIn' , '==' , live) ,
                                                       where('salary' , '==' , salaryState) ,
                                                       where('isPartime' , '==' , empState) ,
                                                       where('language' , '==' , language) ,
                                                       where('haveExpireance' , '==' , expState), 
                                                       where('haveclass' , '==' , classState) ,  
                                                       where('country' , '==' , selectedState),  
                                                where('haveChild' , '==' , child)   
                                                         ); 


                                                         if(selectedArea.length>0 ){
                                                              queryCondition=and(  where('liveIn' , '==' , live) ,
                                                              where('cityId' , '==' , selectedArea), 
                                                              where('salary' , '==' , salaryState),
                                                              where('isPartime' , '==' , empState) ,
                                                              where('language' , '==' , language) ,
                                                              where('haveExpireance' , '==' , expState), 
                                                              where('haveclass' , '==' , classState) ,  
                                                              where('country' , '==' , selectedState),  
                                                       where('haveChild' , '==' , child)   
                                                                ); 




                                                              if(religion.length>0 ){
                                                                     queryCondition=and(  where('liveIn' , '==' , live) ,
                                                                     where('religion' , '==' , religion),
                                                                     where('cityId' , '==' , selectedArea), 
                                                                     where('salary' , '==' , salaryState),
                                                                     where('isPartime' , '==' , empState) ,
                                                                     where('language' , '==' , language) ,
                                                                     where('haveExpireance' , '==' , expState), 
                                                                     where('haveclass' , '==' , classState) ,  
                                                                     where('country' , '==' , selectedState),  
                                                              where('haveChild' , '==' , child)   
                                                                       ); 



                                                                     if( serviceState.length>0   ){
                                                                            queryCondition=and(  where('liveIn' , '==' , live) ,
                                                                            where('workType' , 'array-contains-any' , [  { label: serviceState, value: serviceState }] ),   
                                                                            where('religion' , '==' , religion),
                                                                            where('cityId' , '==' , selectedArea), 
                                                                            where('salary' , '==' , salaryState), 
                                                                            where('isPartime' , '==' , empState) ,
                                                                            where('language' , '==' , language) ,
                                                                            where('haveExpireance' , '==' , expState), 
                                                                            where('haveclass' , '==' , classState) ,  
                                                                            where('country' , '==' , selectedState),  
                                                                     where('haveChild' , '==' , child)   
                                                                              ); 


                                                                             if( age.length>0   ){
                                                                                   queryCondition=and(  where('liveIn' , '==' , live) ,
                                                                                   where('age' , '>=' , minimumAge) , where('age' , '<=' , maxAge) ,
                                                                                   where('workType' , 'array-contains-any' , [  { label: serviceState, value: serviceState }] ),  
                                                                                   where('religion' , '==' , religion),
                                                                                   where('cityId' , '==' , selectedArea), 
                                                                                   where('salary' , '==' , salaryState),
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

else if( religion.length>0  ){
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


 const q=query(refDatabase, queryCondition );