#include <stdio.h>

int main() 
{
    int K, input;
    scanf("%d", &K);
    int stack[100000];
    int count = 0;
    for (int i = 0; i < K; i++)
    {
        scanf("%d", &input);
        if (input != 0)
        {
            stack[count] = input;
            count++;
        }
        else if (input == 0)
        {
            count--;
            stack[count] = '\0';
        }
    }
    int result = 0;
    for (int i = 0; i < count; i++)
        result = result + stack[i];
    printf("%d", result);
    return 0;
}