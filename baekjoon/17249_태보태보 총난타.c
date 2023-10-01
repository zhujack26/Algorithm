#include <stdio.h>

int main() 
{
    char *TaeBo;
    int left = 0;
    int right = 0;
    int i = 0;
    int flag = 0;
    
    scanf("%s", TaeBo);
    while (TaeBo[i])
    {
        if (flag == 0 && TaeBo[i] == '@')
            left++;
        if (flag == 1 && TaeBo[i] == '@')
            right++;
        if (TaeBo[i] == '(')
            flag = 1;
        i++;
    }
    printf("%d %d", left, right);
    return 0;
}