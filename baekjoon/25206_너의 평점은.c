#include <stdio.h>

int main() 
{
    char subject[51];
    float num;
    float result = 0;
    float num_sum = 0;
    char score_c[3];
    char score_board[9][3] = {"A+", "A0", "B+", "B0", "C+", "C0", "D+", "D0", "F"};
    float score_board_num[9] = {4.5, 4.0, 3.5, 3.0, 2.5, 2.0, 1.5, 1.0, 0.0};

    for(int i = 0; i < 20; i++)
    {
        float score_n;
        scanf("%s %f %s", subject, &num, score_c);
        for (int j = 0; j < 9; j++)
        {
            if (score_c[0] == score_board[j][0] && score_c[1] == score_board[j][1])
            {
                score_n = score_board_num[j];
                result = result + (num * score_n); //(학점 × 과목평점)의 합
                num_sum = num_sum + num; //학점의 합
                break;
            }
        }
    }
    result = result / num_sum;
    printf("%f", result);
    return 0;
}