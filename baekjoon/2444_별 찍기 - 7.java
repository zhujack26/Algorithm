import java.io.*;
import java.util.*;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
        int N = Integer.parseInt(br.readLine());
        int NN = N * 2 - 1;
        String [][] arr = new String[NN][NN];
        
        for (int i = 0; i < NN; i++) {
            for (int j = 0; j < NN; j++)
                arr[i][j] = "*";
        }
        
        for (int i = 0; i < N-1; i++) {  //2사분면
            for (int j = 0; j < N-1-i; j++)
                arr[i][j] = " ";
        }

        for (int i = 0; i < N-1; i++) { //1사분
            for (int j = N+i; j < NN; j++)
                arr[i][j] = " ";
        }

        for (int i = N; i < NN; i++) { //3사분면
            for (int j = 0; j < i-N+1; j++)
                arr[i][j] = " ";
        }

        for (int i = N; i < NN; i++) { //4사분면
            for (int j = NN-1; j >= NN-i+N-1; j--)
                arr[i][j] = " ";
        }
        
        for (int i = 0; i < NN; i++) {
            for (int j = 0; j < NN; j++) {   
                if (j <= N)
                    bw.write(arr[i][j]);
                else if (j > N)
                    bw.write(arr[i][j].trim()); //공백 제거
            }
            if (i != NN - 1)
                bw.write("\n");
        }
        bw.close();
    }
}