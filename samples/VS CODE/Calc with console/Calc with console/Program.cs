
static void Main(string[] args)
{   //www.csharp-console-examples.com
    for (int i = 1; i <= 10; i++)
    {
        for (int j = 0; j <= 10; j++)
        {
            Console.WriteLine("{0}x{1} = {2}", i, j, i * j);
        }
        Console.WriteLine("====================");
    }
    Console.ReadKey();
}