import java.io.*;
import java.util.*;

class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
        int H = Integer.parseInt(st.nextToken());
        int M = Integer.parseInt(st.nextToken());
        if (M < 45) {
            M = 60 - (45 - M);
            if (H == 0)
                H = 23;
            else if (H != 0)
                H--;
        }
        else if (M >= 45)
            M = M - 45;
        bw.write(String.valueOf(H));
        bw.write(" ");
        bw.write(String.valueOf(M));
        bw.close();
    }
}