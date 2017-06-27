module.exports =
[
    { pattern: /lbry-docs/,
      branchPattern: /master/,
      event: 'push',
      script: './repub.sh'
    }
];
