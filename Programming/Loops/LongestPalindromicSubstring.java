public class LongestPalindromicSubstring {

    // Helper function to expand around the center
    private static String expandAroundCenter(String s, int left, int right) {
        while (left >= 0 && right < s.length() && s.charAt(left) == s.charAt(right)) {
            left--;
            right++;
        }
        // Return the longest palindromic substring found from the center
        return s.substring(left + 1, right);
    }

    public static String longestPalindrome(String s) {
        if (s == null || s.length() < 1) {
            return "";
        }

        String longest = "";
        for (int i = 0; i < s.length(); i++) {
            // Check for odd-length palindromes (one center)
            String oddPalindrome = expandAroundCenter(s, i, i);
            // Check for even-length palindromes (two centers)
            String evenPalindrome = expandAroundCenter(s, i, i + 1);

            // Update the longest palindrome found so far
            if (oddPalindrome.length() > longest.length()) {
                longest = oddPalindrome;
            }
            if (evenPalindrome.length() > longest.length()) {
                longest = evenPalindrome;
            }
        }

        return longest;
    }

    public static void main(String[] args) {
        String input = "babad";
        String result = longestPalindrome(input);
        System.out.println("Longest Palindromic Substring: " + result);
        // Output: "bab" or "aba"
    }
}
