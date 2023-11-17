import java.io.*;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
        int[] arr = new int[1001];
        int count = 0;
        for (int i = 0; i < 10; i++) {
            int n = Integer.parseInt(br.readLine());
            n = n % 42;
            arr[n] = 1;
        }
        for (int i = 0; i < 1001; i++) {
            if (arr[i] == 1)
                count++;
        }
        bw.write(count + "");
        bw.close();
    }
}