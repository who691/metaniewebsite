if(salaryState.length>0  ){
    queryCondition=and(  where('salary' , '==' , salaryState),  );

    if(child.length>0){
           queryCondition=and(  where('salary' , '==' , salaryState),
           where('salary' , '==' , salaryState),
           where('haveChild' , '==' , child) 
            ); 

            if(selectedState.length>0){
                  queryCondition=and(  where('salary' , '==' , salaryState) ,
           where('country' , '==' , selectedState),    
           where('salary' , '==' , salaryState),
           where('haveChild' , '==' , child)   
                    ); 


                    if(classState.length>0){
                         queryCondition=and(  where('salary' , '==' , salaryState) ,
                         where('salary' , '==' , salaryState),
                          where('haveclass' , '==' , classState) ,  
                         where('country' , '==' , selectedState),    
                         where('salary' , '==' , salaryState),
                         where('haveChild' , '==' , child)   
                                  ); 

                                  if(expState.length>0){
                                       queryCondition=and(  where('salary' , '==' , salaryState) ,
                                       where('salary' , '==' , salaryState),
                                       where('haveExpireance' , '==' , expState),  
                                       where('salary' , '==' , salaryState),
                                        where('haveclass' , '==' , classState) ,  
                                       where('country' , '==' , selectedState),  
                                where('salary' , '==' , salaryState),
                                where('haveChild' , '==' , child)   
                                         ); 

                                         if(language.length>0){
                                              queryCondition=and(  where('salary' , '==' , salaryState) ,
                                              where('salary' , '==' , salaryState),
                                              where('language' , '==' , language) ,
                                              where('salary' , '==' , salaryState),
                                              where('haveExpireance' , '==' , expState), 
                                              where('salary' , '==' , salaryState),
                                               where('haveclass' , '==' , classState) ,  
                                              where('country' , '==' , selectedState),  
                                       where('salary' , '==' , salaryState),
                                       where('haveChild' , '==' , child)   
                                                ); 

                                               if(empState.length>0 ){
                                                     queryCondition=and(  where('salary' , '==' , salaryState) ,
                                                     where('salary' , '==' , salaryState), 
                                                     where('isPartime' , '==' , empState) ,
                                                     where('salary' , '==' , salaryState),
                                                     where('language' , '==' , language) ,
                                                     where('salary' , '==' , salaryState),
                                                     where('haveExpireance' , '==' , expState), 
                                                     where('salary' , '==' , salaryState),
                                                      where('haveclass' , '==' , classState) ,  
                                                     where('country' , '==' , selectedState),  
                                              where('salary' , '==' , salaryState),
                                              where('haveChild' , '==' , child)   
                                                       ); 


                                                       if(live.length>0 ){
                                                            queryCondition=and(  where('salary' , '==' , salaryState) ,
                                                            where('salary' , '==' , salaryState),
                                                            where('liveIn' , '==' , live) , 
                                                            where('salary' , '==' , salaryState), 
                                                            where('isPartime' , '==' , empState) ,
                                                            where('salary' , '==' , salaryState),
                                                            where('language' , '==' , language) ,
                                                            where('salary' , '==' , salaryState),
                                                            where('haveExpireance' , '==' , expState), 
                                                            where('salary' , '==' , salaryState),
                                                             where('haveclass' , '==' , classState) ,  
                                                            where('country' , '==' , selectedState),  
                                                     where('salary' , '==' , salaryState),
                                                     where('haveChild' , '==' , child)   
                                                              ); 


                                                              if(selectedArea.length>0 ){
                                                                   queryCondition=and(  where('salary' , '==' , salaryState) ,
                                                                   where('salary' , '==' , salaryState), 
                                                                   where('cityId' , '==' , selectedArea), 
                                                                   where('salary' , '==' , salaryState),
                                                                   where('liveIn' , '==' , live) , 
                                                                   where('salary' , '==' , salaryState), 
                                                                   where('isPartime' , '==' , empState) ,
                                                                   where('salary' , '==' , salaryState),
                                                                   where('language' , '==' , language) ,
                                                                   where('salary' , '==' , salaryState),
                                                                   where('haveExpireance' , '==' , expState), 
                                                                   where('salary' , '==' , salaryState),
                                                                    where('haveclass' , '==' , classState) ,  
                                                                   where('country' , '==' , selectedState),  
                                                            where('salary' , '==' , salaryState),
                                                            where('haveChild' , '==' , child)   
                                                                     ); 




                                                                   if(religion.length>0 ){
                                                                          queryCondition=and(  where('salary' , '==' , salaryState) ,
                                                                          where('salary' , '==' , salaryState),
                                                                          where('religion' , '==' , religion),
                                                                          where('salary' , '==' , salaryState), 
                                                                          where('cityId' , '==' , selectedArea), 
                                                                          where('salary' , '==' , salaryState),
                                                                          where('liveIn' , '==' , live) , 
                                                                          where('salary' , '==' , salaryState), 
                                                                          where('isPartime' , '==' , empState) ,
                                                                          where('salary' , '==' , salaryState),
                                                                          where('language' , '==' , language) ,
                                                                          where('salary' , '==' , salaryState),
                                                                          where('haveExpireance' , '==' , expState), 
                                                                          where('salary' , '==' , salaryState),
                                                                           where('haveclass' , '==' , classState) ,  
                                                                          where('country' , '==' , selectedState),  
                                                                   where('salary' , '==' , salaryState),
                                                                   where('haveChild' , '==' , child)   
                                                                            ); 



                                                                          if( serviceState.length>0   ){
                                                                                 queryCondition=and(  where('salary' , '==' , salaryState) ,
                                                                                 where('salary' , '==' , salaryState),
                                                                                 where('workType' , 'array-contains-any' , [  { label: serviceState, value: serviceState }] ),   
                                                                                 where('salary' , '==' , salaryState),
                                                                                 where('religion' , '==' , religion),
                                                                                 where('salary' , '==' , salaryState), 
                                                                                 where('cityId' , '==' , selectedArea), 
                                                                                 where('salary' , '==' , salaryState),
                                                                                 where('liveIn' , '==' , live) , 
                                                                                 where('salary' , '==' , salaryState), 
                                                                                 where('isPartime' , '==' , empState) ,
                                                                                 where('salary' , '==' , salaryState),
                                                                                 where('language' , '==' , language) ,
                                                                                 where('salary' , '==' , salaryState),
                                                                                 where('haveExpireance' , '==' , expState), 
                                                                                 where('salary' , '==' , salaryState),
                                                                                  where('haveclass' , '==' , classState) ,  
                                                                                 where('country' , '==' , selectedState),  
                                                                          where('salary' , '==' , salaryState),
                                                                          where('haveChild' , '==' , child)   
                                                                                   ); 


                                                                                  if( age.length>0   ){
                                                                                        queryCondition=and(  where('salary' , '==' , salaryState) ,
                                                                                        where('salary' , '==' , salaryState),
                                                                                        where('age' , '>=' , minimumAge) , where('age' , '<=' , maxAge) ,
                                                                                        where('salary' , '==' , salaryState),
                                                                                        where('workType' , 'array-contains-any' , [  { label: serviceState, value: serviceState }] ),  
                                                                                        where('salary' , '==' , salaryState),
                                                                                        where('religion' , '==' , religion),
                                                                                        where('salary' , '==' , salaryState), 
                                                                                        where('cityId' , '==' , selectedArea), 
                                                                                        where('salary' , '==' , salaryState),
                                                                                        where('liveIn' , '==' , live) , 
                                                                                        where('salary' , '==' , salaryState), 
                                                                                        where('isPartime' , '==' , empState) ,
                                                                                        where('salary' , '==' , salaryState),
                                                                                        where('language' , '==' , language) ,
                                                                                        where('salary' , '==' , salaryState),
                                                                                        where('haveExpireance' , '==' , expState), 
                                                                                        where('salary' , '==' , salaryState),
                                                                                         where('haveclass' , '==' , classState) ,  
                                                                                        where('country' , '==' , selectedState),  
                                                                                 where('salary' , '==' , salaryState),
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



  else if(age.length>0  ){
       queryCondition=and(   
       where('salary' , '==' , salaryState),
       where('age' , '>=' , minimumAge) , where('age' , '<=' , maxAge) , );
   
       if(child.length>0){
              queryCondition=and(  where('salary' , '==' , salaryState),
              where('age' , '>=' , minimumAge) , where('age' , '<=' , maxAge),
              where('salary' , '==' , salaryState),
              where('haveChild' , '==' , child) 
               ); 
   
               if(selectedState.length>0){
                     queryCondition=and(  where('salary' , '==' , salaryState),
                     where('age' , '>=' , minimumAge) , where('age' , '<=' , maxAge) ,
              where('country' , '==' , selectedState),    
              where('salary' , '==' , salaryState),
              where('haveChild' , '==' , child)   
                       ); 
   
   
                       if(classState.length>0){
                            queryCondition=and(  where('salary' , '==' , salaryState),
                            where('age' , '>=' , minimumAge) , where('age' , '<=' , maxAge) ,
                            where('salary' , '==' , salaryState),
                             where('haveclass' , '==' , classState) ,  
                            where('country' , '==' , selectedState),    
                            where('salary' , '==' , salaryState),
                            where('haveChild' , '==' , child)   
                                     ); 
   
                                     if(expState.length>0){
                                          queryCondition=and(  where('salary' , '==' , salaryState),
                                          where('age' , '>=' , minimumAge) , where('age' , '<=' , maxAge) ,
                                          where('salary' , '==' , salaryState),
                                          where('haveExpireance' , '==' , expState),  
                                          where('salary' , '==' , salaryState),
                                           where('haveclass' , '==' , classState) ,  
                                          where('country' , '==' , selectedState),  
                                   where('salary' , '==' , salaryState),
                                   where('haveChild' , '==' , child)   
                                            ); 
   
                                            if(language.length>0){
                                                 queryCondition=and(  where('salary' , '==' , salaryState),
                                                 where('age' , '>=' , minimumAge) , where('age' , '<=' , maxAge) ,
                                                 where('salary' , '==' , salaryState),
                                                 where('language' , '==' , language) ,
                                                 where('salary' , '==' , salaryState),
                                                 where('haveExpireance' , '==' , expState), 
                                                 where('salary' , '==' , salaryState),
                                                  where('haveclass' , '==' , classState) ,  
                                                 where('country' , '==' , selectedState),  
                                          where('salary' , '==' , salaryState),
                                          where('haveChild' , '==' , child)   
                                                   ); 
   
                                                  if(empState.length>0 ){
                                                        queryCondition=and(  where('salary' , '==' , salaryState),
                                                        where('age' , '>=' , minimumAge) , where('age' , '<=' , maxAge) ,
                                                        where('salary' , '==' , salaryState), 
                                                        where('isPartime' , '==' , empState) ,
                                                        where('salary' , '==' , salaryState),
                                                        where('language' , '==' , language) ,
                                                        where('salary' , '==' , salaryState),
                                                        where('haveExpireance' , '==' , expState), 
                                                        where('salary' , '==' , salaryState),
                                                         where('haveclass' , '==' , classState) ,  
                                                        where('country' , '==' , selectedState),  
                                                 where('salary' , '==' , salaryState),
                                                 where('haveChild' , '==' , child)   
                                                          ); 
   
   
                                                          if(live.length>0 ){
                                                               queryCondition=and(  where('salary' , '==' , salaryState),
                                                               where('age' , '>=' , minimumAge) , where('age' , '<=' , maxAge) ,
                                                               where('salary' , '==' , salaryState),
                                                               where('liveIn' , '==' , live) , 
                                                               where('salary' , '==' , salaryState), 
                                                               where('isPartime' , '==' , empState) ,
                                                               where('salary' , '==' , salaryState),
                                                               where('language' , '==' , language) ,
                                                               where('salary' , '==' , salaryState),
                                                               where('haveExpireance' , '==' , expState), 
                                                               where('salary' , '==' , salaryState),
                                                                where('haveclass' , '==' , classState) ,  
                                                               where('country' , '==' , selectedState),  
                                                        where('salary' , '==' , salaryState),
                                                        where('haveChild' , '==' , child)   
                                                                 ); 
   
   
                                                                 if(selectedArea.length>0 ){
                                                                      queryCondition=and(  where('salary' , '==' , salaryState),
                                                                      where('age' , '>=' , minimumAge) , where('age' , '<=' , maxAge) ,
                                                                      where('salary' , '==' , salaryState), 
                                                                      where('cityId' , '==' , selectedArea), 
                                                                      where('salary' , '==' , salaryState),
                                                                      where('liveIn' , '==' , live) , 
                                                                      where('salary' , '==' , salaryState), 
                                                                      where('isPartime' , '==' , empState) ,
                                                                      where('salary' , '==' , salaryState),
                                                                      where('language' , '==' , language) ,
                                                                      where('salary' , '==' , salaryState),
                                                                      where('haveExpireance' , '==' , expState), 
                                                                      where('salary' , '==' , salaryState),
                                                                       where('haveclass' , '==' , classState) ,  
                                                                      where('country' , '==' , selectedState),  
                                                               where('salary' , '==' , salaryState),
                                                               where('haveChild' , '==' , child)   
                                                                        ); 
   
   
   
   
                                                                      if(religion.length>0 ){
                                                                             queryCondition=and(  where('salary' , '==' , salaryState),
                                                                             where('age' , '>=' , minimumAge) , where('age' , '<=' , maxAge) ,
                                                                             where('salary' , '==' , salaryState),
                                                                             where('religion' , '==' , religion),
                                                                             where('salary' , '==' , salaryState), 
                                                                             where('cityId' , '==' , selectedArea), 
                                                                             where('salary' , '==' , salaryState),
                                                                             where('liveIn' , '==' , live) , 
                                                                             where('salary' , '==' , salaryState), 
                                                                             where('isPartime' , '==' , empState) ,
                                                                             where('salary' , '==' , salaryState),
                                                                             where('language' , '==' , language) ,
                                                                             where('salary' , '==' , salaryState),
                                                                             where('haveExpireance' , '==' , expState), 
                                                                             where('salary' , '==' , salaryState),
                                                                              where('haveclass' , '==' , classState) ,  
                                                                             where('country' , '==' , selectedState),  
                                                                      where('salary' , '==' , salaryState),
                                                                      where('haveChild' , '==' , child)   
                                                                               ); 
   
   
   
                                                                             if( serviceState.length>0   ){
                                                                                    queryCondition=and(  where('salary' , '==' , salaryState),
                                                                                    where('age' , '>=' , minimumAge) , where('age' , '<=' , maxAge) ,
                                                                                    where('salary' , '==' , salaryState),
                                                                                    where('workType' , 'array-contains-any' , [  { label: serviceState, value: serviceState }] ),   
                                                                                    where('salary' , '==' , salaryState),
                                                                                    where('religion' , '==' , religion),
                                                                                    where('salary' , '==' , salaryState), 
                                                                                    where('cityId' , '==' , selectedArea), 
                                                                                    where('salary' , '==' , salaryState),
                                                                                    where('liveIn' , '==' , live) , 
                                                                                    where('salary' , '==' , salaryState), 
                                                                                    where('isPartime' , '==' , empState) ,
                                                                                    where('salary' , '==' , salaryState),
                                                                                    where('language' , '==' , language) ,
                                                                                    where('salary' , '==' , salaryState),
                                                                                    where('haveExpireance' , '==' , expState), 
                                                                                    where('salary' , '==' , salaryState),
                                                                                     where('haveclass' , '==' , classState) ,  
                                                                                    where('country' , '==' , selectedState),  
                                                                             where('salary' , '==' , salaryState),
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

   else if(serviceState.length>0  ){
       queryCondition=and(  where('salary' , '==' , salaryState),
       where('workType' , 'array-contains-any' , [  { label: serviceState, value: serviceState }] ) , );
       
       if(child.length>0){
            queryCondition=and(  where('salary' , '==' , salaryState),
            where('workType' , 'array-contains-any' , [  { label: serviceState, value: serviceState }] ) ,
            where('salary' , '==' , salaryState),
            where('haveChild' , '==' , child) 
             ); 
       
             if(selectedState.length>0){
                   queryCondition=and(  where('salary' , '==' , salaryState),
                   where('workType' , 'array-contains-any' , [  { label: serviceState, value: serviceState }] ) ,
            where('country' , '==' , selectedState),    
            where('salary' , '==' , salaryState),
            where('haveChild' , '==' , child)   
                     ); 
       
       
                     if(classState.length>0){
                          queryCondition=and(  where('salary' , '==' , salaryState),
                          where('workType' , 'array-contains-any' , [  { label: serviceState, value: serviceState }] ) ,
                          where('salary' , '==' , salaryState),
                           where('haveclass' , '==' , classState) ,  
                          where('country' , '==' , selectedState),    
                          where('salary' , '==' , salaryState),
                          where('haveChild' , '==' , child)   
                                   ); 
       
                                   if(expState.length>0){
                                        queryCondition=and(  where('salary' , '==' , salaryState),
                                        where('workType' , 'array-contains-any' , [  { label: serviceState, value: serviceState }] ) ,
                                        where('salary' , '==' , salaryState),
                                        where('haveExpireance' , '==' , expState),  
                                        where('salary' , '==' , salaryState),
                                         where('haveclass' , '==' , classState) ,  
                                        where('country' , '==' , selectedState),  
                                 where('salary' , '==' , salaryState),
                                 where('haveChild' , '==' , child)   
                                          ); 
       
                                          if(language.length>0){
                                               queryCondition=and(  where('salary' , '==' , salaryState),
                                               where('workType' , 'array-contains-any' , [  { label: serviceState, value: serviceState }] ) ,
                                               where('salary' , '==' , salaryState),
                                               where('language' , '==' , language) ,
                                               where('salary' , '==' , salaryState),
                                               where('haveExpireance' , '==' , expState), 
                                               where('salary' , '==' , salaryState),
                                                where('haveclass' , '==' , classState) ,  
                                               where('country' , '==' , selectedState),  
                                        where('salary' , '==' , salaryState),
                                        where('haveChild' , '==' , child)   
                                                 ); 
       
                                                if(empState.length>0 ){
                                                      queryCondition=and(  where('salary' , '==' , salaryState),
                                                      where('workType' , 'array-contains-any' , [  { label: serviceState, value: serviceState }] ) ,
                                                      where('salary' , '==' , salaryState), 
                                                      where('isPartime' , '==' , empState) ,
                                                      where('salary' , '==' , salaryState),
                                                      where('language' , '==' , language) ,
                                                      where('salary' , '==' , salaryState),
                                                      where('haveExpireance' , '==' , expState), 
                                                      where('salary' , '==' , salaryState),
                                                       where('haveclass' , '==' , classState) ,  
                                                      where('country' , '==' , selectedState),  
                                               where('salary' , '==' , salaryState),
                                               where('haveChild' , '==' , child)   
                                                        ); 
       
       
                                                        if(live.length>0 ){
                                                             queryCondition=and(  where('salary' , '==' , salaryState),
                                                             where('workType' , 'array-contains-any' , [  { label: serviceState, value: serviceState }] ) ,
                                                             where('salary' , '==' , salaryState),
                                                             where('liveIn' , '==' , live) , 
                                                             where('salary' , '==' , salaryState), 
                                                             where('isPartime' , '==' , empState) ,
                                                             where('salary' , '==' , salaryState),
                                                             where('language' , '==' , language) ,
                                                             where('salary' , '==' , salaryState),
                                                             where('haveExpireance' , '==' , expState), 
                                                             where('salary' , '==' , salaryState),
                                                              where('haveclass' , '==' , classState) ,  
                                                             where('country' , '==' , selectedState),  
                                                      where('salary' , '==' , salaryState),
                                                      where('haveChild' , '==' , child)   
                                                               ); 
       
       
                                                               if(selectedArea.length>0 ){
                                                                    queryCondition=and(  where('salary' , '==' , salaryState),
                                                                    where('workType' , 'array-contains-any' , [  { label: serviceState, value: serviceState }] ) ,
                                                                    where('salary' , '==' , salaryState), 
                                                                    where('cityId' , '==' , selectedArea), 
                                                                    where('salary' , '==' , salaryState),
                                                                    where('liveIn' , '==' , live) , 
                                                                    where('salary' , '==' , salaryState), 
                                                                    where('isPartime' , '==' , empState) ,
                                                                    where('salary' , '==' , salaryState),
                                                                    where('language' , '==' , language) ,
                                                                    where('salary' , '==' , salaryState),
                                                                    where('haveExpireance' , '==' , expState), 
                                                                    where('salary' , '==' , salaryState),
                                                                     where('haveclass' , '==' , classState) ,  
                                                                    where('country' , '==' , selectedState),  
                                                             where('salary' , '==' , salaryState),
                                                             where('haveChild' , '==' , child)   
                                                                      ); 
       
       
       
       
                                                                    if(religion.length>0 ){
                                                                           queryCondition=and(  where('salary' , '==' , salaryState),
                                                                           where('workType' , 'array-contains-any' , [  { label: serviceState, value: serviceState }] ) ,
                                                                           where('salary' , '==' , salaryState),
                                                                           where('religion' , '==' , religion),
                                                                           where('salary' , '==' , salaryState), 
                                                                           where('cityId' , '==' , selectedArea), 
                                                                           where('salary' , '==' , salaryState),
                                                                           where('liveIn' , '==' , live) , 
                                                                           where('salary' , '==' , salaryState), 
                                                                           where('isPartime' , '==' , empState) ,
                                                                           where('salary' , '==' , salaryState),
                                                                           where('language' , '==' , language) ,
                                                                           where('salary' , '==' , salaryState),
                                                                           where('haveExpireance' , '==' , expState), 
                                                                           where('salary' , '==' , salaryState),
                                                                            where('haveclass' , '==' , classState) ,  
                                                                           where('country' , '==' , selectedState),  
                                                                    where('salary' , '==' , salaryState),
                                                                    where('haveChild' , '==' , child)   
                                                                             ); 
       
       
       
       
       
                                                                                   if( age.length>0   ){
                                                                                         queryCondition=and(  where('salary' , '==' , salaryState),
                                                                                         where('salary' , '==' , salaryState),
                                                                                         where('age' , '>=' , minimumAge) , where('age' , '<=' , maxAge) ,
                                                                                         where('salary' , '==' , salaryState),
                                                                                         where('workType' , 'array-contains-any' , [  { label: serviceState, value: serviceState }] ),  
                                                                                         where('salary' , '==' , salaryState),
                                                                                         where('religion' , '==' , religion),
                                                                                         where('salary' , '==' , salaryState), 
                                                                                         where('cityId' , '==' , selectedArea), 
                                                                                         where('salary' , '==' , salaryState),
                                                                                         where('liveIn' , '==' , live) , 
                                                                                         where('salary' , '==' , salaryState), 
                                                                                         where('isPartime' , '==' , empState) ,
                                                                                         where('salary' , '==' , salaryState),
                                                                                         where('language' , '==' , language) ,
                                                                                         where('salary' , '==' , salaryState),
                                                                                         where('haveExpireance' , '==' , expState), 
                                                                                         where('salary' , '==' , salaryState),
                                                                                          where('haveclass' , '==' , classState) ,  
                                                                                         where('country' , '==' , selectedState),  
                                                                                  where('salary' , '==' , salaryState),
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

 else if(selectedArea.length>0  ){
              queryCondition=and(  where('salary' , '==' , salaryState), 
              where('cityId' , '==' , selectedArea)  , );
              
              if(child.length>0){
                 queryCondition=and(  where('salary' , '==' , salaryState), 
                 where('cityId' , '==' , selectedArea)  ,
                 where('salary' , '==' , salaryState),
                 where('haveChild' , '==' , child) 
                  ); 
              
                  if(selectedState.length>0){
                        queryCondition=and(  where('salary' , '==' , salaryState), 
                        where('cityId' , '==' , selectedArea)  ,
                 where('country' , '==' , selectedState),    
                 where('salary' , '==' , salaryState),
                 where('haveChild' , '==' , child)   
                          ); 
              
              
                          if(classState.length>0){
                               queryCondition=and(  where('salary' , '==' , salaryState), 
                               where('cityId' , '==' , selectedArea)  ,
                               where('salary' , '==' , salaryState),
                                where('haveclass' , '==' , classState) ,  
                               where('country' , '==' , selectedState),    
                               where('salary' , '==' , salaryState),
                               where('haveChild' , '==' , child)   
                                        ); 
              
                                        if(expState.length>0){
                                             queryCondition=and(  where('salary' , '==' , salaryState), 
                                             where('cityId' , '==' , selectedArea)  ,
                                             where('salary' , '==' , salaryState),
                                             where('haveExpireance' , '==' , expState),  
                                             where('salary' , '==' , salaryState),
                                              where('haveclass' , '==' , classState) ,  
                                             where('country' , '==' , selectedState),  
                                      where('salary' , '==' , salaryState),
                                      where('haveChild' , '==' , child)   
                                               ); 
              
                                               if(language.length>0){
                                                    queryCondition=and(  where('salary' , '==' , salaryState), 
                                                    where('cityId' , '==' , selectedArea)  ,
                                                    where('salary' , '==' , salaryState),
                                                    where('language' , '==' , language) ,
                                                    where('salary' , '==' , salaryState),
                                                    where('haveExpireance' , '==' , expState), 
                                                    where('salary' , '==' , salaryState),
                                                     where('haveclass' , '==' , classState) ,  
                                                    where('country' , '==' , selectedState),  
                                             where('salary' , '==' , salaryState),
                                             where('haveChild' , '==' , child)   
                                                      ); 
              
                                                     if(empState.length>0 ){
                                                           queryCondition=and(  where('salary' , '==' , salaryState), 
                                                           where('cityId' , '==' , selectedArea)  ,
                                                           where('salary' , '==' , salaryState), 
                                                           where('isPartime' , '==' , empState) ,
                                                           where('salary' , '==' , salaryState),
                                                           where('language' , '==' , language) ,
                                                           where('salary' , '==' , salaryState),
                                                           where('haveExpireance' , '==' , expState), 
                                                           where('salary' , '==' , salaryState),
                                                            where('haveclass' , '==' , classState) ,  
                                                           where('country' , '==' , selectedState),  
                                                    where('salary' , '==' , salaryState),
                                                    where('haveChild' , '==' , child)   
                                                             ); 
              
              
                                                             if(live.length>0 ){
                                                                  queryCondition=and(  where('salary' , '==' , salaryState), 
                                                                  where('cityId' , '==' , selectedArea)  ,
                                                                  where('salary' , '==' , salaryState),
                                                                  where('liveIn' , '==' , live) , 
                                                                  where('salary' , '==' , salaryState), 
                                                                  where('isPartime' , '==' , empState) ,
                                                                  where('salary' , '==' , salaryState),
                                                                  where('language' , '==' , language) ,
                                                                  where('salary' , '==' , salaryState),
                                                                  where('haveExpireance' , '==' , expState), 
                                                                  where('salary' , '==' , salaryState),
                                                                   where('haveclass' , '==' , classState) ,  
                                                                  where('country' , '==' , selectedState),  
                                                           where('salary' , '==' , salaryState),
                                                           where('haveChild' , '==' , child)   
                                                                    ); 
              
              
                                                              
              
              
              
              
                                                                         if(religion.length>0 ){
                                                                                queryCondition=and(  
                                                                                where('salary' , '==' , salaryState),
                                                                                where('salary' , '==' , salaryState),
                                                                                where('religion' , '==' , religion),
                                                                                where('salary' , '==' , salaryState), 
                                                                                where('cityId' , '==' , selectedArea), 
                                                                                where('salary' , '==' , salaryState),
                                                                                where('liveIn' , '==' , live) , 
                                                                                where('salary' , '==' , salaryState), 
                                                                                where('isPartime' , '==' , empState) ,
                                                                                where('salary' , '==' , salaryState),
                                                                                where('language' , '==' , language) ,
                                                                                where('salary' , '==' , salaryState),
                                                                                where('haveExpireance' , '==' , expState), 
                                                                                where('salary' , '==' , salaryState),
                                                                                 where('haveclass' , '==' , classState) ,  
                                                                                where('country' , '==' , selectedState),  
                                                                         where('salary' , '==' , salaryState),
                                                                         where('haveChild' , '==' , child)   
                                                                                  ); 
              
              
              
                                                                                if( serviceState.length>0   ){
                                                                                       queryCondition=and(  where('salary' , '==' , salaryState), 
                                                                                       where('cityId' , '==' , selectedArea)  ,
                                                                                       where('salary' , '==' , salaryState),
                                                                                       where('salary' , '==' , salaryState),
                                                                                       where('religion' , '==' , religion),
                                                                                       where('salary' , '==' , salaryState),
                                                                                       where('workType' , 'array-contains-any' , [  { label: serviceState, value: serviceState }] ),
                                                                                       where('salary' , '==' , salaryState),
                                                                                       where('liveIn' , '==' , live) , 
                                                                                       where('salary' , '==' , salaryState), 
                                                                                       where('isPartime' , '==' , empState) ,
                                                                                       where('salary' , '==' , salaryState),
                                                                                       where('language' , '==' , language) ,
                                                                                       where('salary' , '==' , salaryState),
                                                                                       where('haveExpireance' , '==' , expState), 
                                                                                       where('salary' , '==' , salaryState),
                                                                                        where('haveclass' , '==' , classState) ,  
                                                                                       where('country' , '==' , selectedState),  
                                                                                where('salary' , '==' , salaryState),
                                                                                where('haveChild' , '==' , child)   
                                                                                         ); 
              
              
                                                                                        if( age.length>0   ){
                                                                                              queryCondition=and(  where('salary' , '==' , salaryState),
                                                                                              where('salary' , '==' , salaryState),
                                                                                              where('age' , '>=' , minimumAge) , where('age' , '<=' , maxAge) ,
                                                                                              where('salary' , '==' , salaryState), 
                                                                                              where('cityId' , '==' , selectedArea) ,  
                                                                                              where('salary' , '==' , salaryState),
                                                                                              where('religion' , '==' , religion),
                                                                                              where('salary' , '==' , salaryState),
                                                                                              where('workType' , 'array-contains-any' , [  { label: serviceState, value: serviceState }] ),
                                                                                              where('salary' , '==' , salaryState),
                                                                                              where('liveIn' , '==' , live) , 
                                                                                              where('salary' , '==' , salaryState), 
                                                                                              where('isPartime' , '==' , empState) ,
                                                                                              where('salary' , '==' , salaryState),
                                                                                              where('language' , '==' , language) ,
                                                                                              where('salary' , '==' , salaryState),
                                                                                              where('haveExpireance' , '==' , expState), 
                                                                                              where('salary' , '==' , salaryState),
                                                                                               where('haveclass' , '==' , classState) ,  
                                                                                              where('country' , '==' , selectedState),  
                                                                                       where('salary' , '==' , salaryState),
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


   else if(selectedState.length>0  ){
                     queryCondition=and(  where('salary' , '==' , salaryState),
                     where('country' , '==' , selectedState)   );
                     
                  
                                 if(classState.length>0){
                                      queryCondition=and(  where('salary' , '==' , salaryState),
                                      where('country' , '==' , selectedState)  ,
                                      where('salary' , '==' , salaryState),
                                       where('haveclass' , '==' , classState) ,  
                                      where('salary' , '==' , salaryState) ,   
                                      where('salary' , '==' , salaryState),
                                      where('haveChild' , '==' , child)   
                                               ); 
                     
                                               if(expState.length>0){
                                                    queryCondition=and(  where('salary' , '==' , salaryState),
                                                    where('country' , '==' , selectedState)  ,
                                                    where('salary' , '==' , salaryState),
                                                    where('haveExpireance' , '==' , expState),  
                                                    where('salary' , '==' , salaryState),
                                                     where('haveclass' , '==' , classState) ,  
                                                    where('salary' , '==' , salaryState) ,
                                             where('salary' , '==' , salaryState),
                                             where('haveChild' , '==' , child)   
                                                      ); 
                     
                                                      if(language.length>0){
                                                           queryCondition=and(  where('salary' , '==' , salaryState),
                                                           where('country' , '==' , selectedState)  ,
                                                           where('salary' , '==' , salaryState),
                                                           where('language' , '==' , language) ,
                                                           where('salary' , '==' , salaryState),
                                                           where('haveExpireance' , '==' , expState), 
                                                           where('salary' , '==' , salaryState),
                                                            where('haveclass' , '==' , classState) ,  
                                                           where('salary' , '==' , salaryState) , 
                                                    where('salary' , '==' , salaryState),
                                                    where('haveChild' , '==' , child)   
                                                             ); 
                     
                                                            if(empState.length>0 ){
                                                                  queryCondition=and(  where('salary' , '==' , salaryState),
                                                                  where('country' , '==' , selectedState)  ,
                                                                  where('salary' , '==' , salaryState), 
                                                                  where('isPartime' , '==' , empState) ,
                                                                  where('salary' , '==' , salaryState),
                                                                  where('language' , '==' , language) ,
                                                                  where('salary' , '==' , salaryState),
                                                                  where('haveExpireance' , '==' , expState), 
                                                                  where('salary' , '==' , salaryState),
                                                                   where('haveclass' , '==' , classState) ,  
                                                                  where('salary' , '==' , salaryState) ,  
                                                           where('salary' , '==' , salaryState),
                                                           where('haveChild' , '==' , child)   
                                                                    ); 
                     
                     
                                                                    if(live.length>0 ){
                                                                         queryCondition=and(  where('salary' , '==' , salaryState),
                                                                         where('country' , '==' , selectedState)  ,
                                                                         where('salary' , '==' , salaryState),
                                                                         where('liveIn' , '==' , live) , 
                                                                         where('salary' , '==' , salaryState), 
                                                                         where('isPartime' , '==' , empState) ,
                                                                         where('salary' , '==' , salaryState),
                                                                         where('language' , '==' , language) ,
                                                                         where('salary' , '==' , salaryState),
                                                                         where('haveExpireance' , '==' , expState), 
                                                                         where('salary' , '==' , salaryState),
                                                                          where('haveclass' , '==' , classState) ,  
                                                                         where('salary' , '==' , salaryState) ,
                                                                  where('salary' , '==' , salaryState),
                                                                  where('haveChild' , '==' , child)   
                                                                           ); 
                     
                     
                                                                           if(selectedArea.length>0 ){
                                                                                queryCondition=and(  where('salary' , '==' , salaryState),
                                                                                where('country' , '==' , selectedState)  ,
                                                                                where('salary' , '==' , salaryState), 
                                                                                where('cityId' , '==' , selectedArea), 
                                                                                where('salary' , '==' , salaryState),
                                                                                where('liveIn' , '==' , live) , 
                                                                                where('salary' , '==' , salaryState), 
                                                                                where('isPartime' , '==' , empState) ,
                                                                                where('salary' , '==' , salaryState),
                                                                                where('language' , '==' , language) ,
                                                                                where('salary' , '==' , salaryState),
                                                                                where('haveExpireance' , '==' , expState), 
                                                                                where('salary' , '==' , salaryState),
                                                                                 where('haveclass' , '==' , classState) ,  
                                                                                where('salary' , '==' , salaryState) ,
                                                                         where('salary' , '==' , salaryState),
                                                                         where('haveChild' , '==' , child)   
                                                                                  ); 
                     
                     
                     
                     
                                                                                if(religion.length>0 ){
                                                                                       queryCondition=and(  where('salary' , '==' , salaryState),
                                                                                       where('country' , '==' , selectedState)  ,
                                                                                       where('salary' , '==' , salaryState),
                                                                                       where('religion' , '==' , religion),
                                                                                       where('salary' , '==' , salaryState), 
                                                                                       where('cityId' , '==' , selectedArea), 
                                                                                       where('salary' , '==' , salaryState),
                                                                                       where('liveIn' , '==' , live) , 
                                                                                       where('salary' , '==' , salaryState), 
                                                                                       where('isPartime' , '==' , empState) ,
                                                                                       where('salary' , '==' , salaryState),
                                                                                       where('language' , '==' , language) ,
                                                                                       where('salary' , '==' , salaryState),
                                                                                       where('haveExpireance' , '==' , expState), 
                                                                                       where('salary' , '==' , salaryState),
                                                                                        where('haveclass' , '==' , classState) ,  
                                                                                       where('salary' , '==' , salaryState) ,
                                                                                where('salary' , '==' , salaryState),
                                                                                where('haveChild' , '==' , child)   
                                                                                         ); 
                     
                     
                     
                                                                                       if( serviceState.length>0   ){
                                                                                              queryCondition=and( 
                                                                                              where('country' , '==' , selectedState)  ,
                                                                                              where('salary' , '==' , salaryState),
                                                                                              where('workType' , 'array-contains-any' , [  { label: serviceState, value: serviceState }] ),   
                                                                                              where('salary' , '==' , salaryState),
                                                                                              where('religion' , '==' , religion),
                                                                                    
                                                                                              where('cityId' , '==' , selectedArea), 
                                                                                              where('salary' , '==' , salaryState),
                                                                                              where('liveIn' , '==' , live) , 
                                                                                              where('salary' , '==' , salaryState), 
                                                                                              where('isPartime' , '==' , empState) ,
                                                                                              where('salary' , '==' , salaryState),
                                                                                              where('language' , '==' , language) ,
                                                                                              where('salary' , '==' , salaryState),
                                                                                              where('haveExpireance' , '==' , expState), 
                                                                                              where('salary' , '==' , salaryState),
                                                                                               where('haveclass' , '==' , classState) ,  
                                                                                           
                                                                                       where('salary' , '==' , salaryState),
                                                                                       where('haveChild' , '==' , child)   
                                                                                                ); 
                     
                     
                                                                                               if( age.length>0   ){
                                                                                                     queryCondition=and(  
                                                                                                     where('country' , '==' , selectedState)  ,
                                                                                                     where('salary' , '==' , salaryState),
                                                                                                     where('age' , '>=' , minimumAge) , where('age' , '<=' , maxAge) ,
                                                                                                     
                                                                                                     where('workType' , 'array-contains-any' , [  { label: serviceState, value: serviceState }] ),  
                                                                                                     where('salary' , '==' , salaryState),
                                                                                                     where('religion' , '==' , religion),
                                                                                                     
                                                                                                     where('cityId' , '==' , selectedArea), 
                                                                                                     where('salary' , '==' , salaryState),
                                                                                                     where('liveIn' , '==' , live) , 
                                                                                                     where('salary' , '==' , salaryState), 
                                                                                                     where('isPartime' , '==' , empState) ,
                                                                                                     where('salary' , '==' , salaryState),
                                                                                                     where('language' , '==' , language) ,
                                                                                                     where('salary' , '==' , salaryState),
                                                                                                     where('haveExpireance' , '==' , expState), 
                                                                                                     where('salary' , '==' , salaryState),
                                                                                                      where('haveclass' , '==' , classState) ,  
                                                                                                  
                                                                                              where('salary' , '==' , salaryState),
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
                     
    else if(classState.length>0  ){
                            queryCondition=and(   where('salary' , '==' , salaryState),
                             where('haveclass' , '==' , classState)    );
                            
                            if(child.length>0){
                               queryCondition=and(   where('salary' , '==' , salaryState),
                                where('haveclass' , '==' , classState)  ,
                               where('salary' , '==' , salaryState),
                               where('haveChild' , '==' , child) 
                                ); 
                            
                                if(selectedState.length>0){
                                      queryCondition=and(   where('salary' , '==' , salaryState),
                                       where('haveclass' , '==' , classState)   ,
                               where('country' , '==' , selectedState),    
                               where('salary' , '==' , salaryState),
                               where('haveChild' , '==' , child)   
                                        ); 
                            
                            
                                      
                            
                                                      if(expState.length>0){
                                                           queryCondition=and(   where('salary' , '==' , salaryState),
                                                            where('haveclass' , '==' , classState)   ,
                                                           where('salary' , '==' , salaryState),
                                                           where('haveExpireance' , '==' , expState),  
                                                           where('salary' , '==' , salaryState) ,  
                                                           where('country' , '==' , selectedState),  
                                                    where('salary' , '==' , salaryState),
                                                    where('haveChild' , '==' , child)   
                                                             ); 
                            
                                                             if(language.length>0){
                                                                  queryCondition=and(   where('salary' , '==' , salaryState),
                                                                   where('haveclass' , '==' , classState)   ,
                                                                  where('salary' , '==' , salaryState),
                                                                  where('language' , '==' , language) ,
                                                                  where('salary' , '==' , salaryState),
                                                                  where('haveExpireance' , '==' , expState), 
                                                                  where('salary' , '==' , salaryState) ,  
                                                                  where('country' , '==' , selectedState),  
                                                           where('salary' , '==' , salaryState),
                                                           where('haveChild' , '==' , child)   
                                                                    ); 
                            
                                                                   if(empState.length>0 ){
                                                                         queryCondition=and(   where('salary' , '==' , salaryState),
                                                                          where('haveclass' , '==' , classState)   ,
                                                                         where('salary' , '==' , salaryState), 
                                                                         where('isPartime' , '==' , empState) ,
                                                                         where('salary' , '==' , salaryState),
                                                                         where('language' , '==' , language) ,
                                                                         where('salary' , '==' , salaryState),
                                                                         where('haveExpireance' , '==' , expState), 
                                                                         where('salary' , '==' , salaryState) , 
                                                                         where('country' , '==' , selectedState),  
                                                                  where('salary' , '==' , salaryState),
                                                                  where('haveChild' , '==' , child)   
                                                                           ); 
                            
                            
                                                                           if(live.length>0 ){
                                                                                queryCondition=and(   where('salary' , '==' , salaryState),
                                                                                 where('haveclass' , '==' , classState)   ,
                                                                                where('salary' , '==' , salaryState),
                                                                                where('liveIn' , '==' , live) , 
                                                                                where('salary' , '==' , salaryState), 
                                                                                where('isPartime' , '==' , empState) ,
                                                                                where('salary' , '==' , salaryState),
                                                                                where('language' , '==' , language) ,
                                                                                where('salary' , '==' , salaryState),
                                                                                where('haveExpireance' , '==' , expState), 
                                                                                where('salary' , '==' , salaryState) ,  
                                                                                where('country' , '==' , selectedState),  
                                                                         where('salary' , '==' , salaryState),
                                                                         where('haveChild' , '==' , child)   
                                                                                  ); 
                            
                            
                                                                                  if(selectedArea.length>0 ){
                                                                                       queryCondition=and(   where('salary' , '==' , salaryState),
                                                                                        where('haveclass' , '==' , classState)   ,
                                                                                       where('salary' , '==' , salaryState), 
                                                                                       where('cityId' , '==' , selectedArea), 
                                                                                       where('salary' , '==' , salaryState),
                                                                                       where('liveIn' , '==' , live) , 
                                                                                       where('salary' , '==' , salaryState), 
                                                                                       where('isPartime' , '==' , empState) ,
                                                                                       where('salary' , '==' , salaryState),
                                                                                       where('language' , '==' , language) ,
                                                                                       where('salary' , '==' , salaryState),
                                                                                       where('haveExpireance' , '==' , expState), 
                                                                                       where('salary' , '==' , salaryState) ,   
                                                                                       where('country' , '==' , selectedState),  
                                                                                where('salary' , '==' , salaryState),
                                                                                where('haveChild' , '==' , child)   
                                                                                         ); 
                            
                            
                            
                            
                                                                                       if(religion.length>0 ){
                                                                                              queryCondition=and(   where('salary' , '==' , salaryState),
                                                                                               where('haveclass' , '==' , classState)   ,
                                                                                              where('salary' , '==' , salaryState),
                                                                                              where('religion' , '==' , religion),
                                                                                              where('salary' , '==' , salaryState), 
                                                                                              where('cityId' , '==' , selectedArea), 
                                                                                              where('salary' , '==' , salaryState),
                                                                                              where('liveIn' , '==' , live) , 
                                                                                              where('salary' , '==' , salaryState), 
                                                                                              where('isPartime' , '==' , empState) ,
                                                                                              where('salary' , '==' , salaryState),
                                                                                              where('language' , '==' , language) ,
                                                                                              where('salary' , '==' , salaryState),
                                                                                              where('haveExpireance' , '==' , expState), 
                                                                                              where('salary' , '==' , salaryState) ,  
                                                                                              where('country' , '==' , selectedState),  
                                                                                       where('salary' , '==' , salaryState),
                                                                                       where('haveChild' , '==' , child)   
                                                                                                ); 
                            
                            
                            
                                                                                              if( serviceState.length>0   ){
                                                                                                     queryCondition=and(   where('salary' , '==' , salaryState),
                                                                                                      where('haveclass' , '==' , classState)   ,
                                                                                                     where('salary' , '==' , salaryState),
                                                                                                     where('workType' , 'array-contains-any' , [  { label: serviceState, value: serviceState }] ),   
                                                                                                     where('salary' , '==' , salaryState),
                                                                                                     where('religion' , '==' , religion),
                                                                                                     where('salary' , '==' , salaryState), 
                                                                                                     where('cityId' , '==' , selectedArea), 
                                                                                                     where('salary' , '==' , salaryState),
                                                                                                     where('liveIn' , '==' , live) , 
                                                                                                     where('salary' , '==' , salaryState), 
                                                                                                     where('isPartime' , '==' , empState) ,
                                                                                                     where('salary' , '==' , salaryState),
                                                                                                     where('language' , '==' , language) ,
                                                                                                     where('salary' , '==' , salaryState),
                                                                                                     where('haveExpireance' , '==' , expState), 
                                                                                                     where('salary' , '==' , salaryState) , 
                                                                                                     where('country' , '==' , selectedState),  
                                                                                              where('salary' , '==' , salaryState),
                                                                                              where('haveChild' , '==' , child)   
                                                                                                       ); 
                            
                            
                                                                                                      if( age.length>0   ){
                                                                                                            queryCondition=and(   where('salary' , '==' , salaryState),
                                                                                                             where('haveclass' , '==' , classState)   ,
                                                                                                            where('salary' , '==' , salaryState),
                                                                                                            where('age' , '>=' , minimumAge) , where('age' , '<=' , maxAge) ,
                                                                                                            where('salary' , '==' , salaryState),
                                                                                                            where('workType' , 'array-contains-any' , [  { label: serviceState, value: serviceState }] ),  
                                                                                                            where('salary' , '==' , salaryState),
                                                                                                            where('religion' , '==' , religion),
                                                                                                            where('salary' , '==' , salaryState), 
                                                                                                            where('cityId' , '==' , selectedArea), 
                                                                                                            where('salary' , '==' , salaryState),
                                                                                                            where('liveIn' , '==' , live) , 
                                                                                                            where('salary' , '==' , salaryState), 
                                                                                                            where('isPartime' , '==' , empState) ,
                                                                                                            where('salary' , '==' , salaryState),
                                                                                                            where('language' , '==' , language) ,
                                                                                                            where('salary' , '==' , salaryState),
                                                                                                            where('haveExpireance' , '==' , expState), 
                                                                                                            where('salary' , '==' , salaryState) ,  
                                                                                                            where('country' , '==' , selectedState),  
                                                                                                     where('salary' , '==' , salaryState),
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
                     
    else if(child.length>0  ){
                                   queryCondition=and(  where('salary' , '==' , salaryState),
                                   where('haveChild' , '==' , child)  );
                                   
                              
                                   
                                       if(selectedState.length>0){
                                             queryCondition=and(  where('salary' , '==' , salaryState),
                                             where('haveChild' , '==' , child) ,
                                      where('country' , '==' , selectedState),    
                                      where('salary' , '==' , salaryState)
                                               ); 
                                   
                                   
                                               if(classState.length>0){
                                                    queryCondition=and(  where('salary' , '==' , salaryState),
                                                    where('haveChild' , '==' , child) ,
                                                    where('salary' , '==' , salaryState),
                                                     where('haveclass' , '==' , classState) ,  
                                                    where('country' , '==' , selectedState),    
                                                    where('salary' , '==' , salaryState) 
                                                             ); 
                                   
                                                             if(expState.length>0){
                                                                  queryCondition=and(  where('salary' , '==' , salaryState),
                                                                  where('haveChild' , '==' , child) ,
                                                                  where('salary' , '==' , salaryState),
                                                                  where('haveExpireance' , '==' , expState),  
                                                                  where('salary' , '==' , salaryState),
                                                                   where('haveclass' , '==' , classState) ,  
                                                                  where('country' , '==' , selectedState),  
                                                                  where('salary' , '==' , salaryState)  
                                                                    ); 
                                   
                                                                    if(language.length>0){
                                                                         queryCondition=and(  where('salary' , '==' , salaryState),
                                                                         where('haveChild' , '==' , child) ,
                                                                         where('salary' , '==' , salaryState),
                                                                         where('language' , '==' , language) ,
                                                                         where('salary' , '==' , salaryState),
                                                                         where('haveExpireance' , '==' , expState), 
                                                                         where('salary' , '==' , salaryState),
                                                                          where('haveclass' , '==' , classState) ,  
                                                                         where('country' , '==' , selectedState),  
                                                                         where('salary' , '==' , salaryState)
                                                                           ); 
                                   
                                                                          if(empState.length>0 ){
                                                                                queryCondition=and(  where('salary' , '==' , salaryState),
                                                                                where('haveChild' , '==' , child) ,
                                                                                where('salary' , '==' , salaryState), 
                                                                                where('isPartime' , '==' , empState) ,
                                                                                where('salary' , '==' , salaryState),
                                                                                where('language' , '==' , language) ,
                                                                                where('salary' , '==' , salaryState),
                                                                                where('haveExpireance' , '==' , expState), 
                                                                                where('salary' , '==' , salaryState),
                                                                                 where('haveclass' , '==' , classState) ,  
                                                                                where('country' , '==' , selectedState),  
                                                                                where('salary' , '==' , salaryState) 
                                                                                  ); 
                                   
                                   
                                                                                  if(live.length>0 ){
                                                                                       queryCondition=and(  where('salary' , '==' , salaryState),
                                                                                       where('haveChild' , '==' , child) ,
                                                                                       where('salary' , '==' , salaryState),
                                                                                       where('liveIn' , '==' , live) , 
                                                                                       where('salary' , '==' , salaryState), 
                                                                                       where('isPartime' , '==' , empState) ,
                                                                                       where('salary' , '==' , salaryState),
                                                                                       where('language' , '==' , language) ,
                                                                                       where('salary' , '==' , salaryState),
                                                                                       where('haveExpireance' , '==' , expState), 
                                                                                       where('salary' , '==' , salaryState),
                                                                                        where('haveclass' , '==' , classState) ,  
                                                                                       where('country' , '==' , selectedState),  
                                                                                       where('salary' , '==' , salaryState)  
                                                                                         ); 
                                   
                                   
                                                                                         if(selectedArea.length>0 ){
                                                                                              queryCondition=and(  where('salary' , '==' , salaryState),
                                                                                              where('haveChild' , '==' , child) ,
                                                                                              where('salary' , '==' , salaryState), 
                                                                                              where('cityId' , '==' , selectedArea), 
                                                                                              where('salary' , '==' , salaryState),
                                                                                              where('liveIn' , '==' , live) , 
                                                                                              where('salary' , '==' , salaryState), 
                                                                                              where('isPartime' , '==' , empState) ,
                                                                                              where('salary' , '==' , salaryState),
                                                                                              where('language' , '==' , language) ,
                                                                                              where('salary' , '==' , salaryState),
                                                                                              where('haveExpireance' , '==' , expState), 
                                                                                              where('salary' , '==' , salaryState),
                                                                                               where('haveclass' , '==' , classState) ,  
                                                                                              where('country' , '==' , selectedState),  
                                                                                              where('salary' , '==' , salaryState)  
                                                                                                ); 
                                   
                                   
                                   
                                   
                                                                                              if(religion.length>0 ){
                                                                                                     queryCondition=and(  where('salary' , '==' , salaryState),
                                                                                                     where('haveChild' , '==' , child) ,
                                                                                                     where('salary' , '==' , salaryState),
                                                                                                     where('religion' , '==' , religion),
                                                                                                     where('salary' , '==' , salaryState), 
                                                                                                     where('cityId' , '==' , selectedArea), 
                                                                                                     where('salary' , '==' , salaryState),
                                                                                                     where('liveIn' , '==' , live) , 
                                                                                                     where('salary' , '==' , salaryState), 
                                                                                                     where('isPartime' , '==' , empState) ,
                                                                                                     where('salary' , '==' , salaryState),
                                                                                                     where('language' , '==' , language) ,
                                                                                                     where('salary' , '==' , salaryState),
                                                                                                     where('haveExpireance' , '==' , expState), 
                                                                                                     where('salary' , '==' , salaryState),
                                                                                                      where('haveclass' , '==' , classState) ,  
                                                                                                     where('country' , '==' , selectedState),  
                                                                                                     where('salary' , '==' , salaryState)  
                                                                                                       ); 
                                   
                                   
                                   
                                                                                                     if( serviceState.length>0   ){
                                                                                                            queryCondition=and(  where('salary' , '==' , salaryState),
                                                                                                            where('haveChild' , '==' , child) ,
                                                                                                            where('salary' , '==' , salaryState),
                                                                                                            where('workType' , 'array-contains-any' , [  { label: serviceState, value: serviceState }] ),   
                                                                                                            where('salary' , '==' , salaryState),
                                                                                                            where('religion' , '==' , religion),
                                                                                                            where('salary' , '==' , salaryState), 
                                                                                                            where('cityId' , '==' , selectedArea), 
                                                                                                            where('salary' , '==' , salaryState),
                                                                                                            where('liveIn' , '==' , live) , 
                                                                                                            where('salary' , '==' , salaryState), 
                                                                                                            where('isPartime' , '==' , empState) ,
                                                                                                            where('salary' , '==' , salaryState),
                                                                                                            where('language' , '==' , language) ,
                                                                                                            where('salary' , '==' , salaryState),
                                                                                                            where('haveExpireance' , '==' , expState), 
                                                                                                            where('salary' , '==' , salaryState),
                                                                                                             where('haveclass' , '==' , classState) ,  
                                                                                                            where('country' , '==' , selectedState),  
                                                                                                            where('salary' , '==' , salaryState)
                                                                                                              ); 
                                   
                                   
                                                                                                             if( age.length>0   ){
                                                                                                                   queryCondition=and(  where('salary' , '==' , salaryState),
                                                                                                                   where('haveChild' , '==' , child) ,
                                                                                                                   where('salary' , '==' , salaryState),
                                                                                                                   where('age' , '>=' , minimumAge) , where('age' , '<=' , maxAge) ,
                                                                                                                   where('salary' , '==' , salaryState),
                                                                                                                   where('workType' , 'array-contains-any' , [  { label: serviceState, value: serviceState }] ),  
                                                                                                                   where('salary' , '==' , salaryState),
                                                                                                                   where('religion' , '==' , religion),
                                                                                                                   where('salary' , '==' , salaryState), 
                                                                                                                   where('cityId' , '==' , selectedArea), 
                                                                                                                   where('salary' , '==' , salaryState),
                                                                                                                   where('liveIn' , '==' , live) , 
                                                                                                                   where('salary' , '==' , salaryState), 
                                                                                                                   where('isPartime' , '==' , empState) ,
                                                                                                                   where('salary' , '==' , salaryState),
                                                                                                                   where('language' , '==' , language) ,
                                                                                                                   where('salary' , '==' , salaryState),
                                                                                                                   where('haveExpireance' , '==' , expState), 
                                                                                                                   where('salary' , '==' , salaryState),
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


        else if(expState.length>0  ){
                          
              queryCondition=and(   where('salary' , '==' , salaryState),
                                          where('haveExpireance' , '==' , expState)  );
                                          
                                          if(child.length>0){
                                             queryCondition=and(   where('salary' , '==' , salaryState),
                                             where('haveExpireance' , '==' , expState),
                                             where('salary' , '==' , salaryState),
                                             where('haveChild' , '==' , child) 
                                              ); 
                                          
                                              if(selectedState.length>0){
                                                    queryCondition=and(   where('salary' , '==' , salaryState),
                                                    where('haveExpireance' , '==' , expState) ,
                                             where('country' , '==' , selectedState),    
                                             where('salary' , '==' , salaryState),
                                             where('haveChild' , '==' , child)   
                                                      ); 
                                          
                                          
                                                      if(classState.length>0){
                                                           queryCondition=and(   where('salary' , '==' , salaryState),
                                                           where('haveExpireance' , '==' , expState) ,
                                                           where('salary' , '==' , salaryState),
                                                            where('haveclass' , '==' , classState) ,  
                                                           where('country' , '==' , selectedState),    
                                                           where('salary' , '==' , salaryState),
                                                           where('haveChild' , '==' , child)   
                                                                    ); 
                                          
                                                                  
                                                                           if(language.length>0){
                                                                                queryCondition=and(   where('salary' , '==' , salaryState),
                                                                                where('haveExpireance' , '==' , expState) ,
                                                                                where('salary' , '==' , salaryState),
                                                                                where('language' , '==' , language) ,
                                                                                where('salary' , '==' , salaryState) ,
                                                                                where('salary' , '==' , salaryState),
                                                                                 where('haveclass' , '==' , classState) ,  
                                                                                where('country' , '==' , selectedState),  
                                                                         where('salary' , '==' , salaryState),
                                                                         where('haveChild' , '==' , child)   
                                                                                  ); 
                                          
                                                                                 if(empState.length>0 ){
                                                                                       queryCondition=and(   where('salary' , '==' , salaryState),
                                                                                       where('haveExpireance' , '==' , expState) ,
                                                                                       where('salary' , '==' , salaryState), 
                                                                                       where('isPartime' , '==' , empState) ,
                                                                                       where('salary' , '==' , salaryState),
                                                                                       where('language' , '==' , language) ,
                                                                                       where('salary' , '==' , salaryState) ,
                                                                                       where('salary' , '==' , salaryState),
                                                                                        where('haveclass' , '==' , classState) ,  
                                                                                       where('country' , '==' , selectedState),  
                                                                                where('salary' , '==' , salaryState),
                                                                                where('haveChild' , '==' , child)   
                                                                                         ); 
                                          
                                          
                                                                                         if(live.length>0 ){
                                                                                              queryCondition=and(   where('salary' , '==' , salaryState),
                                                                                              where('haveExpireance' , '==' , expState) ,
                                                                                              where('salary' , '==' , salaryState),
                                                                                              where('liveIn' , '==' , live) , 
                                                                                              where('salary' , '==' , salaryState), 
                                                                                              where('isPartime' , '==' , empState) ,
                                                                                              where('salary' , '==' , salaryState),
                                                                                              where('language' , '==' , language) ,
                                                                                              where('salary' , '==' , salaryState) ,
                                                                                              where('salary' , '==' , salaryState),
                                                                                               where('haveclass' , '==' , classState) ,  
                                                                                              where('country' , '==' , selectedState),  
                                                                                       where('salary' , '==' , salaryState),
                                                                                       where('haveChild' , '==' , child)   
                                                                                                ); 
                                          
                                          
                                                                                                if(selectedArea.length>0 ){
                                                                                                     queryCondition=and(   where('salary' , '==' , salaryState),
                                                                                                     where('haveExpireance' , '==' , expState) ,
                                                                                                     where('salary' , '==' , salaryState), 
                                                                                                     where('cityId' , '==' , selectedArea), 
                                                                                                     where('salary' , '==' , salaryState),
                                                                                                     where('liveIn' , '==' , live) , 
                                                                                                     where('salary' , '==' , salaryState), 
                                                                                                     where('isPartime' , '==' , empState) ,
                                                                                                     where('salary' , '==' , salaryState),
                                                                                                     where('language' , '==' , language) ,
                                                                                                     where('salary' , '==' , salaryState) ,
                                                                                                     where('salary' , '==' , salaryState),
                                                                                                      where('haveclass' , '==' , classState) ,  
                                                                                                     where('country' , '==' , selectedState),  
                                                                                              where('salary' , '==' , salaryState),
                                                                                              where('haveChild' , '==' , child)   
                                                                                                       ); 
                                          
                                          
                                          
                                          
                                                                                                     if(religion.length>0 ){
                                                                                                            queryCondition=and(   where('salary' , '==' , salaryState),
                                                                                                            where('haveExpireance' , '==' , expState) ,
                                                                                                            where('salary' , '==' , salaryState),
                                                                                                            where('religion' , '==' , religion),
                                                                                                            where('salary' , '==' , salaryState), 
                                                                                                            where('cityId' , '==' , selectedArea), 
                                                                                                            where('salary' , '==' , salaryState),
                                                                                                            where('liveIn' , '==' , live) , 
                                                                                                            where('salary' , '==' , salaryState), 
                                                                                                            where('isPartime' , '==' , empState) ,
                                                                                                            where('salary' , '==' , salaryState),
                                                                                                            where('language' , '==' , language) ,
                                                                                                            where('salary' , '==' , salaryState) ,
                                                                                                            where('salary' , '==' , salaryState),
                                                                                                             where('haveclass' , '==' , classState) ,  
                                                                                                            where('country' , '==' , selectedState),  
                                                                                                     where('salary' , '==' , salaryState),
                                                                                                     where('haveChild' , '==' , child)   
                                                                                                              ); 
                                          
                                          
                                          
                                                                                                            if( serviceState.length>0   ){
                                                                                                                   queryCondition=and(   where('salary' , '==' , salaryState),
                                                                                                                   where('haveExpireance' , '==' , expState) ,
                                                                                                                   where('salary' , '==' , salaryState),
                                                                                                                   where('workType' , 'array-contains-any' , [  { label: serviceState, value: serviceState }] ),   
                                                                                                                   where('salary' , '==' , salaryState),
                                                                                                                   where('religion' , '==' , religion),
                                                                                                                   where('salary' , '==' , salaryState), 
                                                                                                                   where('cityId' , '==' , selectedArea), 
                                                                                                                   where('salary' , '==' , salaryState),
                                                                                                                   where('liveIn' , '==' , live) , 
                                                                                                                   where('salary' , '==' , salaryState), 
                                                                                                                   where('isPartime' , '==' , empState) ,
                                                                                                                   where('salary' , '==' , salaryState),
                                                                                                                   where('language' , '==' , language) ,
                                                                                                                   where('salary' , '==' , salaryState) ,
                                                                                                                   where('salary' , '==' , salaryState),
                                                                                                                    where('haveclass' , '==' , classState) ,  
                                                                                                                   where('country' , '==' , selectedState),  
                                                                                                            where('salary' , '==' , salaryState),
                                                                                                            where('haveChild' , '==' , child)   
                                                                                                                     ); 
                                          
                                          
                                                                                                                    if( age.length>0   ){
                                                                                                                          queryCondition=and(   where('salary' , '==' , salaryState),
                                                                                                                          where('haveExpireance' , '==' , expState) ,
                                                                                                                          where('salary' , '==' , salaryState),
                                                                                                                          where('age' , '>=' , minimumAge) , where('age' , '<=' , maxAge) ,
                                                                                                                          where('salary' , '==' , salaryState),
                                                                                                                          where('workType' , 'array-contains-any' , [  { label: serviceState, value: serviceState }] ),  
                                                                                                                          where('salary' , '==' , salaryState),
                                                                                                                          where('religion' , '==' , religion),
                                                                                                                          where('salary' , '==' , salaryState), 
                                                                                                                          where('cityId' , '==' , selectedArea), 
                                                                                                                          where('salary' , '==' , salaryState),
                                                                                                                          where('liveIn' , '==' , live) , 
                                                                                                                          where('salary' , '==' , salaryState), 
                                                                                                                          where('isPartime' , '==' , empState) ,
                                                                                                                          where('salary' , '==' , salaryState),
                                                                                                                          where('language' , '==' , language) ,
                                                                                                                          where('salary' , '==' , salaryState) ,
                                                                                                                          where('salary' , '==' , salaryState),
                                                                                                                           where('haveclass' , '==' , classState) ,  
                                                                                                                          where('country' , '==' , selectedState),  
                                                                                                                   where('salary' , '==' , salaryState),
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


      else if( language.length>0  ){
              queryCondition=and(  where('salary' , '==' , salaryState),
              where('language' , '==' , language)   );
                                                 
                    if(child.length>0){
                                                    queryCondition=and(  where('salary' , '==' , salaryState),
                                                    where('language' , '==' , language) ,
                                                    where('salary' , '==' , salaryState),
                                                    where('haveChild' , '==' , child) 
                                                     ); 
                                                 
                                                     if(selectedState.length>0){
                                                           queryCondition=and(  where('salary' , '==' , salaryState),
                                                           where('language' , '==' , language)  ,
                                                    where('country' , '==' , selectedState),    
                                                    where('salary' , '==' , salaryState),
                                                    where('haveChild' , '==' , child)   
                                                             ); 
                                                 
                                                 
                                                             if(classState.length>0){
                                                                  queryCondition=and(  where('salary' , '==' , salaryState),
                                                                  where('language' , '==' , language)  ,
                                                                  where('salary' , '==' , salaryState),
                                                                   where('haveclass' , '==' , classState) ,  
                                                                  where('country' , '==' , selectedState),    
                                                                  where('salary' , '==' , salaryState),
                                                                  where('haveChild' , '==' , child)   
                                                                           ); 
                                                 
                                                                           if(expState.length>0){
                                                                                queryCondition=and(  where('salary' , '==' , salaryState),
                                                                                where('language' , '==' , language)  ,
                                                                                where('salary' , '==' , salaryState),
                                                                                where('haveExpireance' , '==' , expState),  
                                                                                where('salary' , '==' , salaryState),
                                                                                 where('haveclass' , '==' , classState) ,  
                                                                                where('country' , '==' , selectedState),  
                                                                         where('salary' , '==' , salaryState),
                                                                         where('haveChild' , '==' , child)   
                                                                                  ); 
                                                 
                                                                             
                                                 
                                                                                        if(empState.length>0 ){
                                                                                              queryCondition=and(  where('salary' , '==' , salaryState),
                                                                                              where('language' , '==' , language)  ,
                                                                                              where('salary' , '==' , salaryState), 
                                                                                              where('isPartime' , '==' , empState) ,
                                                                                              where('salary' , '==' , salaryState),
                                                                                              where('salary' , '==' , salaryState),
                                                                                              where('haveExpireance' , '==' , expState), 
                                                                                              where('salary' , '==' , salaryState),
                                                                                               where('haveclass' , '==' , classState) ,  
                                                                                              where('country' , '==' , selectedState),  
                                                                                       where('salary' , '==' , salaryState),
                                                                                       where('haveChild' , '==' , child)   
                                                                                                ); 
                                                 
                                                 
                                                                                                if(live.length>0 ){
                                                                                                     queryCondition=and(  where('salary' , '==' , salaryState),
                                                                                                     where('language' , '==' , language)  ,
                                                                                                     where('salary' , '==' , salaryState),
                                                                                                     where('liveIn' , '==' , live) , 
                                                                                                     where('salary' , '==' , salaryState), 
                                                                                                     where('isPartime' , '==' , empState) ,
                                                                                                     where('salary' , '==' , salaryState),
                                                                                                     where('salary' , '==' , salaryState),
                                                                                                     where('haveExpireance' , '==' , expState), 
                                                                                                     where('salary' , '==' , salaryState),
                                                                                                      where('haveclass' , '==' , classState) ,  
                                                                                                     where('country' , '==' , selectedState),  
                                                                                              where('salary' , '==' , salaryState),
                                                                                              where('haveChild' , '==' , child)   
                                                                                                       ); 
                                                 
                                                 
                                                                                                       if(selectedArea.length>0 ){
                                                                                                            queryCondition=and(  where('salary' , '==' , salaryState),
                                                                                                            where('language' , '==' , language)  ,
                                                                                                            where('salary' , '==' , salaryState), 
                                                                                                            where('cityId' , '==' , selectedArea), 
                                                                                                            where('salary' , '==' , salaryState),
                                                                                                            where('liveIn' , '==' , live) , 
                                                                                                            where('salary' , '==' , salaryState), 
                                                                                                            where('isPartime' , '==' , empState) ,
                                                                                                            where('salary' , '==' , salaryState),
                                                                                                            where('salary' , '==' , salaryState),
                                                                                                            where('haveExpireance' , '==' , expState), 
                                                                                                            where('salary' , '==' , salaryState),
                                                                                                             where('haveclass' , '==' , classState) ,  
                                                                                                            where('country' , '==' , selectedState),  
                                                                                                     where('salary' , '==' , salaryState),
                                                                                                     where('haveChild' , '==' , child)   
                                                                                                              ); 
                                                 
                                                 
                                                 
                                                 
                                                                                                            if(religion.length>0 ){
                                                                                                                   queryCondition=and(  where('salary' , '==' , salaryState),
                                                                                                                   where('language' , '==' , language)  ,
                                                                                                                   where('salary' , '==' , salaryState),
                                                                                                                   where('religion' , '==' , religion),
                                                                                                                   where('salary' , '==' , salaryState), 
                                                                                                                   where('cityId' , '==' , selectedArea), 
                                                                                                                   where('salary' , '==' , salaryState),
                                                                                                                   where('liveIn' , '==' , live) , 
                                                                                                                   where('salary' , '==' , salaryState), 
                                                                                                                   where('isPartime' , '==' , empState) ,
                                                                                                                   where('salary' , '==' , salaryState),
                                                                                                                   where('salary' , '==' , salaryState),
                                                                                                                   where('haveExpireance' , '==' , expState), 
                                                                                                                   where('salary' , '==' , salaryState),
                                                                                                                    where('haveclass' , '==' , classState) ,  
                                                                                                                   where('country' , '==' , selectedState),  
                                                                                                            where('salary' , '==' , salaryState),
                                                                                                            where('haveChild' , '==' , child)   
                                                                                                                     ); 
                                                 
                                                 
                                                 
                                                                                                                   if( serviceState.length>0   ){
                                                                                                                          queryCondition=and(  where('salary' , '==' , salaryState),
                                                                                                                          where('language' , '==' , language)  ,
                                                                                                                          where('salary' , '==' , salaryState),
                                                                                                                          where('workType' , 'array-contains-any' , [  { label: serviceState, value: serviceState }] ),   
                                                                                                                          where('salary' , '==' , salaryState),
                                                                                                                          where('religion' , '==' , religion),
                                                                                                                          where('salary' , '==' , salaryState), 
                                                                                                                          where('cityId' , '==' , selectedArea), 
                                                                                                                          where('salary' , '==' , salaryState),
                                                                                                                          where('liveIn' , '==' , live) , 
                                                                                                                          where('salary' , '==' , salaryState), 
                                                                                                                          where('isPartime' , '==' , empState) ,
                                                                                                                          where('salary' , '==' , salaryState),
                                                                                                                          where('salary' , '==' , salaryState),
                                                                                                                          where('haveExpireance' , '==' , expState), 
                                                                                                                          where('salary' , '==' , salaryState),
                                                                                                                           where('haveclass' , '==' , classState) ,  
                                                                                                                          where('country' , '==' , selectedState),  
                                                                                                                   where('salary' , '==' , salaryState),
                                                                                                                   where('haveChild' , '==' , child)   
                                                                                                                            ); 
                                                 
                                                 
                                                                                                                           if( age.length>0   ){
                                                                                                                                 queryCondition=and(  where('salary' , '==' , salaryState),
                                                                                                                                 where('language' , '==' , language)  ,
                                                                                                                                 where('salary' , '==' , salaryState),
                                                                                                                                 where('age' , '>=' , minimumAge) , where('age' , '<=' , maxAge) ,
                                                                                                                                 where('salary' , '==' , salaryState),
                                                                                                                                 where('workType' , 'array-contains-any' , [  { label: serviceState, value: serviceState }] ),  
                                                                                                                                 where('salary' , '==' , salaryState),
                                                                                                                                 where('religion' , '==' , religion),
                                                                                                                                 where('salary' , '==' , salaryState), 
                                                                                                                                 where('cityId' , '==' , selectedArea), 
                                                                                                                                 where('salary' , '==' , salaryState),
                                                                                                                                 where('liveIn' , '==' , live) , 
                                                                                                                                 where('salary' , '==' , salaryState), 
                                                                                                                                 where('isPartime' , '==' , empState) ,
                                                                                                                                 where('salary' , '==' , salaryState),
                                                                                                                                 where('salary' , '==' , salaryState),
                                                                                                                                 where('haveExpireance' , '==' , expState), 
                                                                                                                                 where('salary' , '==' , salaryState),
                                                                                                                                  where('haveclass' , '==' , classState) ,  
                                                                                                                                 where('country' , '==' , selectedState),  
                                                                                                                          where('salary' , '==' , salaryState),
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


        else if( empState.length>0  ){
                                                        queryCondition=and(  where('salary' , '==' , salaryState), 
                                                        where('isPartime' , '==' , empState)   );
                                                        
                                                        if(child.length>0){
                                                           queryCondition=and(  where('salary' , '==' , salaryState), 
                                                           where('isPartime' , '==' , empState) ,
                                                           where('salary' , '==' , salaryState),
                                                           where('haveChild' , '==' , child) 
                                                            ); 
                                                        
                                                            if(selectedState.length>0){
                                                                  queryCondition=and(  where('salary' , '==' , salaryState), 
                                                                  where('isPartime' , '==' , empState)  ,
                                                           where('country' , '==' , selectedState),    
                                                           where('salary' , '==' , salaryState),
                                                           where('haveChild' , '==' , child)   
                                                                    ); 
                                                        
                                                        
                                                                    if(classState.length>0){
                                                                         queryCondition=and(  where('salary' , '==' , salaryState), 
                                                                         where('isPartime' , '==' , empState)  ,
                                                                         where('salary' , '==' , salaryState),
                                                                          where('haveclass' , '==' , classState) ,  
                                                                         where('country' , '==' , selectedState),    
                                                                         where('salary' , '==' , salaryState),
                                                                         where('haveChild' , '==' , child)   
                                                                                  ); 
                                                        
                                                                                  if(expState.length>0){
                                                                                       queryCondition=and(  where('salary' , '==' , salaryState), 
                                                                                       where('isPartime' , '==' , empState)  ,
                                                                                       where('salary' , '==' , salaryState),
                                                                                       where('haveExpireance' , '==' , expState),  
                                                                                       where('salary' , '==' , salaryState),
                                                                                        where('haveclass' , '==' , classState) ,  
                                                                                       where('country' , '==' , selectedState),  
                                                                                where('salary' , '==' , salaryState),
                                                                                where('haveChild' , '==' , child)   
                                                                                         ); 
                                                        
                                                                                         if(language.length>0){
                                                                                              queryCondition=and(  where('salary' , '==' , salaryState), 
                                                                                              where('isPartime' , '==' , empState)  ,
                                                                                              where('salary' , '==' , salaryState),
                                                                                              where('language' , '==' , language) ,
                                                                                              where('salary' , '==' , salaryState),
                                                                                              where('haveExpireance' , '==' , expState), 
                                                                                              where('salary' , '==' , salaryState),
                                                                                               where('haveclass' , '==' , classState) ,  
                                                                                              where('country' , '==' , selectedState),  
                                                                                       where('salary' , '==' , salaryState),
                                                                                       where('haveChild' , '==' , child)   
                                                                                                ); 
                                                        
                                                                                       
                                                        
                                                        
                                                                                                       if(live.length>0 ){
                                                                                                            queryCondition=and(  where('salary' , '==' , salaryState), 
                                                                                                            where('isPartime' , '==' , empState)  ,
                                                                                                            where('salary' , '==' , salaryState),
                                                                                                            where('liveIn' , '==' , live) , 
                                                                                                            where('salary' , '==' , salaryState) ,
                                                                                                            where('salary' , '==' , salaryState),
                                                                                                            where('language' , '==' , language) ,
                                                                                                            where('salary' , '==' , salaryState),
                                                                                                            where('haveExpireance' , '==' , expState), 
                                                                                                            where('salary' , '==' , salaryState),
                                                                                                             where('haveclass' , '==' , classState) ,  
                                                                                                            where('country' , '==' , selectedState),  
                                                                                                     where('salary' , '==' , salaryState),
                                                                                                     where('haveChild' , '==' , child)   
                                                                                                              ); 
                                                        
                                                        
                                                                                                              if(selectedArea.length>0 ){
                                                                                                                   queryCondition=and(  where('salary' , '==' , salaryState), 
                                                                                                                   where('isPartime' , '==' , empState)  ,
                                                                                                                   where('salary' , '==' , salaryState), 
                                                                                                                   where('cityId' , '==' , selectedArea), 
                                                                                                                   where('salary' , '==' , salaryState),
                                                                                                                   where('liveIn' , '==' , live) , 
                                                                                                                   where('salary' , '==' , salaryState) ,
                                                                                                                   where('salary' , '==' , salaryState),
                                                                                                                   where('language' , '==' , language) ,
                                                                                                                   where('salary' , '==' , salaryState),
                                                                                                                   where('haveExpireance' , '==' , expState), 
                                                                                                                   where('salary' , '==' , salaryState),
                                                                                                                    where('haveclass' , '==' , classState) ,  
                                                                                                                   where('country' , '==' , selectedState),  
                                                                                                            where('salary' , '==' , salaryState),
                                                                                                            where('haveChild' , '==' , child)   
                                                                                                                     ); 
                                                        
                                                        
                                                        
                                                        
                                                                                                                   if(religion.length>0 ){
                                                                                                                          queryCondition=and(  where('salary' , '==' , salaryState), 
                                                                                                                          where('isPartime' , '==' , empState)  ,
                                                                                                                          where('salary' , '==' , salaryState),
                                                                                                                          where('religion' , '==' , religion),
                                                                                                                          where('salary' , '==' , salaryState), 
                                                                                                                          where('cityId' , '==' , selectedArea), 
                                                                                                                          where('salary' , '==' , salaryState),
                                                                                                                          where('liveIn' , '==' , live) , 
                                                                                                                          where('salary' , '==' , salaryState) ,
                                                                                                                          where('salary' , '==' , salaryState),
                                                                                                                          where('language' , '==' , language) ,
                                                                                                                          where('salary' , '==' , salaryState),
                                                                                                                          where('haveExpireance' , '==' , expState), 
                                                                                                                          where('salary' , '==' , salaryState),
                                                                                                                           where('haveclass' , '==' , classState) ,  
                                                                                                                          where('country' , '==' , selectedState),  
                                                                                                                   where('salary' , '==' , salaryState),
                                                                                                                   where('haveChild' , '==' , child)   
                                                                                                                            ); 
                                                        
                                                        
                                                        
                                                                                                                          if( serviceState.length>0   ){
                                                                                                                                 queryCondition=and(  where('salary' , '==' , salaryState), 
                                                                                                                                 where('isPartime' , '==' , empState)  ,
                                                                                                                                 where('salary' , '==' , salaryState),
                                                                                                                                 where('workType' , 'array-contains-any' , [  { label: serviceState, value: serviceState }] ),   
                                                                                                                                 where('salary' , '==' , salaryState),
                                                                                                                                 where('religion' , '==' , religion),
                                                                                                                                 where('salary' , '==' , salaryState), 
                                                                                                                                 where('cityId' , '==' , selectedArea), 
                                                                                                                                 where('salary' , '==' , salaryState),
                                                                                                                                 where('liveIn' , '==' , live) , 
                                                                                                                                 where('salary' , '==' , salaryState) ,
                                                                                                                                 where('salary' , '==' , salaryState),
                                                                                                                                 where('language' , '==' , language) ,
                                                                                                                                 where('salary' , '==' , salaryState),
                                                                                                                                 where('haveExpireance' , '==' , expState), 
                                                                                                                                 where('salary' , '==' , salaryState),
                                                                                                                                  where('haveclass' , '==' , classState) ,  
                                                                                                                                 where('country' , '==' , selectedState),  
                                                                                                                          where('salary' , '==' , salaryState),
                                                                                                                          where('haveChild' , '==' , child)   
                                                                                                                                   ); 
                                                        
                                                        
                                                                                                                                  if( age.length>0   ){
                                                                                                                                        queryCondition=and(  where('salary' , '==' , salaryState), 
                                                                                                                                        where('isPartime' , '==' , empState)  ,
                                                                                                                                        where('salary' , '==' , salaryState),
                                                                                                                                        where('age' , '>=' , minimumAge) , where('age' , '<=' , maxAge) ,
                                                                                                                                        where('salary' , '==' , salaryState),
                                                                                                                                        where('workType' , 'array-contains-any' , [  { label: serviceState, value: serviceState }] ),  
                                                                                                                                        where('salary' , '==' , salaryState),
                                                                                                                                        where('religion' , '==' , religion),
                                                                                                                                        where('salary' , '==' , salaryState), 
                                                                                                                                        where('cityId' , '==' , selectedArea), 
                                                                                                                                        where('salary' , '==' , salaryState),
                                                                                                                                        where('liveIn' , '==' , live) , 
                                                                                                                                        where('salary' , '==' , salaryState) ,
                                                                                                                                        where('salary' , '==' , salaryState),
                                                                                                                                        where('language' , '==' , language) ,
                                                                                                                                        where('salary' , '==' , salaryState),
                                                                                                                                        where('haveExpireance' , '==' , expState), 
                                                                                                                                        where('salary' , '==' , salaryState),
                                                                                                                                         where('haveclass' , '==' , classState) ,  
                                                                                                                                        where('country' , '==' , selectedState),  
                                                                                                                                 where('salary' , '==' , salaryState),
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




       else if( live.length>0  ){
                                                               queryCondition=and(  where('salary' , '==' , salaryState),
                                                               where('liveIn' , '==' , live)  );
                                                               
                                                               if(child.length>0){
                                                                  queryCondition=and(  where('salary' , '==' , salaryState),
                                                                  where('liveIn' , '==' , live),
                                                                  where('salary' , '==' , salaryState),
                                                                  where('haveChild' , '==' , child) 
                                                                   ); 
                                                               
                                                                   if(selectedState.length>0){
                                                                         queryCondition=and(  where('salary' , '==' , salaryState),
                                                                         where('liveIn' , '==' , live) ,
                                                                  where('country' , '==' , selectedState),    
                                                                  where('salary' , '==' , salaryState),
                                                                  where('haveChild' , '==' , child)   
                                                                           ); 
                                                               
                                                               
                                                                           if(classState.length>0){
                                                                                queryCondition=and(  where('salary' , '==' , salaryState),
                                                                                where('liveIn' , '==' , live) ,
                                                                                where('salary' , '==' , salaryState),
                                                                                 where('haveclass' , '==' , classState) ,  
                                                                                where('country' , '==' , selectedState),    
                                                                                where('salary' , '==' , salaryState),
                                                                                where('haveChild' , '==' , child)   
                                                                                         ); 
                                                               
                                                                                         if(expState.length>0){
                                                                                              queryCondition=and(  where('salary' , '==' , salaryState),
                                                                                              where('liveIn' , '==' , live) ,
                                                                                              where('salary' , '==' , salaryState),
                                                                                              where('haveExpireance' , '==' , expState),  
                                                                                              where('salary' , '==' , salaryState),
                                                                                               where('haveclass' , '==' , classState) ,  
                                                                                              where('country' , '==' , selectedState),  
                                                                                       where('salary' , '==' , salaryState),
                                                                                       where('haveChild' , '==' , child)   
                                                                                                ); 
                                                               
                                                                                                if(language.length>0){
                                                                                                     queryCondition=and(  where('salary' , '==' , salaryState),
                                                                                                     where('liveIn' , '==' , live) ,
                                                                                                     where('salary' , '==' , salaryState),
                                                                                                     where('language' , '==' , language) ,
                                                                                                     where('salary' , '==' , salaryState),
                                                                                                     where('haveExpireance' , '==' , expState), 
                                                                                                     where('salary' , '==' , salaryState),
                                                                                                      where('haveclass' , '==' , classState) ,  
                                                                                                     where('country' , '==' , selectedState),  
                                                                                              where('salary' , '==' , salaryState),
                                                                                              where('haveChild' , '==' , child)   
                                                                                                       ); 
                                                               
                                                                                                      if(empState.length>0 ){
                                                                                                            queryCondition=and(  where('salary' , '==' , salaryState),
                                                                                                            where('liveIn' , '==' , live) ,
                                                                                                            where('salary' , '==' , salaryState), 
                                                                                                            where('isPartime' , '==' , empState) ,
                                                                                                            where('salary' , '==' , salaryState),
                                                                                                            where('language' , '==' , language) ,
                                                                                                            where('salary' , '==' , salaryState),
                                                                                                            where('haveExpireance' , '==' , expState), 
                                                                                                            where('salary' , '==' , salaryState),
                                                                                                             where('haveclass' , '==' , classState) ,  
                                                                                                            where('country' , '==' , selectedState),  
                                                                                                     where('salary' , '==' , salaryState),
                                                                                                     where('haveChild' , '==' , child)   
                                                                                                              ); 
                                                               
                                                               
                                                                                                           
                                                               
                                                               
                                                                                                                     if(selectedArea.length>0 ){
                                                                                                                          queryCondition=and(  where('salary' , '==' , salaryState),
                                                                                                                          where('liveIn' , '==' , live) ,
                                                                                                                          where('salary' , '==' , salaryState), 
                                                                                                                          where('cityId' , '==' , selectedArea), 
                                                                                                                          where('salary' , '==' , salaryState),
                                                                                                                          where('salary' , '==' , salaryState), 
                                                                                                                          where('isPartime' , '==' , empState) ,
                                                                                                                          where('salary' , '==' , salaryState),
                                                                                                                          where('language' , '==' , language) ,
                                                                                                                          where('salary' , '==' , salaryState),
                                                                                                                          where('haveExpireance' , '==' , expState), 
                                                                                                                          where('salary' , '==' , salaryState),
                                                                                                                           where('haveclass' , '==' , classState) ,  
                                                                                                                          where('country' , '==' , selectedState),  
                                                                                                                   where('salary' , '==' , salaryState),
                                                                                                                   where('haveChild' , '==' , child)   
                                                                                                                            ); 
                                                               
                                                               
                                                               
                                                               
                                                                                                                          if(religion.length>0 ){
                                                                                                                                 queryCondition=and(  where('salary' , '==' , salaryState),
                                                                                                                                 where('liveIn' , '==' , live) ,
                                                                                                                                 where('salary' , '==' , salaryState),
                                                                                                                                 where('religion' , '==' , religion),
                                                                                                                                 where('salary' , '==' , salaryState), 
                                                                                                                                 where('cityId' , '==' , selectedArea), 
                                                                                                                                 where('salary' , '==' , salaryState),
                                                                                                                                 where('salary' , '==' , salaryState), 
                                                                                                                                 where('isPartime' , '==' , empState) ,
                                                                                                                                 where('salary' , '==' , salaryState),
                                                                                                                                 where('language' , '==' , language) ,
                                                                                                                                 where('salary' , '==' , salaryState),
                                                                                                                                 where('haveExpireance' , '==' , expState), 
                                                                                                                                 where('salary' , '==' , salaryState),
                                                                                                                                  where('haveclass' , '==' , classState) ,  
                                                                                                                                 where('country' , '==' , selectedState),  
                                                                                                                          where('salary' , '==' , salaryState),
                                                                                                                          where('haveChild' , '==' , child)   
                                                                                                                                   ); 
                                                               
                                                               
                                                               
                                                                                                                                 if( serviceState.length>0   ){
                                                                                                                                        queryCondition=and(  where('salary' , '==' , salaryState),
                                                                                                                                        where('liveIn' , '==' , live) ,
                                                                                                                                        where('salary' , '==' , salaryState),
                                                                                                                                        where('workType' , 'array-contains-any' , [  { label: serviceState, value: serviceState }] ),   
                                                                                                                                        where('salary' , '==' , salaryState),
                                                                                                                                        where('religion' , '==' , religion),
                                                                                                                                        where('salary' , '==' , salaryState), 
                                                                                                                                        where('cityId' , '==' , selectedArea), 
                                                                                                                                        where('salary' , '==' , salaryState), 
                                                                                                                                        where('salary' , '==' , salaryState), 
                                                                                                                                        where('isPartime' , '==' , empState) ,
                                                                                                                                        where('salary' , '==' , salaryState),
                                                                                                                                        where('language' , '==' , language) ,
                                                                                                                                        where('salary' , '==' , salaryState),
                                                                                                                                        where('haveExpireance' , '==' , expState), 
                                                                                                                                        where('salary' , '==' , salaryState),
                                                                                                                                         where('haveclass' , '==' , classState) ,  
                                                                                                                                        where('country' , '==' , selectedState),  
                                                                                                                                 where('salary' , '==' , salaryState),
                                                                                                                                 where('haveChild' , '==' , child)   
                                                                                                                                          ); 
                                                               
                                                               
                                                                                                                                         if( age.length>0   ){
                                                                                                                                               queryCondition=and(  where('salary' , '==' , salaryState),
                                                                                                                                               where('liveIn' , '==' , live) ,
                                                                                                                                               where('salary' , '==' , salaryState),
                                                                                                                                               where('age' , '>=' , minimumAge) , where('age' , '<=' , maxAge) ,
                                                                                                                                               where('salary' , '==' , salaryState),
                                                                                                                                               where('workType' , 'array-contains-any' , [  { label: serviceState, value: serviceState }] ),  
                                                                                                                                               where('salary' , '==' , salaryState),
                                                                                                                                               where('religion' , '==' , religion),
                                                                                                                                               where('salary' , '==' , salaryState), 
                                                                                                                                               where('cityId' , '==' , selectedArea), 
                                                                                                                                               where('salary' , '==' , salaryState),
                                                                                                                                               where('salary' , '==' , salaryState), 
                                                                                                                                               where('isPartime' , '==' , empState) ,
                                                                                                                                               where('salary' , '==' , salaryState),
                                                                                                                                               where('language' , '==' , language) ,
                                                                                                                                               where('salary' , '==' , salaryState),
                                                                                                                                               where('haveExpireance' , '==' , expState), 
                                                                                                                                               where('salary' , '==' , salaryState),
                                                                                                                                                where('haveclass' , '==' , classState) ,  
                                                                                                                                               where('country' , '==' , selectedState),  
                                                                                                                                        where('salary' , '==' , salaryState),
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

      else if( religion.length>0  ){
                                                                      queryCondition=and(  where('salary' , '==' , salaryState),
                                                                      where('religion' , '==' , religion)  );
                                                                      
                                                                      if(child.length>0){
                                                                         queryCondition=and(  where('salary' , '==' , salaryState),
                                                                         where('religion' , '==' , religion),
                                                                         where('salary' , '==' , salaryState),
                                                                         where('haveChild' , '==' , child) 
                                                                          ); 
                                                                      
                                                                          if(selectedState.length>0){
                                                                                queryCondition=and(  where('salary' , '==' , salaryState),
                                                                                where('religion' , '==' , religion) ,
                                                                         where('country' , '==' , selectedState),    
                                                                         where('salary' , '==' , salaryState),
                                                                         where('haveChild' , '==' , child)   
                                                                                  ); 
                                                                      
                                                                      
                                                                                  if(classState.length>0){
                                                                                       queryCondition=and(  where('salary' , '==' , salaryState),
                                                                                       where('religion' , '==' , religion) ,
                                                                                       where('salary' , '==' , salaryState),
                                                                                        where('haveclass' , '==' , classState) ,  
                                                                                       where('country' , '==' , selectedState),    
                                                                                       where('salary' , '==' , salaryState),
                                                                                       where('haveChild' , '==' , child)   
                                                                                                ); 
                                                                      
                                                                                                if(expState.length>0){
                                                                                                     queryCondition=and(  where('salary' , '==' , salaryState),
                                                                                                     where('religion' , '==' , religion) ,
                                                                                                     where('salary' , '==' , salaryState),
                                                                                                     where('haveExpireance' , '==' , expState),  
                                                                                                     where('salary' , '==' , salaryState),
                                                                                                      where('haveclass' , '==' , classState) ,  
                                                                                                     where('country' , '==' , selectedState),  
                                                                                              where('salary' , '==' , salaryState),
                                                                                              where('haveChild' , '==' , child)   
                                                                                                       ); 
                                                                      
                                                                                                       if(language.length>0){
                                                                                                            queryCondition=and(  where('salary' , '==' , salaryState),
                                                                                                            where('religion' , '==' , religion) ,
                                                                                                            where('salary' , '==' , salaryState),
                                                                                                            where('language' , '==' , language) ,
                                                                                                            where('salary' , '==' , salaryState),
                                                                                                            where('haveExpireance' , '==' , expState), 
                                                                                                            where('salary' , '==' , salaryState),
                                                                                                             where('haveclass' , '==' , classState) ,  
                                                                                                            where('country' , '==' , selectedState),  
                                                                                                     where('salary' , '==' , salaryState),
                                                                                                     where('haveChild' , '==' , child)   
                                                                                                              ); 
                                                                      
                                                                                                             if(empState.length>0 ){
                                                                                                                   queryCondition=and(  where('salary' , '==' , salaryState),
                                                                                                                   where('religion' , '==' , religion) ,
                                                                                                                   where('salary' , '==' , salaryState), 
                                                                                                                   where('isPartime' , '==' , empState) ,
                                                                                                                   where('salary' , '==' , salaryState),
                                                                                                                   where('language' , '==' , language) ,
                                                                                                                   where('salary' , '==' , salaryState),
                                                                                                                   where('haveExpireance' , '==' , expState), 
                                                                                                                   where('salary' , '==' , salaryState),
                                                                                                                    where('haveclass' , '==' , classState) ,  
                                                                                                                   where('country' , '==' , selectedState),  
                                                                                                            where('salary' , '==' , salaryState),
                                                                                                            where('haveChild' , '==' , child)   
                                                                                                                     ); 
                                                                      
                                                                      
                                                                                                                     if(live.length>0 ){
                                                                                                                          queryCondition=and(  where('salary' , '==' , salaryState),
                                                                                                                          where('religion' , '==' , religion) ,
                                                                                                                          where('salary' , '==' , salaryState),
                                                                                                                          where('liveIn' , '==' , live) , 
                                                                                                                          where('salary' , '==' , salaryState), 
                                                                                                                          where('isPartime' , '==' , empState) ,
                                                                                                                          where('salary' , '==' , salaryState),
                                                                                                                          where('language' , '==' , language) ,
                                                                                                                          where('salary' , '==' , salaryState),
                                                                                                                          where('haveExpireance' , '==' , expState), 
                                                                                                                          where('salary' , '==' , salaryState),
                                                                                                                           where('haveclass' , '==' , classState) ,  
                                                                                                                          where('country' , '==' , selectedState),  
                                                                                                                   where('salary' , '==' , salaryState),
                                                                                                                   where('haveChild' , '==' , child)   
                                                                                                                            ); 
                                                                      
                                                                      
                                                                                                                            if(selectedArea.length>0 ){
                                                                                                                                 queryCondition=and(  where('salary' , '==' , salaryState),
                                                                                                                                 where('religion' , '==' , religion) ,
                                                                                                                                 where('salary' , '==' , salaryState), 
                                                                                                                                 where('cityId' , '==' , selectedArea), 
                                                                                                                                 where('salary' , '==' , salaryState),
                                                                                                                                 where('liveIn' , '==' , live) , 
                                                                                                                                 where('salary' , '==' , salaryState), 
                                                                                                                                 where('isPartime' , '==' , empState) ,
                                                                                                                                 where('salary' , '==' , salaryState),
                                                                                                                                 where('language' , '==' , language) ,
                                                                                                                                 where('salary' , '==' , salaryState),
                                                                                                                                 where('haveExpireance' , '==' , expState), 
                                                                                                                                 where('salary' , '==' , salaryState),
                                                                                                                                  where('haveclass' , '==' , classState) ,  
                                                                                                                                 where('country' , '==' , selectedState),  
                                                                                                                          where('salary' , '==' , salaryState),
                                                                                                                          where('haveChild' , '==' , child)   
                                                                                                                                   ); 
                                                                      
                                                                      
                                                                      
                                                                      
                                                                                                                           
                                                                      
                                                                      
                                                                      
                                                                                                                                        if( serviceState.length>0   ){
                                                                                                                                               queryCondition=and(  where('salary' , '==' , salaryState),
                                                                                                                                               where('religion' , '==' , religion) ,
                                                                                                                                               where('salary' , '==' , salaryState),
                                                                                                                                               where('workType' , 'array-contains-any' , [  { label: serviceState, value: serviceState }] ),   
                                                                                                                                               where('salary' , '==' , salaryState),
                                                                                                                                               where('salary' , '==' , salaryState), 
                                                                                                                                               where('cityId' , '==' , selectedArea), 
                                                                                                                                               where('salary' , '==' , salaryState),
                                                                                                                                               where('liveIn' , '==' , live) , 
                                                                                                                                               where('salary' , '==' , salaryState), 
                                                                                                                                               where('isPartime' , '==' , empState) ,
                                                                                                                                               where('salary' , '==' , salaryState),
                                                                                                                                               where('language' , '==' , language) ,
                                                                                                                                               where('salary' , '==' , salaryState),
                                                                                                                                               where('haveExpireance' , '==' , expState), 
                                                                                                                                               where('salary' , '==' , salaryState),
                                                                                                                                                where('haveclass' , '==' , classState) ,  
                                                                                                                                               where('country' , '==' , selectedState),  
                                                                                                                                        where('salary' , '==' , salaryState),
                                                                                                                                        where('haveChild' , '==' , child)   
                                                                                                                                                 ); 
                                                                      
                                                                      
                                                                                                                                                if( age.length>0   ){
                                                                                                                                                      queryCondition=and(  where('salary' , '==' , salaryState),
                                                                                                                                                      where('religion' , '==' , religion) ,
                                                                                                                                                      where('salary' , '==' , salaryState),
                                                                                                                                                      where('age' , '>=' , minimumAge) , where('age' , '<=' , maxAge) ,
                                                                                                                                                      where('salary' , '==' , salaryState),
                                                                                                                                                      where('workType' , 'array-contains-any' , [  { label: serviceState, value: serviceState }] ),  
                                                                                                                                                      where('salary' , '==' , salaryState),
                                                                                                                                                      where('salary' , '==' , salaryState), 
                                                                                                                                                      where('cityId' , '==' , selectedArea), 
                                                                                                                                                      where('salary' , '==' , salaryState),
                                                                                                                                                      where('liveIn' , '==' , live) , 
                                                                                                                                                      where('salary' , '==' , salaryState), 
                                                                                                                                                      where('isPartime' , '==' , empState) ,
                                                                                                                                                      where('salary' , '==' , salaryState),
                                                                                                                                                      where('language' , '==' , language) ,
                                                                                                                                                      where('salary' , '==' , salaryState),
                                                                                                                                                      where('haveExpireance' , '==' , expState), 
                                                                                                                                                      where('salary' , '==' , salaryState),
                                                                                                                                                       where('haveclass' , '==' , classState) ,  
                                                                                                                                                      where('country' , '==' , selectedState),  
                                                                                                                                               where('salary' , '==' , salaryState),
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







