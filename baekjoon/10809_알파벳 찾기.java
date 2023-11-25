import java.io.*;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
        String number = br.readLine();
        char[] alphabet = {'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'};
        int result = 0;
        for (int i = 0; i < 26; i++) {
            for  (int j = 0; j < number.length(); j++) {
                if (alphabet[i] == number.charAt(j)) {   
                    bw.write(j + " ");
                    break;
                }
                else if (j == number.length()-1)
                    bw.write("-1 ");
            }
        }
        bw.close();
    }
}