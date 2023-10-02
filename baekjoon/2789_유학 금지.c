#include <stdio.h>

int main() 
{
    char target[100];
    char CAMBRIDGE[10] = "CAMBRIDGE";
    int i = 0;

    scanf("%s", target);
    while (target[i])
    {
        int j = 0;
        while (CAMBRIDGE[j])
        {
            if (CAMBRIDGE[j] == target[i] )
                break;
            j++;
        }
        if (j == 9)
            printf("%c", target[i]);
        i++;
    }
    return 0;
}