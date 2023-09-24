#include <stdio.h>

int fibonacci(int n)
{
    if (n == 0)
        return (0);
    if (n == 1)
        return (1);
    if (n >= 2)
        return (fibonacci(n-1)+ fibonacci(n-2));
}

int main()
{
    int n, result;
    scanf("%d", &n);
    result = fibonacci(n);
    printf("%d", result);
    return 0;
}