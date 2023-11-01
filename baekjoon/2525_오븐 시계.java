import java.io.*;
import java.util.*;

class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
        int A = Integer.parseInt(st.nextToken());
        int B = Integer.parseInt(st.nextToken());
        int C = Integer.parseInt(br.readLine());
        if (B + (C % 60) >= 60) {  
            B = B + (C % 60) - 60;
            A = A + (C / 60) + 1;
        }
        else if (B + (C % 60) < 60) {
            A = A + (C / 60);
            B = B + (C % 60);
        }
        if (A >= 24)
            A = A - 24;
        bw.write(String.valueOf(A));
        bw.write(" ");
        bw.write(String.valueOf(B));
        bw.close();
    }
}