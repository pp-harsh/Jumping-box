function isTouching(OBJECT1, OBJECT2)
{
  if (OBJECT1.x - OBJECT2.x < OBJECT1.width/2 + OBJECT2.width/2  && 
    OBJECT2.x - OBJECT1.x < OBJECT1.width/2 + OBJECT2.width/2 &&
     OBJECT1.y - OBJECT2.y < OBJECT1.height/2 + OBJECT2.height/2  
      && OBJECT2.y - OBJECT1.y < OBJECT1.height/2 + OBJECT2.height/2 )
  {  
return true;
  }
  else 
  {
    return false;
  }

}