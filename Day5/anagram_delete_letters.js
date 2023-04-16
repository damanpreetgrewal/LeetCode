// Example
// Delete  from  and  from  so that the remaining strings are  and  which are anagrams. This takes  character deletions.

// Function Description
// Complete the makeAnagram function in the editor below.

// makeAnagram has the following parameter(s):
// string a: a string
// string b: another string

// Returns
// int: the minimum total characters that must be deleted

const makeAnagram = (a, b) => {
  const freqs = {};

  a.split('').forEach(char => (freqs[char] = (freqs[char] || 0) + 1)); //increment
  b.split('').forEach(char => (freqs[char] = (freqs[char] || 0) - 1)); // decrement
  console.log(freqs);
  return Object.keys(freqs).reduce((sum, key) => sum + Math.abs(freqs[key]), 0);
};

console.log(makeAnagram('cde', 'abc'));

// Output : 4
// Remove d and e from cde to get c.
// Remove a and b from abc to get c.
// It takes  deletions to make both strings anagrams.
