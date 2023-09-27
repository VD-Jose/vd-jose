using System;
namespace CalculatorCsharp
{
    public class Program
    {
        static void Main(string[] args)
        {
            int firstNumber, secondNumber;
            float result;
            string choice;
            string value;
            do
            {
                Console.WriteLine("add. Addition OPERATION(+).");
                Console.WriteLine("sub. Subtract OPERATION(-).");
                Console.WriteLine("mul. Multiply OPERATION(*).");
                Console.WriteLine("div. Divide OPERATION(/).");
                Console.WriteLine("\nENTER YOUR FIRST NUMBER:- ");
                firstNumber = Convert.ToInt32(Console.ReadLine());
                Console.WriteLine("ENTER YOUR SECOND NUMBER:- ");
                secondNumber = Convert.ToInt32(Console.ReadLine());
                Console.WriteLine("\nENTER YOUR CHOICE (add, sub, mul, div):- ");         
                choice = Console.ReadLine();
                switch (choice)
                { 
                    case "add":
                        result = firstNumber + secondNumber;
                        Console.WriteLine("Result Is :- " + result);
                        break;
                   
                    case "sub":
                        result = firstNumber - secondNumber;
                        Console.WriteLine("Result Is :- " + result);
                        break;
                    case "mul":
                        result = 0;
                        for (int i = 1; i <= secondNumber; i++)
                        {
                            result += firstNumber;
                        }
                        Console.WriteLine(result);
                        Console.WriteLine("Result Is :- " + result);
                        break;
                    case "div":
                        result = firstNumber / secondNumber;
                        Console.WriteLine("Result Is :- " + result);
                        break;
                }
                Console.Write("Do you want to continue(y/n):");
                value = Console.ReadLine();
            }
            while (value == "y" || value == "Y");
          }
    }
}
