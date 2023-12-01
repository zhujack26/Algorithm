import java.io.*;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
        String number = br.readLine();
        for (int i = number.length()-1; i >= 0; i--) {
            if (number.charAt(i) != number.charAt(number.length()-1-i)) {
                bw.write("0");
                break;
            }
            if (i == 0)
                bw.write("1");
        }
        bw.close();
    }
}