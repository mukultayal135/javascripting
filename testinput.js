function isPrime(num) {
    var sqrtnum=Math.floor(Math.sqrt(num));
      var prime = num != 1;
      for(var i=2; i<sqrtnum+1; i++) { // sqrtnum+1
          if(num % i == 0) {
              prime = false;
              break;
          }
      }
      return prime;
  }
  function isarmstrong(n)
  {
    let arm=0,a,b,c,d;
    temp=n;
    while(temp>0)
    {
        a=temp%10;
        temp=parseInt(temp/10); // convert float into Integer
        arm=arm+a*a*a;
    }
    if(arm==n)
    {
        return true;
    }
    else
    {
        return false
    }
  }

  console.log(isPrime(2)&&isarmstrong(2))