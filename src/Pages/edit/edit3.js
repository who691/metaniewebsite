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
                                                                           where('isPartime' , '==' , empState) ,
                                                                           where('liveIn' , '==' , live) ,  
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
                                                                               where('isPartime' , '==' , empState) ,
                                                                               where('liveIn' , '==' , live) , 
                                                                               where('language' , '==' , language) ,
                                                                               where('haveExpireance' , '==' , expState), 
                                                                               where('haveclass' , '==' , classState) ,  
                                                                               where('country' , '==' , selectedState),  
                                                                        where('haveChild' , '==' , child)   
                                                                                 ); 
                                                                         }  
   
                                                                        
   
                                                                     }
   
                                                                   
   
                                                                    else if( age.length>0   ){
                                                                           queryCondition=and(  where('salary' , '==' , salaryState) ,
                                                                           where('age' , '>=' , minimumAge) , where('age' , '<=' , maxAge) ,
                                                                           where('cityId' , '==' , selectedArea), 
                                                                           where('liveIn' , '==' , live) , 
                                                                           where('language' , '==' , language) ,
                                                                           where('haveExpireance' , '==' , expState), 
                                                                           where('haveclass' , '==' , classState) ,  
                                                                           where('country' , '==' , selectedState),  
                                                                    where('haveChild' , '==' , child)   
                                                                             ); 
                                                                     }  
   
                                                                }
                                                           
   
                                                            else if( serviceState.length>0   ){
                                                                   queryCondition=and(  where('salary' , '==' , salaryState) ,
                                                                   where('workType' , 'array-contains-any' , [  { label: serviceState, value: serviceState }] ),  
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
                                                            else if( age.length>0   ){
                                                                   queryCondition=and(  where('salary' , '==' , salaryState) ,
                                                                   where('age' , '>=' , minimumAge) , where('age' , '<=' , maxAge) ,
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
   
                                               
                                                
                                                    else if(religion.length>0 ){
                                                           queryCondition=and(  where('salary' , '==' , salaryState) ,
                                                           where('religion' , '==' , religion),
                                                           where('isPartime' , '==' , empState) ,
                                                           where('liveIn' , '==' , live) , 
                                                           where('language' , '==' , language) ,
                                                           where('haveExpireance' , '==' , expState), 
                                                           where('haveclass' , '==' , classState) ,  
                                                           where('country' , '==' , selectedState),  
                                                    where('haveChild' , '==' , child)   
                                                             ); 
                                                     }
                                                    else if( serviceState.length>0   ){
                                                           queryCondition=and(  where('salary' , '==' , salaryState) ,
                                                           where('workType' , 'array-contains-any' , [  { label: serviceState, value: serviceState }] ),  
                                                           where('isPartime' , '==' , empState) ,
                                                           where('liveIn' , '==' , live) ,  
                                                           where('language' , '==' , language) ,
                                                           where('haveExpireance' , '==' , expState), 
                                                           where('haveclass' , '==' , classState) ,  
                                                           where('country' , '==' , selectedState),  
                                                    where('haveChild' , '==' , child)   
                                                             ); 
                                                     }
                                                    else if( age.length>0   ){
                                                           queryCondition=and(  where('salary' , '==' , salaryState) ,
                                                           where('age' , '>=' , minimumAge) , where('age' , '<=' , maxAge) ,
                                                           where('isPartime' , '==' , empState) ,
                                                           where('liveIn' , '==' , live) , 
                                                           where('language' , '==' , language) ,
                                                           where('haveExpireance' , '==' , expState), 
                                                           where('haveclass' , '==' , classState) ,  
                                                           where('country' , '==' , selectedState),  
                                                    where('haveChild' , '==' , child)   
                                                             ); 
                                                     }  
   
   
                                           }
   
   
   
                                          else if(selectedArea.length>0 ){
                                                 queryCondition=and(  where('salary' , '==' , salaryState) ,
                                                 where('cityId' , '==' , selectedArea), 
                                                 where('isPartime' , '==' , empState) ,
                                                 where('language' , '==' , language) ,
                                                 where('haveExpireance' , '==' , expState), 
                                                 where('haveclass' , '==' , classState) ,  
                                                 where('country' , '==' , selectedState),  
                                          where('haveChild' , '==' , child)   
                                                   ); 
                                           }
                                          else if(religion.length>0 ){
                                                 queryCondition=and(  where('salary' , '==' , salaryState) ,
                                                 where('religion' , '==' , religion),
                                                 where('isPartime' , '==' , empState) ,
                                                 where('language' , '==' , language) ,
                                                 where('haveExpireance' , '==' , expState), 
                                                 where('haveclass' , '==' , classState) ,  
                                                 where('country' , '==' , selectedState),  
                                          where('haveChild' , '==' , child)   
                                                   ); 
                                           }
                                          else if( serviceState.length>0   ){
                                                 queryCondition=and(  where('salary' , '==' , salaryState) ,
                                                 where('workType' , 'array-contains-any' , [  { label: serviceState, value: serviceState }] ),   
                                                 where('isPartime' , '==' , empState) ,
                                                 where('language' , '==' , language) ,
                                                 where('haveExpireance' , '==' , expState), 
                                                 where('haveclass' , '==' , classState) ,  
                                                 where('country' , '==' , selectedState),  
                                          where('haveChild' , '==' , child)   
                                                   ); 
                                           }
                                          else if( age.length>0   ){
                                                 queryCondition=and(  where('salary' , '==' , salaryState) ,
                                                 where('age' , '>=' , minimumAge) , where('age' , '<=' , maxAge) ,
                                                 where('isPartime' , '==' , empState) ,
                                                 where('language' , '==' , language) ,
                                                 where('haveExpireance' , '==' , expState), 
                                                 where('haveclass' , '==' , classState) ,  
                                                 where('country' , '==' , selectedState),  
                                          where('haveChild' , '==' , child)   
                                                   ); 
                                           }  
   
   
   
   
                                    }
   
   
   
   
                                   else if(live.length>0 ){
                                          queryCondition=and(  where('salary' , '==' , salaryState) ,
                                          where('liveIn' , '==' , live) , 
                                          where('language' , '==' , language) ,
                                          where('haveExpireance' , '==' , expState), 
                                          where('haveclass' , '==' , classState) ,  
                                          where('country' , '==' , selectedState),  
                                   where('haveChild' , '==' , child)   
                                            ); 
                                    }
                                   else if(selectedArea.length>0 ){
                                          queryCondition=and(  where('salary' , '==' , salaryState) ,
                                          where('cityId' , '==' , selectedArea), 
                                          where('language' , '==' , language) ,
                                          where('haveExpireance' , '==' , expState), 
                                          where('haveclass' , '==' , classState) ,  
                                          where('country' , '==' , selectedState),  
                                   where('haveChild' , '==' , child)   
                                            ); 
                                    }
                                   else if(religion.length>0 ){
                                          queryCondition=and(  where('salary' , '==' , salaryState) ,
                                          where('religion' , '==' , religion),
                                          where('language' , '==' , language) ,
                                          where('haveExpireance' , '==' , expState), 
                                          where('haveclass' , '==' , classState) ,  
                                          where('country' , '==' , selectedState),  
                                   where('haveChild' , '==' , child)   
                                            ); 
                                    }
                                   else if( serviceState.length>0   ){
                                          queryCondition=and(  where('salary' , '==' , salaryState) ,
                                          where('workType' , 'array-contains-any' , [  { label: serviceState, value: serviceState }] ),   
                                          where('haveExpireance' , '==' , expState), 
                                          where('language' , '==' , language) ,
                                          where('haveclass' , '==' , classState) ,  
                                          where('country' , '==' , selectedState),  
                                   where('haveChild' , '==' , child)   
                                            ); 
                                    }
                                   else if( age.length>0   ){
                                          queryCondition=and(  where('salary' , '==' , salaryState) ,
                                          where('age' , '>=' , minimumAge) , where('age' , '<=' , maxAge) ,
                                          where('haveExpireance' , '==' , expState), 
                                          where('language' , '==' , language) ,
                                          where('haveclass' , '==' , classState) ,  
                                          where('country' , '==' , selectedState),  
                                   where('haveChild' , '==' , child)   
                                            ); 
                                    }        
   
                             }
   
   
   
   
                            else if(empState.length>0 ){
                                   queryCondition=and(  where('salary' , '==' , salaryState) ,
                                   where('isPartime' , '==' , empState) ,
                                   where('haveExpireance' , '==' , expState),
                                   where('haveclass' , '==' , classState) ,  
                                   where('country' , '==' , selectedState),  
                            where('haveChild' , '==' , child)   
                                     ); 
                             }
                            else if(live.length>0 ){
                                   queryCondition=and(  where('salary' , '==' , salaryState) ,
                                   where('liveIn' , '==' , live) , 
                                   where('haveExpireance' , '==' , expState),
                                   where('haveclass' , '==' , classState) ,  
                                   where('country' , '==' , selectedState),  
                            where('haveChild' , '==' , child)   
                                     ); 
                             }
                            else if(selectedArea.length>0 ){
                                   queryCondition=and(  where('salary' , '==' , salaryState) ,
                                   where('cityId' , '==' , selectedArea), 
                                   where('haveExpireance' , '==' , expState),
                                   where('haveclass' , '==' , classState) ,  
                                   where('country' , '==' , selectedState),  
                            where('haveChild' , '==' , child)   
                                     ); 
                             }
                            else if(religion.length>0 ){
                                   queryCondition=and(  where('salary' , '==' , salaryState) ,
                                   where('religion' , '==' , religion),
                                   where('haveExpireance' , '==' , expState),
                                   where('haveclass' , '==' , classState) ,  
                                   where('country' , '==' , selectedState),  
                            where('haveChild' , '==' , child)   
                                     ); 
                             }
                            else if( serviceState.length>0   ){
                                   queryCondition=and(  where('salary' , '==' , salaryState) ,
                                   where('workType' , 'array-contains-any' , [  { label: serviceState, value: serviceState }] ),   
                                   where('haveclass' , '==' , classState) ,  
                                   where('haveExpireance' , '==' , expState),
                                   where('country' , '==' , selectedState),  
                            where('haveChild' , '==' , child)   
                                     ); 
                             }
                            else if( age.length>0   ){
                                   queryCondition=and(  where('salary' , '==' , salaryState) ,
                                   where('age' , '>=' , minimumAge) , where('age' , '<=' , maxAge) ,
                                   where('haveclass' , '==' , classState) ,  
                                   where('haveExpireance' , '==' , expState),
                                   where('country' , '==' , selectedState),  
                            where('haveChild' , '==' , child)   
                                     ); 
                             }           
   
                }
   
   
   
   
              else if(language.length>0){
                     queryCondition=and(  where('salary' , '==' , salaryState) ,
                     where('language' , '==' , language) ,
                     where('haveclass' , '==' , classState) ,  
                     where('country' , '==' , selectedState),  
              where('haveChild' , '==' , child)   
                       ); 
               }
              else if(empState.length>0 ){
                     queryCondition=and(  where('salary' , '==' , salaryState) ,
                     where('isPartime' , '==' , empState) ,
                     where('haveclass' , '==' , classState) ,  
                     where('country' , '==' , selectedState),  
              where('haveChild' , '==' , child)   
                       ); 
               }
              else if(live.length>0 ){
                     queryCondition=and(  where('salary' , '==' , salaryState) ,
                     where('liveIn' , '==' , live) , 
                     where('haveclass' , '==' , classState) ,  
                     where('country' , '==' , selectedState),  
              where('haveChild' , '==' , child)   
                       ); 
               }
              else if(selectedArea.length>0 ){
                     queryCondition=and(  where('salary' , '==' , salaryState) ,
                     where('cityId' , '==' , selectedArea), 
                     where('haveclass' , '==' , classState) ,  
                     where('country' , '==' , selectedState),  
              where('haveChild' , '==' , child)   
                       ); 
               }
              else if(religion.length>0 ){
                     queryCondition=and(  where('salary' , '==' , salaryState) ,
                     where('religion' , '==' , religion),
                     where('haveclass' , '==' , classState) ,  
                     where('country' , '==' , selectedState),  
              where('haveChild' , '==' , child)   
                       ); 
               }
              else if( serviceState.length>0   ){
                     queryCondition=and(  where('salary' , '==' , salaryState) ,
                     where('workType' , 'array-contains-any' , [  { label: serviceState, value: serviceState }] ),   
                     where('haveclass' , '==' , classState) ,  
                     where('country' , '==' , selectedState),  
              where('haveChild' , '==' , child)   
                       ); 
               }
              else if( age.length>0   ){
                     queryCondition=and(  where('salary' , '==' , salaryState) ,
                     where('age' , '>=' , minimumAge) , where('age' , '<=' , maxAge) ,
                     where('haveclass' , '==' , classState) ,  
                     where('country' , '==' , selectedState),  
              where('haveChild' , '==' , child)   
                       ); 
               }
   
   
                }
   
   
       else if(expState.length>0){
              queryCondition=and(  where('salary' , '==' , salaryState) ,
              where('country' , '==' , selectedState),  
              where('haveExpireance' , '==' , expState),  
       where('haveChild' , '==' , child)   
                ); 
   
                if(classState.length>0){
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
                                                         where('isPartime' , '==' , empState) ,
                                                         where('liveIn' , '==' , live) ,  
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
                                                             where('isPartime' , '==' , empState) ,
                                                             where('liveIn' , '==' , live) , 
                                                             where('language' , '==' , language) ,
                                                             where('haveExpireance' , '==' , expState), 
                                                             where('haveclass' , '==' , classState) ,  
                                                             where('country' , '==' , selectedState),  
                                                      where('haveChild' , '==' , child)   
                                                               ); 
                                                       }  
   
                                                      
   
                                                   }
   
                                                 
   
                                                  else if( age.length>0   ){
                                                         queryCondition=and(  where('salary' , '==' , salaryState) ,
                                                         where('age' , '>=' , minimumAge) , where('age' , '<=' , maxAge) ,
                                                         where('cityId' , '==' , selectedArea), 
                                                         where('liveIn' , '==' , live) , 
                                                         where('language' , '==' , language) ,
                                                         where('haveExpireance' , '==' , expState), 
                                                         where('haveclass' , '==' , classState) ,  
                                                         where('country' , '==' , selectedState),  
                                                  where('haveChild' , '==' , child)   
                                                           ); 
                                                   }  
   
                                              }
                                         
   
                                          else if( serviceState.length>0   ){
                                                 queryCondition=and(  where('salary' , '==' , salaryState) ,
                                                 where('workType' , 'array-contains-any' , [  { label: serviceState, value: serviceState }] ),  
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
                                          else if( age.length>0   ){
                                                 queryCondition=and(  where('salary' , '==' , salaryState) ,
                                                 where('age' , '>=' , minimumAge) , where('age' , '<=' , maxAge) ,
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
   
                             
                              
                                  else if(religion.length>0 ){
                                         queryCondition=and(  where('salary' , '==' , salaryState) ,
                                         where('religion' , '==' , religion),
                                         where('isPartime' , '==' , empState) ,
                                         where('liveIn' , '==' , live) , 
                                         where('language' , '==' , language) ,
                                         where('haveExpireance' , '==' , expState), 
                                         where('haveclass' , '==' , classState) ,  
                                         where('country' , '==' , selectedState),  
                                  where('haveChild' , '==' , child)   
                                           ); 
                                   }
                                  else if( serviceState.length>0   ){
                                         queryCondition=and(  where('salary' , '==' , salaryState) ,
                                         where('workType' , 'array-contains-any' , [  { label: serviceState, value: serviceState }] ),  
                                         where('isPartime' , '==' , empState) ,
                                         where('liveIn' , '==' , live) ,  
                                         where('language' , '==' , language) ,
                                         where('haveExpireance' , '==' , expState), 
                                         where('haveclass' , '==' , classState) ,  
                                         where('country' , '==' , selectedState),  
                                  where('haveChild' , '==' , child)   
                                           ); 
                                   }
                                  else if( age.length>0   ){
                                         queryCondition=and(  where('salary' , '==' , salaryState) ,
                                         where('age' , '>=' , minimumAge) , where('age' , '<=' , maxAge) ,
                                         where('isPartime' , '==' , empState) ,
                                         where('liveIn' , '==' , live) , 
                                         where('language' , '==' , language) ,
                                         where('haveExpireance' , '==' , expState), 
                                         where('haveclass' , '==' , classState) ,  
                                         where('country' , '==' , selectedState),  
                                  where('haveChild' , '==' , child)   
                                           ); 
                                   }  
   
   
                         }
   
   
   
                        else if(selectedArea.length>0 ){
                               queryCondition=and(  where('salary' , '==' , salaryState) ,
                               where('cityId' , '==' , selectedArea), 
                               where('isPartime' , '==' , empState) ,
                               where('language' , '==' , language) ,
                               where('haveExpireance' , '==' , expState), 
                               where('haveclass' , '==' , classState) ,  
                               where('country' , '==' , selectedState),  
                        where('haveChild' , '==' , child)   
                                 ); 
                         }
                        else if(religion.length>0 ){
                               queryCondition=and(  where('salary' , '==' , salaryState) ,
                               where('religion' , '==' , religion),
                               where('isPartime' , '==' , empState) ,
                               where('language' , '==' , language) ,
                               where('haveExpireance' , '==' , expState), 
                               where('haveclass' , '==' , classState) ,  
                               where('country' , '==' , selectedState),  
                        where('haveChild' , '==' , child)   
                                 ); 
                         }
                        else if( serviceState.length>0   ){
                               queryCondition=and(  where('salary' , '==' , salaryState) ,
                               where('workType' , 'array-contains-any' , [  { label: serviceState, value: serviceState }] ),   
                               where('isPartime' , '==' , empState) ,
                               where('language' , '==' , language) ,
                               where('haveExpireance' , '==' , expState), 
                               where('haveclass' , '==' , classState) ,  
                               where('country' , '==' , selectedState),  
                        where('haveChild' , '==' , child)   
                                 ); 
                         }
                        else if( age.length>0   ){
                               queryCondition=and(  where('salary' , '==' , salaryState) ,
                               where('age' , '>=' , minimumAge) , where('age' , '<=' , maxAge) ,
                               where('isPartime' , '==' , empState) ,
                               where('language' , '==' , language) ,
                               where('haveExpireance' , '==' , expState), 
                               where('haveclass' , '==' , classState) ,  
                               where('country' , '==' , selectedState),  
                        where('haveChild' , '==' , child)   
                                 ); 
                         }  
   
   
   
   
                  }
   
   
   
   
                 else if(live.length>0 ){
                        queryCondition=and(  where('salary' , '==' , salaryState) ,
                        where('liveIn' , '==' , live) , 
                        where('language' , '==' , language) ,
                        where('haveExpireance' , '==' , expState), 
                        where('haveclass' , '==' , classState) ,  
                        where('country' , '==' , selectedState),  
                 where('haveChild' , '==' , child)   
                          ); 
                  }
                 else if(selectedArea.length>0 ){
                        queryCondition=and(  where('salary' , '==' , salaryState) ,
                        where('cityId' , '==' , selectedArea), 
                        where('language' , '==' , language) ,
                        where('haveExpireance' , '==' , expState), 
                        where('haveclass' , '==' , classState) ,  
                        where('country' , '==' , selectedState),  
                 where('haveChild' , '==' , child)   
                          ); 
                  }
                 else if(religion.length>0 ){
                        queryCondition=and(  where('salary' , '==' , salaryState) ,
                        where('religion' , '==' , religion),
                        where('language' , '==' , language) ,
                        where('haveExpireance' , '==' , expState), 
                        where('haveclass' , '==' , classState) ,  
                        where('country' , '==' , selectedState),  
                 where('haveChild' , '==' , child)   
                          ); 
                  }
                 else if( serviceState.length>0   ){
                        queryCondition=and(  where('salary' , '==' , salaryState) ,
                        where('workType' , 'array-contains-any' , [  { label: serviceState, value: serviceState }] ),   
                        where('haveExpireance' , '==' , expState), 
                        where('language' , '==' , language) ,
                        where('haveclass' , '==' , classState) ,  
                        where('country' , '==' , selectedState),  
                 where('haveChild' , '==' , child)   
                          ); 
                  }
                 else if( age.length>0   ){
                        queryCondition=and(  where('salary' , '==' , salaryState) ,
                        where('age' , '>=' , minimumAge) , where('age' , '<=' , maxAge) ,
                        where('haveExpireance' , '==' , expState), 
                        where('language' , '==' , language) ,
                        where('haveclass' , '==' , classState) ,  
                        where('country' , '==' , selectedState),  
                 where('haveChild' , '==' , child)   
                          ); 
                  }        
   
           }
   
   
   
   
          else if(empState.length>0 ){
                 queryCondition=and(  where('salary' , '==' , salaryState) ,
                 where('isPartime' , '==' , empState) ,
                 where('haveExpireance' , '==' , expState),
                 where('haveclass' , '==' , classState) ,  
                 where('country' , '==' , selectedState),  
          where('haveChild' , '==' , child)   
                   ); 
           }
          else if(live.length>0 ){
                 queryCondition=and(  where('salary' , '==' , salaryState) ,
                 where('liveIn' , '==' , live) , 
                 where('haveExpireance' , '==' , expState),
                 where('haveclass' , '==' , classState) ,  
                 where('country' , '==' , selectedState),  
          where('haveChild' , '==' , child)   
                   ); 
           }
          else if(selectedArea.length>0 ){
                 queryCondition=and(  where('salary' , '==' , salaryState) ,
                 where('cityId' , '==' , selectedArea), 
                 where('haveExpireance' , '==' , expState),
                 where('haveclass' , '==' , classState) ,  
                 where('country' , '==' , selectedState),  
          where('haveChild' , '==' , child)   
                   ); 
           }
          else if(religion.length>0 ){
                 queryCondition=and(  where('salary' , '==' , salaryState) ,
                 where('religion' , '==' , religion),
                 where('haveExpireance' , '==' , expState),
                 where('haveclass' , '==' , classState) ,  
                 where('country' , '==' , selectedState),  
          where('haveChild' , '==' , child)   
                   ); 
           }
          else if( serviceState.length>0   ){
                 queryCondition=and(  where('salary' , '==' , salaryState) ,
                 where('workType' , 'array-contains-any' , [  { label: serviceState, value: serviceState }] ),   
                 where('haveclass' , '==' , classState) ,  
                 where('haveExpireance' , '==' , expState),
                 where('country' , '==' , selectedState),  
          where('haveChild' , '==' , child)   
                   ); 
           }
          else if( age.length>0   ){
                 queryCondition=and(  where('salary' , '==' , salaryState) ,
                 where('age' , '>=' , minimumAge) , where('age' , '<=' , maxAge) ,
                 where('haveclass' , '==' , classState) ,  
                 where('haveExpireance' , '==' , expState),
                 where('country' , '==' , selectedState),  
          where('haveChild' , '==' , child)   
                   ); 
           }           
   
   }
   
   
   else if(language.length>0){
   queryCondition=and(  where('salary' , '==' , salaryState) ,
   where('language' , '==' , language) ,
   where('haveExpireance' , '==' , expState),  
   where('country' , '==' , selectedState),  
   where('haveChild' , '==' , child)   
     ); 
   }
   else if(empState.length>0 ){
   queryCondition=and(  where('salary' , '==' , salaryState) ,
   where('isPartime' , '==' , empState) ,
   where('haveExpireance' , '==' , expState), 
   where('country' , '==' , selectedState),  
   where('haveChild' , '==' , child)   
     ); 
   }
   else if(live.length>0 ){
   queryCondition=and(  where('salary' , '==' , salaryState) ,
   where('liveIn' , '==' , live) , 
   where('haveExpireance' , '==' , expState),  
   where('country' , '==' , selectedState),  
   where('haveChild' , '==' , child)   
     ); 
   }
   else if(selectedArea.length>0 ){
   queryCondition=and(  where('salary' , '==' , salaryState) ,
   where('cityId' , '==' , selectedArea), 
   where('haveExpireance' , '==' , expState),  
   where('country' , '==' , selectedState),  
   where('haveChild' , '==' , child)   
     ); 
   }
   else if(religion.length>0 ){
   queryCondition=and(  where('salary' , '==' , salaryState) ,
   where('religion' , '==' , religion),
   where('haveExpireance' , '==' , expState), 
   where('country' , '==' , selectedState),  
   where('haveChild' , '==' , child)   
     ); 
   }
   else if( serviceState.length>0   ){
   queryCondition=and(  where('salary' , '==' , salaryState) ,
   where('workType' , 'array-contains-any' , [  { label: serviceState, value: serviceState }] ),   
   where('haveExpireance' , '==' , expState),
   where('country' , '==' , selectedState),  
   where('haveChild' , '==' , child)   
     ); 
   }
   else if( age.length>0   ){
   queryCondition=and(  where('salary' , '==' , salaryState) ,
   where('age' , '>=' , minimumAge) , where('age' , '<=' , maxAge) ,
   where('haveExpireance' , '==' , expState),
   where('country' , '==' , selectedState),  
   where('haveChild' , '==' , child)   
     ); 
   }   
   
        }
   
   
   
       else if(language.length>0){
              queryCondition=and(  where('salary' , '==' , salaryState) ,
              where('country' , '==' , selectedState),  
              where('language' , '==' , language) ,
       where('haveChild' , '==' , child)   
                ); 
   
   
                if(expState.length>0){
                 queryCondition=and(  where('salary' , '==' , salaryState) ,
                 where('haveExpireance' , '==' , expState),  
                 where('language' , '==' , language) ,
                 where('country' , '==' , selectedState),  
          where('haveChild' , '==' , child)   
                   ); 
   
                   if(classState.length>0){
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
                                                         where('isPartime' , '==' , empState) ,
                                                         where('liveIn' , '==' , live) ,  
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
                                                             where('isPartime' , '==' , empState) ,
                                                             where('liveIn' , '==' , live) , 
                                                             where('language' , '==' , language) ,
                                                             where('haveExpireance' , '==' , expState), 
                                                             where('haveclass' , '==' , classState) ,  
                                                             where('country' , '==' , selectedState),  
                                                      where('haveChild' , '==' , child)   
                                                               ); 
                                                       }  
   
                                                      
   
                                                   }
   
                                                 
   
                                                  else if( age.length>0   ){
                                                         queryCondition=and(  where('salary' , '==' , salaryState) ,
                                                         where('age' , '>=' , minimumAge) , where('age' , '<=' , maxAge) ,
                                                         where('cityId' , '==' , selectedArea), 
                                                         where('liveIn' , '==' , live) , 
                                                         where('language' , '==' , language) ,
                                                         where('haveExpireance' , '==' , expState), 
                                                         where('haveclass' , '==' , classState) ,  
                                                         where('country' , '==' , selectedState),  
                                                  where('haveChild' , '==' , child)   
                                                           ); 
                                                   }  
   
                                              }
                                         
   
                                          else if( serviceState.length>0   ){
                                                 queryCondition=and(  where('salary' , '==' , salaryState) ,
                                                 where('workType' , 'array-contains-any' , [  { label: serviceState, value: serviceState }] ),  
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
                                          else if( age.length>0   ){
                                                 queryCondition=and(  where('salary' , '==' , salaryState) ,
                                                 where('age' , '>=' , minimumAge) , where('age' , '<=' , maxAge) ,
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
   
                             
                              
                                  else if(religion.length>0 ){
                                         queryCondition=and(  where('salary' , '==' , salaryState) ,
                                         where('religion' , '==' , religion),
                                         where('isPartime' , '==' , empState) ,
                                         where('liveIn' , '==' , live) , 
                                         where('language' , '==' , language) ,
                                         where('haveExpireance' , '==' , expState), 
                                         where('haveclass' , '==' , classState) ,  
                                         where('country' , '==' , selectedState),  
                                  where('haveChild' , '==' , child)   
                                           ); 
                                   }
                                  else if( serviceState.length>0   ){
                                         queryCondition=and(  where('salary' , '==' , salaryState) ,
                                         where('workType' , 'array-contains-any' , [  { label: serviceState, value: serviceState }] ),  
                                         where('isPartime' , '==' , empState) ,
                                         where('liveIn' , '==' , live) ,  
                                         where('language' , '==' , language) ,
                                         where('haveExpireance' , '==' , expState), 
                                         where('haveclass' , '==' , classState) ,  
                                         where('country' , '==' , selectedState),  
                                  where('haveChild' , '==' , child)   
                                           ); 
                                   }
                                  else if( age.length>0   ){
                                         queryCondition=and(  where('salary' , '==' , salaryState) ,
                                         where('age' , '>=' , minimumAge) , where('age' , '<=' , maxAge) ,
                                         where('isPartime' , '==' , empState) ,
                                         where('liveIn' , '==' , live) , 
                                         where('language' , '==' , language) ,
                                         where('haveExpireance' , '==' , expState), 
                                         where('haveclass' , '==' , classState) ,  
                                         where('country' , '==' , selectedState),  
                                  where('haveChild' , '==' , child)   
                                           ); 
                                   }  
   
   
                         }
   
   
   
                        else if(selectedArea.length>0 ){
                               queryCondition=and(  where('salary' , '==' , salaryState) ,
                               where('cityId' , '==' , selectedArea), 
                               where('isPartime' , '==' , empState) ,
                               where('language' , '==' , language) ,
                               where('haveExpireance' , '==' , expState), 
                               where('haveclass' , '==' , classState) ,  
                               where('country' , '==' , selectedState),  
                        where('haveChild' , '==' , child)   
                                 ); 
                         }
                        else if(religion.length>0 ){
                               queryCondition=and(  where('salary' , '==' , salaryState) ,
                               where('religion' , '==' , religion),
                               where('isPartime' , '==' , empState) ,
                               where('language' , '==' , language) ,
                               where('haveExpireance' , '==' , expState), 
                               where('haveclass' , '==' , classState) ,  
                               where('country' , '==' , selectedState),  
                        where('haveChild' , '==' , child)   
                                 ); 
                         }
                        else if( serviceState.length>0   ){
                               queryCondition=and(  where('salary' , '==' , salaryState) ,
                               where('workType' , 'array-contains-any' , [  { label: serviceState, value: serviceState }] ),   
                               where('isPartime' , '==' , empState) ,
                               where('language' , '==' , language) ,
                               where('haveExpireance' , '==' , expState), 
                               where('haveclass' , '==' , classState) ,  
                               where('country' , '==' , selectedState),  
                        where('haveChild' , '==' , child)   
                                 ); 
                         }
                        else if( age.length>0   ){
                               queryCondition=and(  where('salary' , '==' , salaryState) ,
                               where('age' , '>=' , minimumAge) , where('age' , '<=' , maxAge) ,
                               where('isPartime' , '==' , empState) ,
                               where('language' , '==' , language) ,
                               where('haveExpireance' , '==' , expState), 
                               where('haveclass' , '==' , classState) ,  
                               where('country' , '==' , selectedState),  
                        where('haveChild' , '==' , child)   
                                 ); 
                         }  
   
   
   
   
                  }
   
   
   
   
                 else if(live.length>0 ){
                        queryCondition=and(  where('salary' , '==' , salaryState) ,
                        where('liveIn' , '==' , live) , 
                        where('language' , '==' , language) ,
                        where('haveExpireance' , '==' , expState), 
                        where('haveclass' , '==' , classState) ,  
                        where('country' , '==' , selectedState),  
                 where('haveChild' , '==' , child)   
                          ); 
                  }
                 else if(selectedArea.length>0 ){
                        queryCondition=and(  where('salary' , '==' , salaryState) ,
                        where('cityId' , '==' , selectedArea), 
                        where('language' , '==' , language) ,
                        where('haveExpireance' , '==' , expState), 
                        where('haveclass' , '==' , classState) ,  
                        where('country' , '==' , selectedState),  
                 where('haveChild' , '==' , child)   
                          ); 
                  }
                 else if(religion.length>0 ){
                        queryCondition=and(  where('salary' , '==' , salaryState) ,
                        where('religion' , '==' , religion),
                        where('language' , '==' , language) ,
                        where('haveExpireance' , '==' , expState), 
                        where('haveclass' , '==' , classState) ,  
                        where('country' , '==' , selectedState),  
                 where('haveChild' , '==' , child)   
                          ); 
                  }
                 else if( serviceState.length>0   ){
                        queryCondition=and(  where('salary' , '==' , salaryState) ,
                        where('workType' , 'array-contains-any' , [  { label: serviceState, value: serviceState }] ),   
                        where('haveExpireance' , '==' , expState), 
                        where('language' , '==' , language) ,
                        where('haveclass' , '==' , classState) ,  
                        where('country' , '==' , selectedState),  
                 where('haveChild' , '==' , child)   
                          ); 
                  }
                 else if( age.length>0   ){
                        queryCondition=and(  where('salary' , '==' , salaryState) ,
                        where('age' , '>=' , minimumAge) , where('age' , '<=' , maxAge) ,
                        where('haveExpireance' , '==' , expState), 
                        where('language' , '==' , language) ,
                        where('haveclass' , '==' , classState) ,  
                        where('country' , '==' , selectedState),  
                 where('haveChild' , '==' , child)   
                          ); 
                  }        
   
           }
   
   
   
   
          else if(empState.length>0 ){
                 queryCondition=and(  where('salary' , '==' , salaryState) ,
                 where('isPartime' , '==' , empState) ,
                 where('haveExpireance' , '==' , expState),
                 where('language' , '==' , language) , 
                 where('country' , '==' , selectedState),  
          where('haveChild' , '==' , child)   
                   ); 
           }
          else if(live.length>0 ){
                 queryCondition=and(  where('salary' , '==' , salaryState) ,
                 where('liveIn' , '==' , live) , 
                 where('haveExpireance' , '==' , expState),
                 where('language' , '==' , language) , 
                 where('country' , '==' , selectedState),  
          where('haveChild' , '==' , child)   
                   ); 
           }
          else if(selectedArea.length>0 ){
                 queryCondition=and(  where('salary' , '==' , salaryState) ,
                 where('cityId' , '==' , selectedArea), 
                 where('haveExpireance' , '==' , expState),
                 where('language' , '==' , language) ,
                 where('country' , '==' , selectedState),  
          where('haveChild' , '==' , child)   
                   ); 
           }
          else if(religion.length>0 ){
                 queryCondition=and(  where('salary' , '==' , salaryState) ,
                 where('religion' , '==' , religion),
                 where('haveExpireance' , '==' , expState),
                 where('language' , '==' , language) ,
                 where('country' , '==' , selectedState),  
          where('haveChild' , '==' , child)   
                   ); 
           }
          else if( serviceState.length>0   ){
                 queryCondition=and(  where('salary' , '==' , salaryState) ,
                 where('workType' , 'array-contains-any' , [  { label: serviceState, value: serviceState }] ),   
                 where('language' , '==' , language) , 
                 where('haveExpireance' , '==' , expState),
                 where('country' , '==' , selectedState),  
          where('haveChild' , '==' , child)   
                   ); 
           }
          else if( age.length>0   ){
                 queryCondition=and(  where('salary' , '==' , salaryState) ,
                 where('age' , '>=' , minimumAge) , where('age' , '<=' , maxAge) ,
                 where('language' , '==' , language) , 
                 where('haveExpireance' , '==' , expState),
                 where('country' , '==' , selectedState),  
          where('haveChild' , '==' , child)   
                   ); 
           }           
   
   }
   
   
   
   
   else if(classState.length>0){
   queryCondition=and(  where('salary' , '==' , salaryState) ,
   where('language' , '==' , language) ,
   where('haveclass' , '==' , classState) ,  
   where('country' , '==' , selectedState),  
   where('haveChild' , '==' , child)   
     ); 
   }
   else if(empState.length>0 ){
   queryCondition=and(  where('salary' , '==' , salaryState) ,
   where('isPartime' , '==' , empState) ,
   where('language' , '==' , language) ,
   where('country' , '==' , selectedState),  
   where('haveChild' , '==' , child)   
     ); 
   }
   else if(live.length>0 ){
   queryCondition=and(  where('salary' , '==' , salaryState) ,
   where('liveIn' , '==' , live) , 
   where('language' , '==' , language) ,
   where('country' , '==' , selectedState),  
   where('haveChild' , '==' , child)   
     ); 
   }
   else if(selectedArea.length>0 ){
   queryCondition=and(  where('salary' , '==' , salaryState) ,
   where('cityId' , '==' , selectedArea), 
   where('language' , '==' , language) ,
   where('country' , '==' , selectedState),  
   where('haveChild' , '==' , child)   
     ); 
   }
   else if(religion.length>0 ){
   queryCondition=and(  where('salary' , '==' , salaryState) ,
   where('religion' , '==' , religion),
   where('language' , '==' , language) , 
   where('country' , '==' , selectedState),  
   where('haveChild' , '==' , child)   
     ); 
   }
   else if( serviceState.length>0   ){
   queryCondition=and(  where('salary' , '==' , salaryState) ,
   where('workType' , 'array-contains-any' , [  { label: serviceState, value: serviceState }] ),   
   where('language' , '==' , language) ,
   where('country' , '==' , selectedState),  
   where('haveChild' , '==' , child)   
     ); 
   }
   else if( age.length>0   ){
   queryCondition=and(  where('salary' , '==' , salaryState) ,
   where('age' , '>=' , minimumAge) , where('age' , '<=' , maxAge) ,
   where('language' , '==' , language) , 
   where('country' , '==' , selectedState),  
   where('haveChild' , '==' , child)   
     ); 
   }
   
   
        }
   
   
       else if(empState.length>0 ){
              queryCondition=and(  where('salary' , '==' , salaryState) ,
              where('country' , '==' , selectedState),  
              where('isPartime' , '==' , empState) ,
       where('haveChild' , '==' , child)   
                ); 
   
   
                if(expState.length>0){
                 queryCondition=and(  where('salary' , '==' , salaryState) ,
                 where('haveExpireance' , '==' , expState),  
                 where('isPartime' , '==' , empState) ,
                 where('country' , '==' , selectedState),  
          where('haveChild' , '==' , child)   
                   ); 
   
                   if(language.length>0){
                        queryCondition=and(  where('salary' , '==' , salaryState) ,
                        where('language' , '==' , language) ,
                        where('haveExpireance' , '==' , expState), 
                        where('isPartime' , '==' , empState) ,
                        where('country' , '==' , selectedState),  
                 where('haveChild' , '==' , child)   
                          ); 
   
                         if(classState.length>0 ){
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
                                                         where('isPartime' , '==' , empState) ,
                                                         where('liveIn' , '==' , live) ,  
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
                                                             where('isPartime' , '==' , empState) ,
                                                             where('liveIn' , '==' , live) , 
                                                             where('language' , '==' , language) ,
                                                             where('haveExpireance' , '==' , expState), 
                                                             where('haveclass' , '==' , classState) ,  
                                                             where('country' , '==' , selectedState),  
                                                      where('haveChild' , '==' , child)   
                                                               ); 
                                                       }  
   
                                                      
   
                                                   }
   
                                                 
   
                                                  else if( age.length>0   ){
                                                         queryCondition=and(  where('salary' , '==' , salaryState) ,
                                                         where('age' , '>=' , minimumAge) , where('age' , '<=' , maxAge) ,
                                                         where('cityId' , '==' , selectedArea), 
                                                         where('liveIn' , '==' , live) , 
                                                         where('language' , '==' , language) ,
                                                         where('haveExpireance' , '==' , expState), 
                                                         where('haveclass' , '==' , classState) ,  
                                                         where('country' , '==' , selectedState),  
                                                  where('haveChild' , '==' , child)   
                                                           ); 
                                                   }  
   
                                              }
                                         
   
                                          else if( serviceState.length>0   ){
                                                 queryCondition=and(  where('salary' , '==' , salaryState) ,
                                                 where('workType' , 'array-contains-any' , [  { label: serviceState, value: serviceState }] ),  
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
                                          else if( age.length>0   ){
                                                 queryCondition=and(  where('salary' , '==' , salaryState) ,
                                                 where('age' , '>=' , minimumAge) , where('age' , '<=' , maxAge) ,
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
   
                             
                              
                                  else if(religion.length>0 ){
                                         queryCondition=and(  where('salary' , '==' , salaryState) ,
                                         where('religion' , '==' , religion),
                                         where('isPartime' , '==' , empState) ,
                                         where('liveIn' , '==' , live) , 
                                         where('language' , '==' , language) ,
                                         where('haveExpireance' , '==' , expState), 
                                         where('haveclass' , '==' , classState) ,  
                                         where('country' , '==' , selectedState),  
                                  where('haveChild' , '==' , child)   
                                           ); 
                                   }
                                  else if( serviceState.length>0   ){
                                         queryCondition=and(  where('salary' , '==' , salaryState) ,
                                         where('workType' , 'array-contains-any' , [  { label: serviceState, value: serviceState }] ),  
                                         where('isPartime' , '==' , empState) ,
                                         where('liveIn' , '==' , live) ,  
                                         where('language' , '==' , language) ,
                                         where('haveExpireance' , '==' , expState), 
                                         where('haveclass' , '==' , classState) ,  
                                         where('country' , '==' , selectedState),  
                                  where('haveChild' , '==' , child)   
                                           ); 
                                   }
                                  else if( age.length>0   ){
                                         queryCondition=and(  where('salary' , '==' , salaryState) ,
                                         where('age' , '>=' , minimumAge) , where('age' , '<=' , maxAge) ,
                                         where('isPartime' , '==' , empState) ,
                                         where('liveIn' , '==' , live) , 
                                         where('language' , '==' , language) ,
                                         where('haveExpireance' , '==' , expState), 
                                         where('haveclass' , '==' , classState) ,  
                                         where('country' , '==' , selectedState),  
                                  where('haveChild' , '==' , child)   
                                           ); 
                                   }  
   
   
                         }
   
   
   
                        else if(selectedArea.length>0 ){
                               queryCondition=and(  where('salary' , '==' , salaryState) ,
                               where('cityId' , '==' , selectedArea), 
                               where('isPartime' , '==' , empState) ,
                               where('language' , '==' , language) ,
                               where('haveExpireance' , '==' , expState), 
                               where('haveclass' , '==' , classState) ,  
                               where('country' , '==' , selectedState),  
                        where('haveChild' , '==' , child)   
                                 ); 
                         }
                        else if(religion.length>0 ){
                               queryCondition=and(  where('salary' , '==' , salaryState) ,
                               where('religion' , '==' , religion),
                               where('isPartime' , '==' , empState) ,
                               where('language' , '==' , language) ,
                               where('haveExpireance' , '==' , expState), 
                               where('haveclass' , '==' , classState) ,  
                               where('country' , '==' , selectedState),  
                        where('haveChild' , '==' , child)   
                                 ); 
                         }
                        else if( serviceState.length>0   ){
                               queryCondition=and(  where('salary' , '==' , salaryState) ,
                               where('workType' , 'array-contains-any' , [  { label: serviceState, value: serviceState }] ),   
                               where('isPartime' , '==' , empState) ,
                               where('language' , '==' , language) ,
                               where('haveExpireance' , '==' , expState), 
                               where('haveclass' , '==' , classState) ,  
                               where('country' , '==' , selectedState),  
                        where('haveChild' , '==' , child)   
                                 ); 
                         }
                        else if( age.length>0   ){
                               queryCondition=and(  where('salary' , '==' , salaryState) ,
                               where('age' , '>=' , minimumAge) , where('age' , '<=' , maxAge) ,
                               where('isPartime' , '==' , empState) ,
                               where('language' , '==' , language) ,
                               where('haveExpireance' , '==' , expState), 
                               where('haveclass' , '==' , classState) ,  
                               where('country' , '==' , selectedState),  
                        where('haveChild' , '==' , child)   
                                 ); 
                         }  
   
   
   
   
                  }
   
   
   
   
                 else if(live.length>0 ){
                        queryCondition=and(  where('salary' , '==' , salaryState) ,
                        where('liveIn' , '==' , live) , 
                        where('language' , '==' , language) ,
                        where('haveExpireance' , '==' , expState), 
                        where('isPartime' , '==' , empState) ,  
                        where('country' , '==' , selectedState),  
                 where('haveChild' , '==' , child)   
                          ); 
                  }
                 else if(selectedArea.length>0 ){
                        queryCondition=and(  where('salary' , '==' , salaryState) ,
                        where('cityId' , '==' , selectedArea), 
                        where('language' , '==' , language) ,
                        where('haveExpireance' , '==' , expState), 
                        where('isPartime' , '==' , empState) , 
                        where('country' , '==' , selectedState),  
                 where('haveChild' , '==' , child)   
                          ); 
                  }
                 else if(religion.length>0 ){
                        queryCondition=and(  where('salary' , '==' , salaryState) ,
                        where('religion' , '==' , religion),
                        where('language' , '==' , language) ,
                        where('haveExpireance' , '==' , expState), 
                        where('isPartime' , '==' , empState) , 
                        where('country' , '==' , selectedState),  
                 where('haveChild' , '==' , child)   
                          ); 
                  }
                 else if( serviceState.length>0   ){
                        queryCondition=and(  where('salary' , '==' , salaryState) ,
                        where('workType' , 'array-contains-any' , [  { label: serviceState, value: serviceState }] ),   
                        where('haveExpireance' , '==' , expState), 
                        where('language' , '==' , language) ,
                        where('isPartime' , '==' , empState) , 
                        where('country' , '==' , selectedState),  
                 where('haveChild' , '==' , child)   
                          ); 
                  }
                 else if( age.length>0   ){
                        queryCondition=and(  where('salary' , '==' , salaryState) ,
                        where('age' , '>=' , minimumAge) , where('age' , '<=' , maxAge) ,
                        where('haveExpireance' , '==' , expState), 
                        where('language' , '==' , language) ,
                        where('isPartime' , '==' , empState) ,
                        where('country' , '==' , selectedState),  
                 where('haveChild' , '==' , child)   
                          ); 
                  }        
   
           }
   
   
   
   
          else if(empState.length>0 ){
                 queryCondition=and(  where('salary' , '==' , salaryState) ,
                 where('isPartime' , '==' , empState) ,
                 where('haveExpireance' , '==' , expState),
                 where('isPartime' , '==' , empState) , 
                 where('country' , '==' , selectedState),  
          where('haveChild' , '==' , child)   
                   ); 
           }
          else if(live.length>0 ){
                 queryCondition=and(  where('salary' , '==' , salaryState) ,
                 where('liveIn' , '==' , live) , 
                 where('haveExpireance' , '==' , expState),
                 where('isPartime' , '==' , empState) ,
                 where('country' , '==' , selectedState),  
          where('haveChild' , '==' , child)   
                   ); 
           }
          else if(selectedArea.length>0 ){
                 queryCondition=and(  where('salary' , '==' , salaryState) ,
                 where('cityId' , '==' , selectedArea), 
                 where('haveExpireance' , '==' , expState),
                 where('isPartime' , '==' , empState) , 
                 where('country' , '==' , selectedState),  
          where('haveChild' , '==' , child)   
                   ); 
           }
          else if(religion.length>0 ){
                 queryCondition=and(  where('salary' , '==' , salaryState) ,
                 where('religion' , '==' , religion),
                 where('haveExpireance' , '==' , expState),
                 where('isPartime' , '==' , empState) ,
                 where('country' , '==' , selectedState),  
          where('haveChild' , '==' , child)   
                   ); 
           }
          else if( serviceState.length>0   ){
                 queryCondition=and(  where('salary' , '==' , salaryState) ,
                 where('workType' , 'array-contains-any' , [  { label: serviceState, value: serviceState }] ),   
                 where('isPartime' , '==' , empState) ,
                 where('haveExpireance' , '==' , expState),
                 where('country' , '==' , selectedState),  
          where('haveChild' , '==' , child)   
                   ); 
           }
          else if( age.length>0   ){
                 queryCondition=and(  where('salary' , '==' , salaryState) ,
                 where('age' , '>=' , minimumAge) , where('age' , '<=' , maxAge) ,
                 where('isPartime' , '==' , empState) ,
                 where('haveExpireance' , '==' , expState),
                 where('country' , '==' , selectedState),  
          where('haveChild' , '==' , child)   
                   ); 
           }           
   
   }
   
   
   
   
   else if(language.length>0){
   queryCondition=and(  where('salary' , '==' , salaryState) ,
   where('language' , '==' , language) ,
   where('isPartime' , '==' , empState) ,
   where('country' , '==' , selectedState),  
   where('haveChild' , '==' , child)   
     ); 
   }
   else if(empState.length>0 ){
   queryCondition=and(  where('salary' , '==' , salaryState) ,
   where('isPartime' , '==' , empState) ,
   where('country' , '==' , selectedState),  
   where('haveChild' , '==' , child)   
     ); 
   }
   else if(live.length>0 ){
   queryCondition=and(  where('salary' , '==' , salaryState) ,
   where('liveIn' , '==' , live) , 
   where('isPartime' , '==' , empState) ,
   where('country' , '==' , selectedState),  
   where('haveChild' , '==' , child)   
     ); 
   }
   else if(selectedArea.length>0 ){
   queryCondition=and(  where('salary' , '==' , salaryState) ,
   where('cityId' , '==' , selectedArea), 
   where('isPartime' , '==' , empState) , 
   where('country' , '==' , selectedState),  
   where('haveChild' , '==' , child)   
     ); 
   }
   else if(religion.length>0 ){
   queryCondition=and(  where('salary' , '==' , salaryState) ,
   where('religion' , '==' , religion),
   where('isPartime' , '==' , empState) ,
   where('country' , '==' , selectedState),  
   where('haveChild' , '==' , child)   
     ); 
   }
   else if( serviceState.length>0   ){
   queryCondition=and(  where('salary' , '==' , salaryState) ,
   where('workType' , 'array-contains-any' , [  { label: serviceState, value: serviceState }] ),   
   where('isPartime' , '==' , empState) ,  
   where('country' , '==' , selectedState),  
   where('haveChild' , '==' , child)   
     ); 
   }
   else if( age.length>0   ){
   queryCondition=and(  where('salary' , '==' , salaryState) ,
   where('age' , '>=' , minimumAge) , where('age' , '<=' , maxAge) ,
   where('isPartime' , '==' , empState) ,
   where('country' , '==' , selectedState),  
   where('haveChild' , '==' , child)   
     ); 
   }
   
   
   
        }
   
   
       else if(live.length>0 ){
              queryCondition=and(  where('salary' , '==' , salaryState) ,
              where('country' , '==' , selectedState),  
              where('liveIn' , '==' , live) , 
       where('haveChild' , '==' , child)   
                ); 
        }
       else if(selectedArea.length>0 ){
              queryCondition=and(  where('salary' , '==' , salaryState) ,
              where('country' , '==' , selectedState),  
              where('cityId' , '==' , selectedArea), 
       where('haveChild' , '==' , child)   
                ); 
        }
       else if(religion.length>0 ){
              queryCondition=and(  where('salary' , '==' , salaryState) ,
              where('country' , '==' , selectedState),  
              where('religion' , '==' , religion),
       where('haveChild' , '==' , child)   
                ); 
        }
       else if( serviceState.length>0   ){
              queryCondition=and(  where('salary' , '==' , salaryState) ,
              where('country' , '==' , selectedState),  
              where('workType' , 'array-contains-any' , [  { label: serviceState, value: serviceState }] ),   
       where('haveChild' , '==' , child)   
                ); 
        }
       else if( age.length>0   ){
              queryCondition=and(  where('salary' , '==' , salaryState) ,
              where('country' , '==' , selectedState),  
              where('age' , '>=' , minimumAge) , where('age' , '<=' , maxAge) ,
       where('haveChild' , '==' , child)   
                ); 
        }
   
   }
   
   
   
   
   }