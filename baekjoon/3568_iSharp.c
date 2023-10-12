#include <stdio.h>
#include <string.h>

int main() 
{
    char input[121];
    char head[121];
    int head_flag = 0;
    int i = 0;
    int flag = 0;
    char alphabet[121];
    //char alphabet[121] = {0}; 마음 편하게 이런식으로 써주면 틀릴 일 없을듯 싶다.
    
    fgets(input, sizeof(input), stdin);
    while(input[i])
    {
        if (input[i] != ' ' && head_flag == 0)
            head[i] = input[i];
            head[i+1] = '\0'; //input[i]가 null 전까지를 명시하므로 이 라인을 추가해야 안틀리나??
        if(input[i] == ' ')
        {
            head_flag = 1;
            for(int j = 0; head[j]; j++)
                printf("%c", head[j]);
            i++;
            int k = 0;
            while(input[i] != ' ')
            {
                if ((('A' <= input[i]) && (input[i] <= 'Z')) || (('a' <= input[i]) && (input[i] <= 'z')))
                {
                    alphabet[k] = input[i];
                    alphabet[k+1] = '\0';
                    k++;
                }
                if (input[i] == ',')
                {
                    int h = i-1;
                    while(input[h] != ' ')
                    {
                        if (input[h] == '*' || input[h] =='&')
                            printf("%c", input[h]);
                        if (input[h] == ']')
                        {
                            printf("[]");
                            h--;
                        }
                        h--;
                    }       
                    printf(" ");
                    for (int l = 0; alphabet[l]; l++)
                        printf("%c", alphabet[l]);
                    printf(";\n");
                    break;
                }
                if (input[i] == ';')
                {
                    int h = i-1;
                    while(input[h] != ' ')
                    {
                        if (input[h] == '*' || input[h] =='&')
                            printf("%c", input[h]);
                        if (input[h] == ']')
                        {
                            printf("[]");
                            h--;
                        }
                        h--;
                    }       
                    printf(" ");
                    for (int l = 0; alphabet[l]; l++)
                        printf("%c", alphabet[l]);
                    printf(";");
                    flag = 1;
                    break;
                }
                i++;
            }
            if (flag)
                break;
        }
        i++;
    }
    return 0;
}