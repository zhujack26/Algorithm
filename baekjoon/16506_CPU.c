#include <stdio.h>
#include <string.h>

int main() 
{
    int N;
    int result[16];
    scanf("%d", &N);
    while(N > 0)
    {
        char opcode[7];
        int rD, rA, rB;
        int opcode_tr = 0;
        int i = 0;
        scanf("%s %d %d %d", opcode, &rD, &rA, &rB);
        int len = strlen(opcode);
        while (i <= 15)
        {
            result[i] = 0;
            i++;
        }
        if (opcode[0] == 'A' && opcode[1] == 'D')
            opcode_tr = 0;
        if (opcode[0] == 'S')
            opcode_tr = 1;
        if (opcode[0] == 'M' && opcode[1] == 'O')
            opcode_tr = 2;
        if (opcode[0] == 'A' && opcode[1] == 'N')
            opcode_tr = 3;
        if (opcode[0] == 'O')
            opcode_tr = 4;
        if (opcode[0] == 'N')
            opcode_tr = 5;
        if (opcode[0] == 'M' && opcode[1] == 'U')
            opcode_tr = 6;
        if (opcode[0] == 'L'&& opcode[4]== 'L')
            opcode_tr = 7;
        if (opcode[0] == 'L' && opcode[4]== 'R')
            opcode_tr = 8;
        if (opcode[0] == 'A' && opcode[1] == 'S')
            opcode_tr = 9;
        if (opcode[0] == 'R' && opcode[1] == 'L')
            opcode_tr = 10;
        if (opcode[0] == 'R' && opcode[1] == 'R')
            opcode_tr = 11;
        if (opcode[len-1] == 'C')
            result[4] = 1;
        
        result[3] = opcode_tr % 2;
        result[2] = (opcode_tr/2) % 2;
        result[1] = ((opcode_tr/2)/2) % 2;
        result[0] = (((opcode_tr/2)/2)/2) % 2;
        result[8] = rD % 2;
        result[7] = (rD/2) % 2;
        result[6] = ((rD/2)/2) % 2;
        result[11] = rA % 2;
        result[10] = (rA/2) % 2;
        result[9] = ((rA/2)/2) % 2;
        if (result[4] == 0)
        {
            result[14] = rB % 2;
            result[13] = (rB/2) % 2;
            result[12] = ((rB/2)/2) % 2;
        }
        if (result[4] == 1)
        {
            result[15] = rB % 2;
            result[14] = (rB/2) % 2;
            result[13] = ((rB/2)/2) % 2;
            result[12] = (((rB/2)/2)/2) % 2;
        }
        i = 0;
        while(i <= 15)
        {
            printf("%d", result[i]);
            i++;
        }
        if (N > 1)
            printf("\n");
        N--;
    }
    return 0;
}