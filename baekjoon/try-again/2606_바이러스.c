#include <stdio.h>

int main() 
{
    int virus[100];
    int computer, num, one, two;
    scanf("%d", &computer);
    scanf("%d", &num);
    int i = 1;
    virus[0] = 1;
    while(i <= num)
    {
        scanf("%d %d", &one, &two);
        int j = 0;
        while (virus[j])
        {
            if (one == virus[j])
            {
                virus[i] = two;
                break;
            }
            else if (two == virus[j])
            {
                virus[i] = one;
                break;
            }
            j++;
        }
        i++;
    }
    int count = 0;
    while(computer > 0)
    {
        i = 0;
        while(virus[i])
        {
            if(computer == virus[i])
            {
                count++;
                break;
            }
            i++;
        }
        computer--;
    }
    printf("%d", count-1);
    return 0;
}