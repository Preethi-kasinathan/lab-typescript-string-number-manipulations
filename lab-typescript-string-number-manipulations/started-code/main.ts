import
{
    StringManipulationService,
    NumberManipulationService,
}from "./main-service";
    class StringManipulation implements StringManipulationService
{
    print(word: String): void
        {
         console.log(word);
            console.log(word.toUpperCase());
            console.log(word.toLowerCase());
            console.log(word.charAt(0));
            console.log(word.concat('  FacePrepPrograd'));
           console.log(word.slice(0, 4));
           console.log(word.length);
       }
       printWithSpace(sentence: String): void
       {
        console.log(sentence.split("").join(" "));
       }  
       findVowel(str: String): void
          {
              console.log(str.replace(/[^aeiouAEIOU]/gi,"").length);
          }
          let string = new StringManipulation();
          string.print('HelloProGrads');
          string.printWithSpace('HelloProGrads');
          string.findVowel('HelloProGrads');
          class NumberManipulation implements NumberManipulationService
          {
            findPrime(num: number): void
            {
                console.log(num)
                if(num%2 == 0)
                {
                    console.log(num+" NOT A PRIME");
                }
                else
                {
                    console.log(num+"PRIME");
                }
            }
            findMagic(num: number): void
        {
             console.log(num);
               if(num%9 == 1)
               {
                   console.log(num+"MAGIU NUMBER");
               }
              else
               {
                   console.log(num+" NOT A MAGIC NUMBER");
               }
        }
        let num1 = new NumberManipulation();
            num1.findPrime(58);
            num1.findMagic(25);
          

