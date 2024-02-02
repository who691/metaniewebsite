const queryCondition = salaryState.length > 0
  ? where('salary', '==', salaryState)
  : null;

queryCondition = child.length > 0
  ? and(queryCondition, where('haveChild', '==', child) ,)
  : queryCondition;

queryCondition = age.length > 0
  ? and(queryCondition,   where('age' , '>=' , minimumAge) , where('age' , '<=' , maxAge) ,)
  : queryCondition;
queryCondition = serviceState.length > 0
  ? and(queryCondition,  where('workType' , 'array-contains-any' , [  { label: serviceState, value: serviceState }] ),   )
  : queryCondition;
queryCondition = selectedArea.length > 0
  ? and(queryCondition, where('cityId' , '==' , selectedArea),)
  : queryCondition;
queryCondition = selectedState.length > 0
  ? and(queryCondition, where('country' , '==' , selectedState),  )
  : queryCondition;
queryCondition = classState.length > 0
  ? and(queryCondition,  where('haveclass' , '==' , classState),)
  : queryCondition;
queryCondition = expState.length > 0
  ? and(queryCondition,   where('haveExpireance' , '==' , expState),)
  : queryCondition;
queryCondition =  language.length > 0
  ? and(queryCondition, where('language' , '==' , language) ,)
  : queryCondition;
queryCondition = empState.length > 0
  ? and(queryCondition, where('isPartime' , '==' , empState) ,)
  : queryCondition;
queryCondition = live.length > 0
  ? and(queryCondition,  where('liveIn' , '==' , live) , )
  : queryCondition;
queryCondition = religion.length > 0
  ? and(queryCondition, where('religion' , '==' , religion),)
  : queryCondition;


  and( where('age' , '>=' , minimumAge) , where('age' , '<=' , maxAge) ,
   where('workType' , 'array-contains-any' , [  { label: serviceState, value: serviceState }] ) ,
  where('salary', '==', salaryState) ,where('haveChild', '==', child) , where('cityId' , '==' , selectedArea) ,
  where('country' , '==' , selectedState)  ,where('haveclass' , '==' , classState) , where('haveExpireance' , '==' , expState) ,
  where('language' , '==' , language) ,  where('isPartime' , '==' , empState) , where('liveIn' , '==' , live) ,
  where('religion' , '==' , religion)
     )


     let queryCondition = null;

switch (true) {
  case salaryState.length > 0:
    queryCondition = where('salary', '==', salaryState);
    break;
  case child.length > 0:
    queryCondition = where('haveChild', '==', child);
    break;
 
}

const conditions = [];

if (salaryState.length > 0) {
  conditions.push(where('salary', '==', salaryState));
}
if (child.length > 0) {
  conditions.push(where('haveChild', '==', child));
}
// ... other conditions

const queryCondition = conditions.length > 0
  ? and(...conditions)
  : null;




  const filters = {
    salary: salaryState,
    child: child,
    // ... other filters
  };
  
  const queryCondition = Object.entries(filters)
    .filter(([field, value]) => value.length > 0)
    .map(([field, value]) => where(field, '==', value))
    .reduce((acc, condition) => and(acc, condition), null);


    let queryCondition ;
    queryCondition = salaryState.length > 0
   ? ( where('salary', '==', salaryState) )
   : null;

   console.log(queryCondition)
 
 queryCondition = child.length > 0
   ? and(queryCondition, where('haveChild', '==', child) )
   : queryCondition;
 
 queryCondition = age.length > 0
   ? and( queryCondition,  where('age' , '>=' , minimumAge) , where('age' , '<=' , maxAge) )
   : queryCondition;
 queryCondition = serviceState.length > 0
   ? and(queryCondition,  where('workType' , 'array-contains-any' , [  { label: serviceState, value: serviceState }] )   )
   : queryCondition;
 queryCondition = selectedArea.length > 0
   ? and(queryCondition, where('cityId' , '==' , selectedArea))
   : queryCondition;
 queryCondition = selectedState.length > 0
   ? and(queryCondition, where('country' , '==' , selectedState)  )
   : queryCondition;
 queryCondition = classState.length > 0
   ? and(queryCondition,  where('haveclass' , '==' , classState))
   : queryCondition;
 queryCondition = expState.length > 0
   ? and(queryCondition,   where('haveExpireance' , '==' , expState))
   : queryCondition;
 queryCondition =  language.length > 0
   ? and(queryCondition, where('language' , '==' , language) )
   : queryCondition;
 queryCondition = empState.length > 0
   ? and(queryCondition, where('isPartime' , '==' , empState) )
   : queryCondition;
 queryCondition = live.length > 0
   ? and(queryCondition,  where('liveIn' , '==' , live)  )
   : queryCondition;
 queryCondition = religion.length > 0
   ? and(queryCondition, where('religion' , '==' , religion))
   : queryCondition;

    const q=query(refDatabase, queryCondition );