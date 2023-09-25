#include <stdio.h>

int main()
{
    //일단 다 더하고, 9개 중 임의 2개의 합이 초과한 숫자만큼이면 범인
    int location[9];
    int i = 0;
    int flag = 0;
    int buf = 0;
    int j, dwarf, temp;
    
    while (i < 9)
    {
        scanf("%d\n", &dwarf);
        location[i] = dwarf;
        buf = buf + location[i];
        i++;
    }
    buf = buf - 100;
    i = 0;
    while (i < 8)
    {
        j = 1;
        while (i + j < 9)
        {
            if(location[i] + location[i+j] == buf)
            {
                location[i] = 0;
                location[i+j] = 0;
                flag = 1;
                break;
            }
            j++;
        }
        i++;
        if (flag == 1)
            break;
    }
    i = 0;   
    while (i < 8)
    {
        j = 0;
        while (j < 8 - i)
        {
            if (location[j] > location[j+1])
            {
                temp = location[j];
                location[j] = location[j+1];
                location[j+1] = temp;
            }
            j++;
        }
        i++;
    }
    printf("%d\n%d\n%d\n%d\n%d\n%d\n%d", location[2], location[3], location[4], location[5], location[6], location[7], location[8]);
    return 0;
}