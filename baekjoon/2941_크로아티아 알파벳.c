#include <stdio.h>

int main() 
{
    char target[100];
    int i = 0;

    scanf("%s", target);
    while (target[i])
    {
        if (target[i] == 'c')
        {
            if(target[i] == '=')
                count++;
            else if(target[i] == '-')
                count++;
        }
        if (target[i] == 'd')
        {
            if(target[i] == 'z')
                if(target[i] == '=')
                    count++;
            if(target[i] == '-')
                count++;
        }
        if (target[i] == 'l')
        {
            if(target[i] == '=')
                count++;
        }
        if (target[i] == 'n')
        {
            if(target[i] == '=')
                count++;
        }
        if (target[i] == 's')
        {
            if(target[i] == '=')
                count++;
        }
        if (target[i] == 'z')
        {
            if(target[i] == '=')
                count++;
        }
        i++;
    }
    return 0;
}