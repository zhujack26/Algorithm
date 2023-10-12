#include <stdio.h>
#include <string.h>

int main() 
{
    char n[11];
    int s;
    char array[23][120];
    scanf("%d %s", &s, n);
    int row = 2*s+3;
    int col = s+2;
    int len = strlen(n);
    int i = 0;
    while(i < len)
    {
        for(int j = 0; j < row; j++)
            {
            for (int k = 0; k < col; k++) 
                array[j][i*col+k] = ' ';  //1. i가 순회하면서 모두 공란 처리
            }
        if (n[i] == '1')
        {
            for(int j = 0; array[j][col-1]; j++) 
                array[j][i*col+col-1] = '|';    //2. '1'을 만나면 한쪽 세로줄 전부 |로 바꿔주기
            array[0][i*col+col-1] = ' ';
            array[row-col][i*col+col-1] = ' '; 
            array[row-1][i*col+col-1] = ' '; //3. 원하는 가로줄 다시 공란 처리
            for(int j = 0; j < row; j++)
            {
            for (int k = 0; k < col; k++) 
                printf("%c", array[j][i*col+k]);//4. 순회한거 출력하기
            if (j < row-1)
                printf("\n");
            }
        }

        /*
        if (char[i] == '2')
        {
            for(int j = 0; array[col-1][j]; j++) 
                array[j][col-1] = '|';
            for(int j = 0; array[col-1][j]; j++) 
                array[j][col-1] = '|';
            array[0][i*col+col-1] = ' ';
            array[row-col][i*col+col-1] = ' '; 
            array[row][i*col+col-1] = ' ';
        }
        */
        
        i++;
    }
    return 0;
}