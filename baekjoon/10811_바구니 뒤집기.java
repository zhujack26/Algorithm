import java.io.*;
import java.util.*;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
        StringTokenizer st = new StringTokenizer(br.readLine());
        int N = Integer.parseInt(st.nextToken());
        int M = Integer.parseInt(st.nextToken());
        int[] arr = new int[N+1];
        for (int k = 1; k <= N; k++)
            arr[k] = k;
        for (int k = 0; k < M; k++) {
            st = new StringTokenizer(br.readLine());
            int i = Integer.parseInt(st.nextToken());
            int j = Integer.parseInt(st.nextToken());
            int temp = 0;
            for (int h = 0; i < j-h; h++) {
                temp = arr[i];
                arr[i] = arr[j-h];
                arr[j-h] = temp;
                i++;
            }
        }
        for (int k = 1; k <= N; k++)  
                bw.write(arr[k] + " ");
        bw.close();
    }
}