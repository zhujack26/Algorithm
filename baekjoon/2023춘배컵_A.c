#include <stdio.h>

int main() 
{
    char input;
    for(int i = 0; i < 15; i++)
    {
        for(int j = 0; j < 15; j++)
        {   
            scanf("%s", &input);
            if (input == 'w')
            {    
                printf("chunbae");
                return 0;
            }
            else if (input == 'b')
            {
                printf("nabi");
                return 0;
            }
            else if (input == 'g')
            {   
                printf("yeongcheol");
                return 0;
            }
        }
    }
}

//scanf("%c", &input) 을 사용하면 공백을 포함하여 모든 문자를 읽으므로 조심