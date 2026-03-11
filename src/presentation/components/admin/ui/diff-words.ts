export interface DiffSegment {
  type: "equal" | "added" | "removed";
  value: string;
}

/**
 * Simple word-level diff using LCS (Longest Common Subsequence).
 * Compares two strings word-by-word and returns segments.
 */
export function diffWords(oldText: string, newText: string): DiffSegment[] {
  const oldWords = tokenize(oldText);
  const newWords = tokenize(newText);

  const lcs = computeLCS(oldWords, newWords);

  const result: DiffSegment[] = [];
  let oi = 0;
  let ni = 0;

  for (const match of lcs) {
    // Words removed from old (before this match)
    while (oi < match.oldIndex) {
      pushSegment(result, "removed", oldWords[oi]);
      oi++;
    }
    // Words added in new (before this match)
    while (ni < match.newIndex) {
      pushSegment(result, "added", newWords[ni]);
      ni++;
    }
    // Matching word
    pushSegment(result, "equal", oldWords[oi]);
    oi++;
    ni++;
  }

  // Remaining words
  while (oi < oldWords.length) {
    pushSegment(result, "removed", oldWords[oi]);
    oi++;
  }
  while (ni < newWords.length) {
    pushSegment(result, "added", newWords[ni]);
    ni++;
  }

  return result;
}

function tokenize(text: string): string[] {
  // Split by whitespace but keep newlines as tokens
  return text.split(/(\s+)/).filter(Boolean);
}

function pushSegment(result: DiffSegment[], type: DiffSegment["type"], value: string) {
  const last = result[result.length - 1];
  if (last && last.type === type) {
    last.value += value;
  } else {
    result.push({ type, value });
  }
}

interface LCSMatch {
  oldIndex: number;
  newIndex: number;
}

function computeLCS(a: string[], b: string[]): LCSMatch[] {
  const m = a.length;
  const n = b.length;

  // For very long texts, use a simplified approach
  if (m * n > 500000) {
    return computeLCSGreedy(a, b);
  }

  // Standard DP approach
  const dp: number[][] = Array.from({ length: m + 1 }, () =>
    new Array(n + 1).fill(0)
  );

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (a[i - 1] === b[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  // Backtrack
  const matches: LCSMatch[] = [];
  let i = m;
  let j = n;
  while (i > 0 && j > 0) {
    if (a[i - 1] === b[j - 1]) {
      matches.unshift({ oldIndex: i - 1, newIndex: j - 1 });
      i--;
      j--;
    } else if (dp[i - 1][j] > dp[i][j - 1]) {
      i--;
    } else {
      j--;
    }
  }

  return matches;
}

// Greedy LCS for large texts — less optimal but faster
function computeLCSGreedy(a: string[], b: string[]): LCSMatch[] {
  const bMap = new Map<string, number[]>();
  for (let j = 0; j < b.length; j++) {
    const arr = bMap.get(b[j]) || [];
    arr.push(j);
    bMap.set(b[j], arr);
  }

  const matches: LCSMatch[] = [];
  let lastJ = -1;

  for (let i = 0; i < a.length; i++) {
    const positions = bMap.get(a[i]);
    if (!positions) continue;
    // Find first position after lastJ
    const pos = positions.find((p) => p > lastJ);
    if (pos !== undefined) {
      matches.push({ oldIndex: i, newIndex: pos });
      lastJ = pos;
    }
  }

  return matches;
}

/**
 * Strip HTML tags and convert block elements to newlines for diffing.
 */
export function htmlToPlainText(html: string): string {
  return html
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<\/(p|h[1-6]|li|div|blockquote)>/gi, "\n")
    .replace(/<[^>]+>/g, "")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}
