#include <stdio.h>

int f[40];
int n;

int fibonacci(int n) 
{
    int count = 0;
    f[1] = 1;
    f[2] = 1;
    for(int i = 3; i <= n; i++)
    {
        f[i] = f[i - 1] + f[i - 2];
        count++;
    }
    return count;
}

int fib(int n) 
{
    int count = 0;
    if (n == 1 || n == 2)
        return(1);
    else
        return(fib(n - 1) + fib(n - 2));
}

int main()
{
    scanf("%d", &n);   
    printf("%d %d", fib(n), fibonacci(n));
}