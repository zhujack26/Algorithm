#include <stdio.h>

int main() 
{
    char input[101];
    int count =0;
    int i = 0;
    scanf("%s", input);
    while(input[i])
    {
        if (input[i] == 'c' && input[i+1] == '=')
            i = i+1;
        if(input[i] == 'c' && input[i+1] == '-')
            i = i+1;
        if(input[i] == 'd' && input[i+1] == 'z' && input[i+2] == '=')
            i = i+2;
        if(input[i] == 'd' && input[i+1] == '-')
            i = i+1;
        if(input[i] == 'l' && input[i+1] == 'j')
            i = i+1;
        if(input[i] == 'n' && input[i+1] == 'j')
            i = i+1;
        if(input[i] == 's' && input[i+1] == '=')
            i = i+1;
        if(input[i] == 'z' && input[i+1] == '=')
            i = i+1;
        count++;
        i++;
    }
    printf("%d", count);
    return 0;
}