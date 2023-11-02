import java.io.*;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
        int N = Integer.parseInt(br.readLine());
        int check = 1;
        int result = 0;
        for(int i = 0; i < N; i++) {
            check = check + (i * 6);
            if (N <= check) {   
                result = i + 1;
                bw.write("" + result);
                break;
            }
        }
        bw.close();
    }
}