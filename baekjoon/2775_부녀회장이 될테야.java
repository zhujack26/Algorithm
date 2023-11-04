import java.io.*;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
        int T = Integer.parseInt(br.readLine());
        int[][] appart = new int[15][14];
        
        /* 구하기 위해 시도한 풀이
        for (int j = 1; j < 14; j++)
            appart[1][j] =  appart[0][j] + appart[1][j-1];
        
        for (int j = 1; j < 14; j++)
            appart[2][j] = appart[1][j] + appart[2][j-1];*/
        
        for (int i = 0; i < 15; i++)
            appart[i][0] = 1;
        for (int j = 0; j < 14; j++)
            appart[0][j] = j + 1;

        for (int i = 1; i < 15; i++) {   
            for (int j = 1; j < 14; j++)
                appart[i][j] = appart[i-1][j] + appart[i][j-1];
        }
        for (int i = 0; i < T; i++) {
            int k = Integer.parseInt(br.readLine()); //0층부터 이므로 그대로
            int n = Integer.parseInt(br.readLine()); //1호부터 이므로 출력할 때는 인덱스-1
            bw.write("" + appart[k][n-1]);
            if (i < T-1) 
                bw.write("\n");
        }
        bw.close();
    }
}