#include <stdio.h>
#include <string.h>

int main() {
    int T;
    scanf("%d", &T);
    char input[51];
    
    for (int i = 0; i < T; i++)
    {
        int count = 0;
        int flag = 0;
        scanf("%s", input);
        for (int j = 0; j < strlen(input); j++)
        {   
            if (input[j] == '(' && count <= 0)
                count--;
            else if (input[j] == ')' && count < 0)
                count++;
            else
            {
                printf("NO");
                flag = 1;
                break;
            }
        }
        if (flag == 0 && count == 0)
            printf("YES");
        else if (flag == 0 && count != 0)
            printf("NO");
        if (i != T-1)
            printf("\n");
    }
    return 0;
}